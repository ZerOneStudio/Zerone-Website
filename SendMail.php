<?php
/**
 * Created by PhpStorm.
 * User: wanghao
 * Date: 8/07/2016
 * Time: 2:18 PM
 */

	$name = $_POST["name"];
	$email_from = $_POST["email"];
	$message = $_POST["message"];

	if(empty($name)||empty($email_from)||empty($message)){
        echo "All fields are required";
        exit;
    }

	$to = "wanghao910324@gmail.com";
	$email_subject = "ZerOne Contact form submission: $name";
	$email_body = "You have recieved a new message. ".
        "Here are the details: \n Name: $name \n ".
        "Email: $email_from\n Message \n $message";

	if(mail($to, $email_subject, $email_body)){
        echo "true";
    };
	header('Location: index.html');

?>