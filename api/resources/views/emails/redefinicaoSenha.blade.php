<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email de Verificação de Senha</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #1F2937;
      color: #90A3AF;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 10px;
      min-height: 100vh;
    }
    .container {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      max-width: 100%;
      width: 465px;
      background-color: #2D3748;
      text-align: center;
    }
    .icon {
      font-size: 24px;
      margin-top: 20px;
    }
    .heading {
      font-size: 20px;
      margin: 20px 0;
      font-weight: bold;
      color: #fff;
    }
    .text {
      font-size: 14px;
      margin: 0 0 20px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #6D28D9;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
      margin-top: 10px;
    }
    .link {
      display: block;
      margin-top: 20px;
      background-color: #8B56F6;
      color: #E6F4F5;
      font-size: 14px;
      padding: 10px;
      border-radius: 4px;
      word-break: break-word;
      text-decoration: none;
    }
    .divider {
      border-top: 1px solid #ddd;
      margin: 20px 0;
      width: 100%;
    }
    .footer-text {
      font-size: 12px;
      line-height: 1.5;
      color: #A0AEC0;
    }

    @media (max-width: 480px) {
      .container {
        padding: 15px;
        width: 100%;
      }
      .heading {
        font-size: 18px;
      }
      .text {
        font-size: 12px;
      }
      .button {
        font-size: 12px;
      }
      .link {
        font-size: 12px;
        padding: 8px;
      }
      .footer-text {
        font-size: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">📩</div>
    <h1 class="heading">Email de Verificação de Senha</h1>
    <p class="text">
      Você solicitou um link para login no Serenidade através do email
      <strong>{{ $dadosEmail['email'] }}</strong>.
    </p>
    <div>
      <a href="{{ $dadosEmail['link'] }}" class="button">Clique aqui</a>
    </div>
    <p class="text">
      ou copie a URL abaixo e cole em seu browser:
      <a href="{{ $dadosEmail['link'] }}" class="link">{{ $dadosEmail['link'] }}</a>
    </p>
    <div class="divider"></div>
    <p class="footer-text">
      Se você não solicitou esse link de autenticação, apenas descarte esse e-mail.
    </p>
  </div>
</body>
</html>
