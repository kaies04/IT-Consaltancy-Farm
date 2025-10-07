<?php 
include '../connection.php';
include '../auth_check.php';

if($_POST){
	
	if($_POST['name']){
		$sql = "insert into `coupon` set 
		name='{$_POST['name']}',
		code='{$_POST['code']}',
		amount='{$_POST['amount']}',
		start_date='{$_POST['start_date']}',
		finish_date='{$_POST['finish_date']}'";
		
		$result=$db->query($sql);
		if($result)
			echo json_encode(array("message" => "Successful saved.",'error'=>0));
		else
			echo json_encode(array("message" => "Failed.",'error'=>1));
	}else{
		echo json_encode(array("message" => "Name, email and password are required.",'error'=>1));
	}
}

