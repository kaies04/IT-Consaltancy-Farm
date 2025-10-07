<?php
include '../connection.php';
include '../auth_check.php';


if($_POST){
	$sql = "update `coupon` set 
		name='{$_POST['name']}',
		code='{$_POST['code']}',
		amount='{$_POST['amount']}',
		start_date='{$_POST['start_date']}',
		finish_date='{$_POST['finish_date']}'
	where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

