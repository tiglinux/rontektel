<?php
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  $telefone = $_POST['telefone'];

  $arquivo = "
  <html>
    <head>
      <title>Contato - Rontektel</title>
    </head>
    <body>
      <h1>Mensagem de Contato</h1>
      <p><strong>Nome:</strong> $nome</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Telefone:</strong> $telefone</p>
      <p><strong>Mensagem:</strong></p>
      <p>$mensagem</p>
    </body>
  </html>
";
  // Configurações do email
  $to = "rontektel2026@gmail.com";
  $subject = "Novo Contato - Rontektel";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "From: " . $email . "\r\n";

  mail($to, $subject, $arquivo, $headers);

  // Redireciona para uma página de agradecimento ou exibe uma mensagem
  echo "<meta http-equiv='refresh' content='10;url=../index.html'>
        <script>
          alert('Mensagem enviada com sucesso! Retornando à página inicial em 10 segundos.');
        </script>";
?>