<?php
include_once 'conexion.php';
global $conexion;

$arrayProfes = array();

$orden = "SELECT * FROM profesor";
$resultado = $conexion->query($orden);

if ($resultado->num_rows > 1) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayProfes[] = $obj;
        $obj = $resultado->fetch_object();
    }
    echo JSON_encode($arrayProfes);
} else {
    echo "ha ocurrido un error";
}
