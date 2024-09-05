<?php
include_once 'conexion.php';
global $conexion;

$Sancion = json_decode(file_get_contents('php://input'));

$idAlumno = $Sancion->Alumno;
$idProfesor = $Sancion->Profesor;
$causa = $Sancion->Causa;
$consecuencia = $Sancion->Consecuencia;
$fechaSancion = $Sancion->FechaSanc;
$fechaConsecuencia = $Sancion->FechaCons;
$fechaFinCastigo = $Sancion->FechaFin;
$directa = 'S';
$ordenSQL = "INSERT INTO sanciones(id, directa, causa, consecuencia, fechaSanc, fechaConsecuencia, fechaFinCastigo)
    VALUES (null, ?, ?, ?, ?, ?, ?);";
$sentencia = $conexion->prepare($ordenSQL);
$sentencia->bind_param("ssssss", $directa, $causa, $consecuencia, $fechaSancion, $fechaConsecuencia, $fechaFinCastigo);
$resultado = $sentencia->execute();
if ($conexion->affected_rows == 1) {
    $ordenSQL = "SELECT max(id) AS id FROM sanciones;";
    $resultado = $conexion->query($ordenSQL);
    $respuesta = $resultado->fetch_object();
    if ($resultado->num_rows > 0) {
        $idSancion = $respuesta->id; //Recoge el id para insertarlo en la tabla
        $ordenSQL = "INSERT INTO alumsancionado(id, sancion, alumno, profesor)
                         VALUES (null, ?, ?, ?);";
        $sentencia = $conexion->prepare($ordenSQL);
        $sentencia->bind_param("iii", $idSancion, $idAlumno, $idProfesor);
        $resultado = $sentencia->execute();
        if ($conexion->affected_rows == 1) {
            $ordenSQL = "INSERT INTO amonestacion (id, causa)
                VALUES (null, ?);";
            $sentencia = $conexion->prepare($ordenSQL);
            $sentencia->bind_param("s", $causa);
            $resultado = $sentencia->execute();
            if ($conexion->affected_rows == 1) {
                //y sacar su id
                $ordenSQL = "SELECT id, causa FROM amonestacion
                    WHERE id=(SELECT max(id) FROM amonestacion);";
                $resultado = $conexion->query($ordenSQL);
                if ($conexion->affected_rows == 1) {
                    //Registrar amonestacion
                    $fila = $resultado->fetch_assoc();
                    $idAmon = $fila['id'];
                    $ordenSQL = "INSERT INTO alumamonestado(id, amonestacion, alumno, profesor, fecha, firma, fechaFirma)
            VALUES (null, ?, ?, ?, ?, 'N', NULL);";
                    $sentencia = $conexion->prepare($ordenSQL);
                    $sentencia->bind_param("iiis", $idAmon, $idAlumno, $idProfesor, $fechaSancion);
                    $resultado = $sentencia->execute();
                    if ($conexion->affected_rows == 1) {
                        $jsonEnviado = JSON_encode("Registro de la sanción directa correcto.");
                    } else {
                        $jsonEnviado = JSON_encode("Error al registrar la amonestación de la sanción directa.");
                    }
                } else {
                    $jsonEnviado = JSON_encode("Error al recuperar la causa.");
                }
            } else {
                $jsonEnviado = JSON_encode("Error al registrar la causa.");
            }
        } else {
            $jsonEnviado = JSON_encode("Error al enlazar la sancion al alumno.");
        }
    } else {
        $jsonEnviado = JSON_encode("Error al sacar el id de la sanción.");
    }
} else {
    $jsonEnviado = JSON_encode("Error al registrar la sanción directa.");
}

echo ($jsonEnviado);
mysqli_close($conexion);
