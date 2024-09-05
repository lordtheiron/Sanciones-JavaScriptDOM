<?php
include_once 'conexion.php';
global $conexion;

$Expulsion = json_decode(file_get_contents('php://input'));

$idAlumno = $Expulsion->alumno;
$motivo = $Expulsion->motivo;
$idMateria = $Expulsion->materia;
$idProfesor = $Expulsion->profesor;
$fecha = $Expulsion->fecha;

$ordenSQL = "INSERT INTO expclase (id, alumno, motivo, asignatura, profesor, fecha, firma, fechaFirma)
            VALUES (NULL, ?, ?, ?, ?, ?, 'N', NULL);";
$sentencia = $conexion->prepare($ordenSQL);
$sentencia->bind_param("isiis", $idAlumno, $motivo, $idMateria, $idProfesor, $fecha);
$resultado = $sentencia->execute();
if ($conexion->affected_rows == 1) {
    $jsonEnviado = JSON_encode("Registro con causa existente correcto");
} else {
    $jsonEnviado = JSON_encode("Error al registrar con causa existente");
}

echo ($jsonEnviado);
mysqli_close($conexion);
