<?php 
include '../connection.php';
include '../auth_check.php';

$uploadDir = '../';
$image="";
if (!empty($_FILES['files'])) {
    foreach ($_FILES['files']['tmp_name'] as $index => $tmpName) {
        $name = rand().basename(trim($_FILES['files']['name'][$index]));
        $targetPath = 'products_file/'.$name;

        if (move_uploaded_file($tmpName, $uploadDir . $targetPath)) {
			$image=", image='$targetPath'";
        }
    }
}
if($_POST){
	
	if($_POST['name']){
		$sql = "insert into `products` set 
		name='{$_POST['name']}',
		description='{$_POST['description']}',
		price='{$_POST['price']}',
		discount='{$_POST['discount']}',
		category_id='{$_POST['category_id']}',
		brand_id='{$_POST['brand_id']}',
		colour_id='{$_POST['colour_id']}',
		is_featured='{$_POST['is_featured']}',
		is_inspired='{$_POST['is_inspired']}',
		specification='{$_POST['specification']}'
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

