<?php
require 'config.php';
require "vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$email = '';
$password = '';

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$table_name = 'users';

$query = "SELECT id, email, password FROM users WHERE email = '{$email}' LIMIT 0,1";

$result = mysqli_query($con,$query);
$rowcount= mysqli_num_rows($result);

if($rowcount>0)
{
    http_response_code(201);
    $row=mysqli_fetch_array($result, MYSQLI_BOTH);
    $id=$row['id'];
    $email=$row['email'];
    $password2 = $row['password'];
    if(password_verify($password, $password2))
    {
        $secret_key = "03F6CB2BFC6F13CFA7A71D29B6A726840C117F1AF634E88CF3C22B5CE02EF669";
        $issuer_claim = "THE_ISSUER"; // this can be the servername
        $audience_claim = "THE_AUDIENCE";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 3; //not before in seconds
        $expire_claim = $issuedat_claim + 60; // expire time in seconds
        $token = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
                "name" => $name,
                "email" => $email
        ));

        http_response_code(203);

        $jwt = JWT::encode($token, $secret_key);
        echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt,
                "email" => $email,
                "expireAt" => $expire_claim
            ));
    }
    else{
        http_response_code(402);
        echo json_encode(array("message" => "Login failed.", "password" => $password));
    }
}
?>
