<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuarios extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = 'usuarios';
    protected $primaryKey = 'idUsuarios'; 

    protected $fillable = [
        'nome',
        'email',
        'senha', 
    ];

    protected $hidden = [
        'senha', 
        'remember_token',
    ];

    // Informa ao Laravel que o campo de senha é 'senha'
    public function getAuthPassword()
    {
        return $this->senha;
    }

    // Criptografa a senha ao definir o valor do atributo
    public function setSenhaAttribute($value)
    {
        $this->attributes['senha'] = bcrypt($value);
    }
}
