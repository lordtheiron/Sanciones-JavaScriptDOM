<?php
include_once 'conexion.php';
global $conexion;
$arrayMaterias= array();
$consulta = json_decode(file_get_contents('php://input'));

$alumno = $consulta;

$ordenSQL = "SELECT m.id, m.nombre
            FROM alumnos a, materia m, alumnomateria am
            WHERE a.id=am.alumno AND m.id=am.materia
            AND a.id=$alumno";
$resultado = $conexion->query($ordenSQL);

if($resultado->num_rows>0){
    $obj=$resultado->fetch_object();
    while($obj){
        $arrayMaterias[]= $obj;
        $obj=$resultado->fetch_object();
    }
    $jsonEnviado = JSON_encode($arrayMaterias);
}
else{
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}

echo ($jsonEnviado);
mysqli_close($conexion);
