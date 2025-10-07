<?php 
include '../connection.php';
include '../auth_check.php';

if($_POST){
	if($_POST['name']){
		$sql = "insert into `categories` set name='{$_POST['name']}', size='{$_POST['size']}'";
		
		$result=$db->query($sql);
		if($result)
			echo json_encode(array("message" => "Successful saved.",'error'=>0));
		else
			echo json_encode(array("message" => "Failed.",'error'=>1));
	}else{
		echo json_encode(array("message" => "Name is required.",'error'=>1));
	}
}

