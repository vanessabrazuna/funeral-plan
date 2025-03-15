<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use App\Models\Redefinicao;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\RedefinicaoSenha;
use Illuminate\Support\Facades\Hash;

class PasswordResetController extends Controller
{
    public function validarCPF($cpf)
    {
        // Remove caracteres não numéricos
        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        // Verifica se o CPF tem 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Verifica se todos os dígitos são iguais, ex.: 11111111111 (CPFs inválidos)
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Calcula o primeiro dígito verificador
        for ($t = 9; $t < 11; $t++) {
            $d = 0;
            for ($c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }

        return true;
    } 

    public function esqueci_minha_senha(Request $request)
    {
        \Log::info("Início do processo de redefinição de senha");
    
        $request->validate([
            'cpf' => 'required|string',
        ]);
    
        $cpf = $request->cpf;
        \Log::info("CPF recebido: $cpf");
    
        // Verificar se o CPF é válido
        if (!$this->validarCPF($cpf)) {
            \Log::error("CPF inválido: $cpf");
            return response()->json(['message' => 'CPF inválido!'], 400);
        }
    
        // Verificar se o usuário existe
        $usuario = Usuarios::where('cpf', $cpf)->first();
        if (!$usuario) {
            \Log::error("Usuário não encontrado para o CPF: $cpf");
            return response()->json(['message' => 'Usuário não encontrado!'], 404);
        }
    
        \Log::info("Usuário encontrado: " . $usuario->email);
    
        // Verificar se há um token existente para o email do usuário
        $tokenData = Redefinicao::where('email', $usuario->email)->first();
    
        // Se um token já existir, excluí-lo
        if ($tokenData) {
            \Log::info("Excluindo token existente para o email: " . $usuario->email);
            Redefinicao::where('email', $usuario->email)->delete();

        }
    
        // Criar um novo token
        \Log::info("Criando novo token para o email: " . $usuario->email);
        $tokenData = Redefinicao::create([
            'email' => $usuario->email,
            'token' => Str::random(64),
            'created_at' => Carbon::now(),
        ]);
    
        \Log::info("Token gerado: " . $tokenData->token);
    
        // Preparar o link de redefinição
        $dadosEmail = [
            'email' => $usuario->email,
            'link' => env('APP_URL') . '/api/resetar-senha?t=' . $tokenData->token . '&email=' . $usuario->email,
        ];
    
        // Tentar enviar o email
        try {
            Mail::to($usuario->email)->send(new RedefinicaoSenha($dadosEmail));
            \Log::info("Email enviado para: " . $usuario->email);
        } catch (\Exception $e) {
            \Log::error("Erro ao enviar email: " . $e->getMessage());
            return response()->json(['message' => 'Erro ao enviar email de redefinição.'], 500);
        }
    
        return response()->json(['message' => 'Verifique sua caixa de e-mail. O link de redefinição ficará ativo por 10 minutos!'], 200);
    }
    
    public function resetar_senha(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'senha' => 'required|string|confirmed|min:6',
        ]);
    
        // Buscar a redefinição de senha pelo e-mail e token
        $reset = Redefinicao::where('email', $request->email)
            ->where('token', $request->token)
            ->first();
    
        if (!$reset) {
            return response()->json(['message' => 'Token inválido ou expirado.'], 400);
        }
    
        $usuario = Usuarios::where('email', $request->email)->first();
        if (!$usuario) {
            return response()->json(['message' => 'Usuário não encontrado.'], 404);
        }
    
        $usuario->password = Hash::make($request->password);
        $usuario->save();
    
        $reset->delete();
    
        return response()->json(['message' => 'Senha redefinida com sucesso!']);
    }
    

}
