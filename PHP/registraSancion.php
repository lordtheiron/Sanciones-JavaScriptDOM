<?php
include_once 'conexion.php';
global $conexion;

$Sancion = json_decode(file_get_contents('php://input'));

$idAlumno = $Sancion->Alumno;
$idProfesor = $Sancion->Profesor;
$amonestaciones = $Sancion->Amonestaciones;
$causa = $Sancion->Causa;
$consecuencia = $Sancion->Consecuencia;
$fechaSancion = $Sancion->FechaSanc;
$fechaConsecuencia = $Sancion->FechaCons;
$fechaFinCastigo = $Sancion->FechaFin;
$directa = 'N';

if (sizeof($amonestaciones) == 1) { //Solo hay una causa
    //Como solo hay una causa, el $Causa contiene la que se ha marcado en la tabla
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
            $idAmonestacion = $amonestaciones[0];
            $ordenSQL = "INSERT INTO amonsancion(id, amonestacion, sancion)
                            VALUES (null, ?, ?);";
            $sentencia = $conexion->prepare($ordenSQL);
            $sentencia->bind_param("ss", $idAmonestacion, $idSancion);
            $resultado = $sentencia->execute();
            if ($conexion->affected_rows == 1) {
                $ordenSQL = "INSERT INTO alumsancionado(id, sancion, alumno, profesor)
                                VALUES (null, ?, ?, ?);";
                $sentencia = $conexion->prepare($ordenSQL);
                $sentencia->bind_param("iii", $idSancion, $idAlumno, $idProfesor);
                $resultado = $sentencia->execute();
                if ($conexion->affected_rows == 1) {
                    $jsonEnviado = JSON_encode("Sanción registrada correctamente.");
                } else {
                    $jsonEnviado = JSON_encode("Error al enlazar la sancion al alumno.");
                }
            } else {
                $jsonEnviado = JSON_encode("Error al enlazar la sancion a una unica amonestación.");
            }
        } else {
            $jsonEnviado = JSON_encode("Error al sacar el id de la sanción.");
        }
    } else {
        $jsonEnviado = JSON_encode("Error al insertar la sancion a una unica amonestación.");
    }
} else if (sizeof($amonestaciones) > 1) { //Si hay mas de una
    //Aqui va la 'acumulacion de amonestaciones', que ya esta puesto en el $Causa
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
            //$idAmonestacion = $amonestaciones[0];
            foreach ($amonestaciones as $amon) {
                $ordenSQL = "INSERT INTO amonsancion(id, amonestacion, sancion)
                VALUES (null, ?, ?);";
                $sentencia = $conexion->prepare($ordenSQL);
                $sentencia->bind_param("ss", $amon, $idSancion);
                $resultado = $sentencia->execute();
            }
            if ($conexion->affected_rows == 1) {
                $ordenSQL = "INSERT INTO alumsancionado(id, sancion, alumno, profesor)
                                VALUES (null, ?, ?, ?);";
                $sentencia = $conexion->prepare($ordenSQL);
                $sentencia->bind_param("iii", $idSancion, $idAlumno, $idProfesor);
                $resultado = $sentencia->execute();
                if ($conexion->affected_rows == 1) {
                    $jsonEnviado = JSON_encode("Sanción registrada correctamente.");
                } else {
                    $jsonEnviado = JSON_encode("Error al enlazar la sancion al alumno.");
                }
            } else {
                $jsonEnviado = JSON_encode("Error al enlazar la sancion a una unica amonestación.");
            }
        } else {
            $jsonEnviado = JSON_encode("Error al sacar el id de la sanción.");
        }
    } else {
        $jsonEnviado = JSON_encode("Error al insertar la sancion a una unica amonestación.");
    }
}

echo ($jsonEnviado);
mysqli_close($conexion);
