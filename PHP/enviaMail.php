<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

include_once 'conexion.php';
global $conexion;

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$consulta = json_decode(file_get_contents('php://input'));

$Destinatario = $consulta->destinatario;
$Asunto = $consulta->asunto;
$Mensaje = $consulta->mensaje;
try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'tobarra1992@gmail.com';                //SMTP username
    $mail->Password   = 'tqhfpbclhxeqjvkt';                     //SMTP password
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;          //Enable implicit TLS encryption
    $mail->SMTPSecure = 'tls';                                  //Enable implicit TLS encryption
    $mail->CharSet = "UTF-8";
    $mail->Port       = 587;                             //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('tobarra1992@gmail.com', 'EDU-Mailer');
    $mail->addAddress($Destinatario);     //Add a recipient
    //$mail->addAddress('tobarra1992@hotmail.com',);     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = $Asunto;
    $mail->Body = $Mensaje;
    $mail->AltBody = 'Este es el cuerpo en texto plano';
    $mail->send();
    //echo 'El mensaje ha sido enviado';
    //echo json_encode($consulta);

    echo json_encode(1);
} catch (Exception $e) {
    echo json_encode(0);
}
