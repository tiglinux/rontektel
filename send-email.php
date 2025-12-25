<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    require "vendor/autoload.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);

    $mail -> isSMTP();
    $mail -> SMTPAuth = true;

    $mail -> Host = "smtp.gmail.com";
    $mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail -> Port = 587;

    $mail -> Username = 'rontektel2026@gmail.com';
    $mail -> Password = 'Rr@10?1516';

    $mail -> setFrom($email, $name);
    $mail -> addAddress("rontektel2026@gmail.com","Rontektel");

    $mail -> Subject = "Contato pelo site Rontektel";
    $mail -> Body = $message;

    $mail -> send();

    echo "Email enviado com sucesso!";


?>