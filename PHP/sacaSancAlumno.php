<?php
include_once 'conexion.php';
global $conexion;
$arraySanciones = array();
$consulta = json_decode(file_get_contents('php://input'));

$alumno = $consulta;


$ordenSQL = "SELECT sanc.id, sanc.causa
                FROM alumsancionado alsa, sanciones sanc
                WHERE alsa.sancion=sanc.id 
                AND alsa.alumno=$alumno";
$resultado = $conexion->query($ordenSQL);
$respuesta = $resultado->fetch_object();
if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arraySanciones[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = $arraySanciones;
} else {
    $jsonEnviado = "no existe";
}

echo JSON_encode($jsonEnviado);
mysqli_close($conexion);
