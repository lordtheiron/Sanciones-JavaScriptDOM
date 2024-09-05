<?php
include_once 'conexion.php';
global $conexion;
$arrayAmon = array();

$ordenSQL = "SELECT alam.id AS id, pro.nombre AS profesor, amo.causa 
                AS amonestacion, alu.nombre AS alumno, gru.grupo AS grupo, alam.fecha
            FROM alumamonestado alam, amonestacion amo, alumnos alu, profesor pro, grupoalumno gra, grupo gru
            WHERE alam.amonestacion= amo.id AND alam.alumno= alu.id AND alam.profesor=pro.id 
                AND alam.alumno=gra.alumno AND gra.grupo=gru.id;";
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
