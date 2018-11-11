<?php
//error_reporting(E_ALL);
// call http://localhost/thumbs/thumb.php?src=http://localhost/media/flowing_rock.jpg
require 'thumb_core.php';
// path before http can read (path to the www folder)
//define ('BASE_URL',__DIR__);//*/var/www
//define ('SUB','img_uploads');

define ('THUMB_WIDTH', 100);
define ('THUMB_HEIGHT', 100);
define ('THUMB_FORMAT', 'png');
define ('THUMB_CROP', 1);


// parameters
$src_file = $_GET['src'];
$src_file = __DIR__.DIRECTORY_SEPARATOR."media".DIRECTORY_SEPARATOR.$src_file;

if (! $src_file) exit;
$width = ! isset($_GET['width']) ? 0 : $_GET['width'];
$height = ! isset($_GET['height']) ? 0 : $_GET['height'];
$format = ! isset($_GET['format']) ? THUMB_FORMAT : $_GET['format'];
$crop = ! isset($_GET['crop']) ? THUMB_CROP : $_GET['crop'];

$thumb_file = thumb($src_file, $width, $height, $crop, $format);

//die($thumb_file);
// now redirect to the image file
header("Location: $thumb_file");
exit;
?>
