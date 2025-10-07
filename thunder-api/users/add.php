<?php 
include '../connection.php';
include '../auth_check.php';

$password=sha1($_POST['password']);
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
} else {
    echo "No files uploaded.";
}
if($_POST){
	if($_POST['name'] && $_POST['email'] && $_POST['password']){
		$sql = "insert into `users` set name='{$_POST['name']}', email='{$_POST['email']}',contact_no='{$_POST['contact_no']}',password='$password' $image";
		
		$result=$db->query($sql);
		if($result)
			echo json_encode(array("message" => "Successful saved.",'error'=>0));
		else
			echo json_encode(array("message" => "Failed.",'error'=>1));
	}else{
		echo json_encode(array("message" => "Name, email and password are required.",'error'=>1));
	}
}

