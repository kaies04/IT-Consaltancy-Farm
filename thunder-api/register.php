<?php 
include 'connection.php';

$password=sha1($_POST['password']);
if($_POST){
	if($_POST['name'] && $_POST['email'] && $_POST['password']){
		$sql = "insert into `users` set name='{$_POST['name']}', email='{$_POST['email']}',contact_no='{$_POST['contact_no']}',password='$password'";
		
		$result=$db->query($sql);
		if($result)
			echo json_encode(array("message" => "Successful saved.",'error'=>0));
		else
			echo json_encode(array("message" => "Failed.",'error'=>1));
	}else{
		echo json_encode(array("message" => "Name, email and password are required.",'error'=>1));
	}
}

