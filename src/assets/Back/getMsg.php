<?php
require 'config.php';
$name=$_GET['id'];
$policies = [];
$sql = "SELECT id, name, messages FROM messages
		WHERE id>'{$name}'
		LIMIT 0,1;";
if($row=mysqli_query($con,$sql))
{
	$result=mysqli_fetch_assoc($row);
	$policies['id']    = $result['id'];
	$policies['name'] = $result['name'];
	$policies['message'] = $result['messages'];
	echo json_encode($policies);
}
else{
	$sql = "SELECT id, name, messages FROM messages
	LIMIT 0,1;";
	$row=mysqli_query($con,$sql);
	$result=mysqli_fetch_assoc($row);
	$policies['id']    = $result['id'];
	$policies['name'] = $result['name'];
	$policies['message'] = $result['messages'];
	echo json_encode($policies);
}
?>
