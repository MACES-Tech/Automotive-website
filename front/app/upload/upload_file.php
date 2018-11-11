<?php
 
header("Access-Control-Allow-Origin: *");
$target_dir = __DIR__ . "/media/";
$target_dir = $target_dir . basename( $_FILES['file']['name']) ;
if(move_uploaded_file($_FILES['file']['tmp_name'], $target_dir))
 {
	echo  basename( $_FILES['file']['name']);
 }
 else {
 echo 0;
 }
 
 ?>