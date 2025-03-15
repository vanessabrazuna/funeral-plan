<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RedefinicaoSenha extends Mailable
{
    use Queueable, SerializesModels;

    public $dadosEmail;

    /**
     * Cria uma nova instância do e-mail.
     *
     * @param array $dadosEmail
     */
    public function __construct($dadosEmail)
    {
        $this->dadosEmail = $dadosEmail;
    }

    /**
     * Constrói o e-mail.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Redefinição de Senha')
                    ->view('emails.redefinicaoSenha')
                    ->with('dadosEmail', $this->dadosEmail);
    }
}
