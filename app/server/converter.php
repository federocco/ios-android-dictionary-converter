<?php
include_once 'libs/xml2array.php';

if (! empty ( $_POST ["text"] )) {
	
	$request = $_POST ["text"];
	
	$array = xml2array ( $request, 1, 'attribute' );
	
	if (empty ( $array ) && count ( $array ) == 0) {
		print "tento lo string";
	} else {
		$resultArray = array ();
		foreach ( $array ["resources"] as $value => $strings ) {
			foreach ( $strings as $value1 => $string ) {
				if (! empty ( $string ["attr"] )) {
					$temp = array ();
					$temp ["name"] = $string ["attr"] ["name"];
					$temp ["value"] = $string ["value"];
					array_push ( $resultArray, $temp );
				}
			}
		}
		
		print '{"status": "ok", "result": ' . json_encode ( $resultArray ) . '}';
	}
}
?>