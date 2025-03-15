<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Usuarios; 
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use App\Services\PHPMailerService;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'senha' => 'required', 
        ]);

        $user = Usuarios::where('email', $request->email)->first();

        if ($user && Hash::check($request->senha, $user->senha)) {
            $token = $user->createToken('YourAppName')->plainTextToken;

            return response()->json([
                'message' => 'Login bem-sucedido',
                'token' => $token,
            ]);
        }

        return response()->json([
            'message' => 'Credenciais inválidas',
        ], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }
    
}