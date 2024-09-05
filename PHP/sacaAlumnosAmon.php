<?php
include_once 'conexion.php';
global $conexion;
$arrayAlumnos = array();
$orden = "SELECT DISTINCT alu.id, alu.nombre, alu.fechaNac, alu.correoMen, alu.correoAd
            FROM alumnos alu, alumamonestado alam, expclase expu
            WHERE alam.alumno=alu.id OR expu.alumno=alu.id";
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
