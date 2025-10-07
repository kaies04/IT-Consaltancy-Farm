<?php
include '../connection.php';
$data = [];

$code=$_GET['code'];

$sql = "SELECT * FROM `coupon` where code='$code'";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data= $row;
}
echo json_encode($data); 