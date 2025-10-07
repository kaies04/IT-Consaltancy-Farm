<?php
include '../connection.php';
include '../auth_check.php';

if ($_POST) {
    if (!empty($_POST['name']) && !empty($_POST['id'])) {
        $name = $_POST['name'];
        $size = $_POST['size'];
        $id = $_POST['id'];

        $sql = "UPDATE `categories` SET name='$name', size='$size' WHERE id='$id'";

        $result = $db->query($sql);

        if ($result) {
            echo json_encode(array("message" => "Successfully updated.", 'error' => 0));
        } else {
            echo json_encode(array("message" => "Failed.", 'error' => 1));
        }
    } else {
        echo json_encode(array("message" => "Name and ID are required.", 'error' => 1));
    }
}
?>
