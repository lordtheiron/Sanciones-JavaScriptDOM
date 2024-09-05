<?php
include_once 'conexion.php';
global $conexion;
$arrayExp = array();
$consulta = json_decode(file_get_contents('php://input'));

$alumno = $consulta;

$ordenSQL = "SELECT id, motivo
            FROM expclase
            WHERE alumno=$alumno;";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayExp[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arrayExp);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
