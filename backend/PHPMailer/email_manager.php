<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once $_SERVER['DOCUMENT_ROOT']."/backend/PHPMailer/src/Exception.php";
require_once $_SERVER['DOCUMENT_ROOT']."/backend/PHPMailer/src/PHPMailer.php";
require_once $_SERVER['DOCUMENT_ROOT']."/backend/PHPMailer/src/SMTP.php";

function sendPlainEmail($to, $subject, $body){
	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->Encoding = 'base64';
    $emailAddress = "info@makudaconsulting.com";
    $emailPwd = "Makuda-0909";

	try {
		$mail->isSMTP();                                            // Send using SMTP
		$mail->Host       = 'makudaconsulting.com';                 // Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
		$mail->Username   = $emailAddress;                          // SMTP username
		$mail->Password   = $emailPwd;                              // SMTP password
		$mail->SMTPSecure = 'ssl';         							// Enable SSL
		$mail->Port       = 465;                                    // TCP port to connect to

		//Recipients
		$mail->setFrom($emailAddress, 'Makuda Consulting');
		$mail->addAddress($to);     // Add a recipient
	
		// Content
		$mail->Subject = $subject;
		$mail->Body    = $body;
		$mail->AltBody = str_replace("<br>", "\n", $body); //BODY PER NON HTML VIEWERS
	
		$mail->send();
		$stato = 1;
	} catch (Exception $e) {
		echo $e->getMessage();
		$stato = 0;
	}

	return $stato==1;
}

?>