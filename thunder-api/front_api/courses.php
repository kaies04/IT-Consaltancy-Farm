<?php
include '../connection.php';

$data = [];

$sql = "SELECT courses.*,categories.name as cat_name FROM `courses` JOIN categories on categories.id=courses.category_id";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
echo json_encode($data); 