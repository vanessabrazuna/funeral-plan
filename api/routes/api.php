<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasswordResetController;

// Rota para login
Route::post('/login', [AuthController::class, 'login'])->name('login');

// Rotas protegidas que exigem autenticação
Route::middleware('auth:sanctum')->group(function () {
    // Rota para obter informações do usuário
    Route::get('/user', function (Request $request) {
        return response()->json($request->user());
    });

    // Rota para logout
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Rota para esqueci minha senha
Route::post('/esqueci-minha-senha', [PasswordResetController::class, 'esqueci_minha_senha']);

// Rota para resetar a senha
Route::put('/resetar-senha', [PasswordResetController::class, 'resetar_senha']);