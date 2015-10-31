<?php 
include_once 'libs/xml2array.php';

if (!empty($_POST["text"])) {
	
	$request = $_POST["text"];
	
 	$array =  xml2array($request, 1, 'attribute');	
	print_r($array); 
	
	print '{"result": "'.$request.'"}';
	
	
}
?>