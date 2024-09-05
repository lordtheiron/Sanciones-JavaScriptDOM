<?php
include_once 'conexion.php';
global $conexion;
$arrayAmon = array();
$consulta = json_decode(file_get_contents('php://input'));

$alumno = $consulta;

$ordenSQL = "SELECT DISTINCT alam.id, amo.id, amo.causa, alam.fecha
                FROM alumamonestado alam, amonestacion amo, alumnos alu
                WHERE alam.amonestacion=amo.id
                AND alam.alumno=$alumno";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayAmon[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arrayAmon);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
