<?php
include_once 'conexion.php';
global $conexion;
$arrayAmon = array();
$consulta = json_decode(file_get_contents('php://input'));

$profesor = $consulta;

$ordenSQL = "SELECT alu.nombre, amo.causa, aluma.fecha
                FROM alumnos alu, alumamonestado aluma, amonestacion amo
                WHERE alu.id=aluma.alumno AND aluma.amonestacion=amo.id 
                AND aluma.profesor=$profesor";
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
