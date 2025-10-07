<?php
include '../connection.php';
include '../auth_check.php';


if($_POST){
	$sql = "update `customerservices` set name='{$_POST['name']}', email='{$_POST['email']}',services='{$_POST['services']}',msg='{$_POST['msg']}' where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

