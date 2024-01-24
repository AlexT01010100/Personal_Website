<?php
require 'vendor/autoload.php';

//cd Documents\Personal_website
//php -S localhost:8000

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email configuration for PHPMailer
    $mail = new PHPMailer(true);

    try {
        //Server settings (SMTP)
        $mail->isSMTP();
        $mail->Host       = 'smtp-relay.brevo.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'alterry@buffalo.edu'; // Replace with your Brevo SMTP login
        $mail->Password   = 'HqmMFc6dY8WThQ03';   // Replace with your Brevo SMTP key value
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('alexwebsite17@gmail.com', $fullName); //who it's from
        $mail->addAddress('alexwebsite17@gmail.com'); //who it's going to

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'Personal Website Message';
        $mail->Body    = "Name: $fullName\nEmail: $email\nMessage:\n$message";

        //send the mail
        $mail->send();

        // Email sent successfully using PHPMailer, re-direct back to homepage
        header("Location: personal_website.html?email_sent_successfully");
        exit();
    } catch (Exception $e) {
        // Email not sent using PHPMailer, re-direct back to homepage
        header("Location: personal_website.html?error_sending_email");
        // Delay to see the error message
        sleep(3);
        //Error info posted to terminal
        error_log("Error sending email using PHPMailer: " . $mail->ErrorInfo);
        exit();
    }
}
?>
