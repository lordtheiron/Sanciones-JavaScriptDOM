<?php
include_once 'conexion.php';
global $conexion;

$Sancion = json_decode(file_get_contents('php://input'));

$idAlumno = $Sancion->Alumno;
$idProfesor = $Sancion->Profesor;
$expulsiones = $Sancion->Expulsiones;
$causa = $Sancion->Causa;
$consecuencia = $Sancion->Consecuencia;
$fechaSancion = $Sancion->FechaSanc;
$fechaConsecuencia = $Sancion->FechaCons;

$jsonEnviado = $Sancion;

$ordenSQL = "INSERT INTO sanciones(id, directa, causa, consecuencia, fechaSanc, fechaConsecuencia)
                VALUES (null, 'N', ?, ?, ?, ?);";
$sentencia = $conexion->prepare($ordenSQL);
$sentencia->bind_param("ssss",  $causa, $consecuencia, $fechaSancion, $fechaConsecuencia);
$resultado = $sentencia->execute();
if ($conexion->affected_rows == 1) {
    $idSancion = $conexion->insert_id;
    $ordenSQL = "SELECT max(id) AS id FROM sanciones;";
    $resultado = $conexion->query($ordenSQL);
    $respuesta = $resultado->fetch_object();
    if ($resultado->num_rows > 0) {
        $idSancion = $respuesta->id; //Recoge el id para insertarlo en la tabla
        //$idExp = $expulsiones[0];
        foreach ($expulsiones as $idExp) {
            $ordenSQL = "INSERT INTO expsancion(id, expulsion, sancion)
                        VALUES (null, ?, ?);";
            $sentencia = $conexion->prepare($ordenSQL);
            $sentencia->bind_param("ii", $idExp, $idSancion);
            $resultado = $sentencia->execute();
        }
        if ($conexion->affected_rows == 1) {
            foreach ($expulsiones as $idExp) {
                $ordenSQL = "UPDATE expclase
                            SET sancionada='S'
                            WHERE id=?;";
                $sentencia = $conexion->prepare($ordenSQL);
                $sentencia->bind_param("i", $idExp);
                $resultado = $sentencia->execute();
            }
            if ($conexion->affected_rows == 1) {
                $jsonEnviado = "Sancion registrada correctamente.";
            } else {
                $jsonEnviado = "Error al marcar como sancionada la expulsión/es.";
            }
        } else {
            $jsonEnviado = "Error al enlazar la sancion con la expulsion.";
        }
    } else {
        $jsonEnviado = "Error al recuperar el id de la sancion.";
    }
} else {
    $jsonEnviado = "Error al insertar la sancion.";
}
echo (JSON_encode($jsonEnviado));
mysqli_close($conexion);
