<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Mail\RedefinicaoSenha; 
use PHPMailer\PHPMailer\Exception;

class PHPMailerService
{
    protected $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);

        // Configurações do PHPMailer
        $this->mail->isSMTP();
        $this->mail->Host       = env('MAIL_HOST');
        $this->mail->SMTPAuth   = true;
        $this->mail->Username   = env('MAIL_USERNAME');
        $this->mail->Password   = env('MAIL_PASSWORD');
        $this->mail->SMTPSecure = env('MAIL_ENCRYPTION', 'tls');
        $this->mail->Port       = env('MAIL_PORT');
    }

    public function sendEmail($to, $subject, $body)
    {
        try {
            $this->mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            $this->mail->addAddress($to);
            $this->mail->Subject = $subject;
            $this->mail->Body    = $body;
            $this->mail->isHTML(true);

            $this->mail->send();
            return true;
        } catch (Exception $e) {
            return "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
        }
    }
}
