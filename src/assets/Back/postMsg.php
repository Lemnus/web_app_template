<?php
require_once 'config.php';

$sql = "INSERT INTO messages (id, name, message)
VALUES ('1', 'Doe', 'john@example.com')";

mysqli_query($sql);

?>