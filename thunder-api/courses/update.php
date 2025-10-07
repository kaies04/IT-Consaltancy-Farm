<?php
include '../connection.php';
include '../auth_check.php';


if($_POST){
	$sql = "update `courses` 
							set category_id='{$_POST['category_id']}', 
							title='{$_POST['title']}',
							description='{$_POST['description']}',
							price='{$_POST['price']}',
							duration='{$_POST['duration']}'
							where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

