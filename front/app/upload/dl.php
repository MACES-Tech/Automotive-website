<?php
$_SESSION['PROXYFORALL']='proxy.kermit.rd.francetelecom.fr:3128';
function get_client_ip() {
    $ipaddress = '';
    if ($_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if($_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if($_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if($_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if($_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if($_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function deleteDir($dirPath) {
    if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            self::deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);
}
if($_SESSION['PROXYFORALL']){
  $aContext = array(
    'http' => array(
        'proxy' => 'tcp://'.$_SESSION['PROXYFORALL'],
        'request_fulluri' => true
    ),
);
 stream_context_set_default($aContext);
 }

if(!isset($_GET['dr'])) exit;

$dir = $_GET['dr'];
$pos = strrpos($dir,'/');
if($pos == 1) exit;
if($pos){
	$dir = substr($dir,0,$pos);
}

$target_dir = __DIR__."/media/".$dir;
echo $target_dir;
if(!is_dir($target_dir)) exit;

deleteDir($target_dir);


header("Access-Control-Allow-Origin: *");
?>