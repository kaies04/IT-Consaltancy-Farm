<?php
include '../connection.php';
include '../auth_check.php';

$id=$_GET['id'];
$sql = "delete from `categories` where id=$id";

$result=$db->query($sql);
if($result)
	echo json_encode(array("message" => "Successful deleted"));
else
	echo json_encode(array("message" => "Failed."));
