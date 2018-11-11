<?php

$_SESSION['PROXYFORALL'] = 'proxy.kermit.rd.francetelecom.fr:3128';

function get_client_ip() {
    $ipaddress = '';
    if ($_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if ($_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if ($_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if ($_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if ($_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if ($_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

if ($_SESSION['PROXYFORALL']) {
    $aContext = array(
        'http' => array(
            'proxy' => 'tcp://' . $_SESSION['PROXYFORALL'],
            'request_fulluri' => true
        ),
    );
    stream_context_set_default($aContext);
}

$target_dir = __DIR__ . "/media";

if (!is_dir($target_dir))
    mkdir($target_dir, 0777, true);

header("Access-Control-Allow-Origin: *");

$thump_dir = uniqid('', true);
$target_dir = $target_dir . DIRECTORY_SEPARATOR . $thump_dir . DIRECTORY_SEPARATOR;
mkdir($target_dir, 0777, true);
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir . basename($_FILES["file"]["name"]))) {
    // echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
    echo $thump_dir . '/' . $_FILES["file"]["name"];
} else {
    rmdir($target_dir);
    //echo "Sorry, there was an error uploading your file.";
    echo 0;
}

?>