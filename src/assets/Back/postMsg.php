<?php
require 'config.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$name=$request->name;
$message=$request->message;

if(trim($request->name) === '')
  {
    return http_response_code(400);
  }

$sql = "INSERT INTO messages (id, name, messages, email) 
        VALUES (null, '{$name}', '{$message}' ,'john@example.com')";

if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $policy = [
      'id' => mysqli_insert_id($con),
      'name' => $name,
      'message'    => $message
    ];
    echo json_encode($policy);
  }
  else
  {
    die(mysqli_error($con));
    http_response_code(422);
  }

?>