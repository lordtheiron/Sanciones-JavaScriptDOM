<?php
include_once 'conexion.php';
global $conexion;
$arrayAlumnos = array();
$consulta = json_decode(file_get_contents('php://input'));

$grupo = $consulta;

$ordenSQL = "SELECT a.id, a.nombre, a.fechaNac, a.correoMen, a.correoAd
            FROM grupo g,alumnos a, grupoalumno ga
            WHERE g.id=ga.grupo AND a.id=ga.alumno
            AND g.id=$grupo";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayAlumnos[] = $obj;
        $obj = $resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arrayAlumnos);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
