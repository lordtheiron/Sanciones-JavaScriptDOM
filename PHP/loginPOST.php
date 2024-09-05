<?php
include_once 'conexion.php';
global $conexion;

$consulta = json_decode(file_get_contents('php://input'));

$usuario = $consulta->User;
$clave = $consulta->Pass;

$ordenSQL = "SELECT id, nombre, usuario, tipo, clave 
            FROM profesor 
            WHERE usuario = '$usuario' AND clave = '$clave';";
$resultado = $conexion->query($ordenSQL);

if ($resultado->num_rows > 0) {
    $usuario = $resultado->fetch_object();
    $jsonEnviado = JSON_encode($usuario);
} else {
    $error = "no existe";
    $jsonEnviado = JSON_encode($error);
}


echo ($jsonEnviado);
mysqli_close($conexion);
