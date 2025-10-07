<?php 
include '../connection.php';
include '../auth_check.php';

$uploadDir = '../';
$image="";
if (!empty($_FILES['files'])) {
    foreach ($_FILES['files']['tmp_name'] as $index => $tmpName) {
        $name = rand().basename($_FILES['files']['name'][$index]);
        $targetPath = 'courses_file/'.$name;

        if (move_uploaded_file($tmpName, $uploadDir . $targetPath)) {
			$image=", image='$targetPath'";
        }
    }
} else {
    echo "No files uploaded.";
}
if($_POST){
	if($_POST['category_id'] && $_POST['title']){
		
		$sql = "insert into `courses` set category_id='{$_POST['category_id']}', 
											title='{$_POST['title']}',
											description='{$_POST['description']}',
											price='{$_POST['price']}',
											duration='{$_POST['duration']}'
											 $image";
		
		$result=$db->query($sql);
		if($result)
			echo json_encode(array("message" => "Successful saved.",'error'=>0));
		else
			echo json_encode(array("message" => "Failed.",'error'=>1));
	}else{
		echo json_encode(array("message" => "Name, email and password are required.",'error'=>1));
	}
}

