<?php
include '../connection.php';
include '../auth_check.php';
$uploadDir = '../';
$image="";
if (!empty($_FILES['files'])) {
    foreach ($_FILES['files']['tmp_name'] as $index => $tmpName) {
        $name = rand().basename($_FILES['files']['name'][$index]);
        $targetPath = 'users_file/'.$name;

        if (move_uploaded_file($tmpName, $uploadDir . $targetPath)) {
			$image=", image='$targetPath'";
        }
    }
}
$pass="";
if($_POST['password']!=''){
	$p=sha1($_POST['password']);
	$pass=", password='{$p}'";
}
if($_POST){
	$sql = "update `users` set name='{$_POST['name']}', email='{$_POST['email']}',contact_no='{$_POST['contact_no']}' $pass $image where id='{$_POST['id']}'";
	
	$result=$db->query($sql);
	if($result)
		echo json_encode(array("message" => "Successful updated."));
	else
		echo json_encode(array("message" => "Failed."));
	
}

