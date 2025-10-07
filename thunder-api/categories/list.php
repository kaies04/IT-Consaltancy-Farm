<?php
include '../connection.php';
include '../auth_check.php';
$data = [];

$sql = "SELECT * FROM categories";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
echo json_encode($data); 