<?php
include_once 'conexion.php';
global $conexion;
$arrayMotivos = array();
$consulta = json_decode(file_get_contents('php://input'));

$alumno = $consulta;

$ordenSQL = "SELECT *
            FROM expclase";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayMotivos[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arrayMotivos);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
