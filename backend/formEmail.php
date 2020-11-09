<?php

$ip = $_SERVER['REMOTE_ADDR'];
$captcha = $_POST['captcha'];
$fistName = '';
$lastName = '';
$email = '';
$message = '';
$mail_makuda = 'simone.santacroce@makudaconsulting.com';
$mail_object = 'Form Contact from makudaConsulting site';
if (!$captcha) {
    echo -1;
}else{
    $secretKey = "6LdPUN8ZAAAAAIeuWpVjrtIv3NoXTj0VQZQX_Mks";
    $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
    $response = file_get_contents($url);
    $responseKeys = json_decode($response,true);
    if($responseKeys['success'] ==1){
        // valid -> do something
        $fistName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $message = $_POST['textArea'];
        $headers  = "From: ".$fistName." < ".$email." >\n";
        $headers .= "Cc: ".$fistName." < ".$email." >\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();
        $headers .= "X-Priority: 1\n"; // Urgent message!
        $headers .= "Return-Path: ".$email."\n"; // Return path for errors
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
        if (mail($mail_makuda, $mail_object, $message, $headers))
            echo 1;
        else
            echo 2;

    }
    else{
        // not valid
        echo 0;
    }
}

