<?php
require("../sendgrid/sendgrid-php.php");
//require 'config.php';

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("sirbsebi@gmail.com", "Seb");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("sirbsebi@gmail.com", "Example User");
$email->addContent("text/plain", "and easy to do anywhere, even with PHP");
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid('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');
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getTraceAsString() ."\n";
}