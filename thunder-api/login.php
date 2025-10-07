<?php

include 'connection.php';
$data = json_decode(file_get_contents("php://input"));

$email = $_POST['email'];
$password = sha1(trim($_POST['password']));

$rdata=[];
$sql = "SELECT * FROM `users` where email='$email' and password='$password'";
$result=$db->query($sql);
if($result->num_rows > 0){
	while($r=$result->fetch_assoc()){
		$rdata=$r;
	}
	
	$remember_token=rand(1111,9999).time().rand(111111,999999);

	$updatesql="update users set remember_token='$remember_token' where id={$rdata['id']}";
	
	$r=$db->query($updatesql);
	if($r){
		echo json_encode(
			array(
				"message" => "Successful login.",
				"jwt" => $remember_token,
				"datas"=>json_encode($rdata)
			));
	}else{
		echo json_encode(array("message" => "Login failed. Try again"));
	}
}else{
	echo json_encode(array("message" => "Login failed."));
}
