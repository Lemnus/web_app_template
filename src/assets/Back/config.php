<?php

function connect()
{
  $servername = "localhost";
  $username = "root";
  $password = "admin";
  $db_name = "ket";

  $connect = mysqli_connect($servername, $username, $password, $db_name);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
