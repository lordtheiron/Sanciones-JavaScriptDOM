<?php
include_once 'conexion.php';
global $conexion;
$arraySanciones = array();
$consulta = json_decode(file_get_contents('php://input'));

$grupo = $consulta;

$ordenSQL = "SELECT DISTINCT causa
            FROM sanciones;";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arraySanciones[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arraySanciones);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
