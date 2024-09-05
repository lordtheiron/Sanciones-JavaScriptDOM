<?php
include_once 'conexion.php';
global $conexion;

$Amonestacion = json_decode(file_get_contents('php://input'));
if (is_numeric($Amonestacion->causa)) {
    //Si la causa existe
    $idAmon = $Amonestacion->causa;
    $idAlum = $Amonestacion->alumno;
    $idProf = $Amonestacion->profesor;
    $fecha = $Amonestacion->fecha;
    $ordenSQL = "INSERT INTO alumamonestado(id, amonestacion, alumno, profesor, fecha, firma, fechaFirma)
            VALUES (null, ?, ?, ?, ?, 'N', NULL);";
    $sentencia = $conexion->prepare($ordenSQL);
    $sentencia->bind_param("iiis", $idAmon, $idAlum, $idProf, $fecha);
    $resultado = $sentencia->execute();
    if ($conexion->affected_rows == 1) {
        $jsonEnviado = JSON_encode("Registro con causa existente correcto");
    } else {
        $jsonEnviado = JSON_encode("Error al registrar con causa existente");
    }
} else {
    //Si la causa es nueva
    $causaNueva = $Amonestacion->causa;    //Causa nueva
    //registrar la nueva Amonestacion
    $ordenSQL = "INSERT INTO amonestacion (id, causa)
                VALUES (null, ?);";
    $sentencia = $conexion->prepare($ordenSQL);
    $sentencia->bind_param("s", $causaNueva);
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
            $idAlum = $Amonestacion->alumno;
            $idProf = $Amonestacion->profesor;
            $fecha = $Amonestacion->fecha;
            $ordenSQL = "INSERT INTO alumamonestado(id, amonestacion, alumno, profesor, fecha, firma, fechaFirma)
            VALUES (null, ?, ?, ?, ?, 'N', NULL);";
            $sentencia = $conexion->prepare($ordenSQL);
            $sentencia->bind_param("iiis", $idAmon, $idAlum, $idProf, $fecha);
            $resultado = $sentencia->execute();
            if ($conexion->affected_rows == 1) {
                $jsonEnviado = JSON_encode("Registro con causa nueva correcto");
            } else {
                $jsonEnviado = JSON_encode("Error al registrar con causa nueva");
            }
        } else {
            $jsonEnviado = JSON_encode("Error al recuperar la causa nueva");
        }
    } else {
        $jsonEnviado = JSON_encode("Error al registrar la causa nueva");
    }
}




echo ($jsonEnviado);
mysqli_close($conexion);
