<?php
	include_once 'conexion.php';
	global $conexion;
	$arrayGrupos= array();
	$orden="SELECT * FROM grupo";
	$resultado=$conexion->query($orden);

	if($resultado->num_rows>1){
		$obj=$resultado->fetch_object();
		while($obj){
			$arrayGrupos[]= $obj;
			$obj=$resultado->fetch_object();
		}
		echo JSON_encode($arrayGrupos);
	}
	else{
		echo "ha ocurrido un error";
	}
