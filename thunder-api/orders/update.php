<?php
include '../connection.php';
include '../auth_check.php';

if($_POST){
	$sql = "update `orders` set 
		order_status='{$_POST['order_status']}',
		delivery_date='{$_POST['delivery_date']}'
	where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

