<?php
include_once 'conexion.php';
global $conexion;

$grupo = json_decode(file_get_contents('php://input'));
$arrayAlumnos = array();

$orden = "SELECT DISTINCT alu.id, alu.nombre, alu.fechaNac, alu.correoMen, alu.correoAd
            FROM alumnos alu, alumamonestado alam, grupoalumno gra
            WHERE alam.alumno=alu.id AND gra.alumno=alu.id
            AND gra.grupo=$grupo";
$resultado = $conexion->query($orden);

if ($resultado->num_rows > 1) {
    $obj = $resultado->fetch_object();
    while ($obj) {
        $arrayAlumnos[] = $obj;
        $obj = $resultado->fetch_object();
    }
    echo JSON_encode($arrayAlumnos);
} else {
    echo JSON_encode("ha ocurrido un error");
}
