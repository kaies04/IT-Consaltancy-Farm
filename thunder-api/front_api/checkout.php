<?php
	include '../connection.php';
	$data = [];
	$sql="insert into orders set order_date=now(), ";
	if($_POST){
		foreach($_POST as $k=>$v){
			$v=$db->real_escape_string($v);
			$sql.=" $k='$v',";
		}
	}
	$sql=rtrim($sql,',');
// echo $sql;
// die();
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful saved.",'error'=>0));
	else
		echo json_encode(array("message" => "Failed.",'error'=>1));
	
