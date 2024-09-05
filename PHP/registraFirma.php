<?php
include_once 'conexion.php';
global $conexion;
$Firmas = array();
$Firmas = json_decode(file_get_contents('php://input'));
$Amon = $Firmas->amon;
$Exp = $Firmas->expul;
$fecha = $Firmas->fecha;
$jsonEnviado = JSON_encode("Firmas registradas correctamente.");

if (empty($Amon) && empty($Exp)) { //Si no se ha firmado nada, no se hace nada
    $jsonEnviado = JSON_encode("No hay firmas que registrar.");
} else { //Si se ha firmado algo, se registra en la base de datos
    if (!empty($Amon)) { //Si hay amonestaciones, se registran
        $arrLength1 = count($Amon);
        for ($i = 0; $i < $arrLength1; $i++) {
            $id = $Amon[$i];
            $ordenSQL = "UPDATE alumamonestado
                        SET firma='S', fechaFirma='$fecha'
                        WHERE id=$id;";
            $resultado = $conexion->query($ordenSQL);
            if ($conexion->affected_rows != 1) {
                $jsonEnviado = JSON_encode("Error registrando amonestaciones firmadas.");
                break;
            } else {
                $jsonEnviado = JSON_encode("Amonestaciones registradas correctamente.");
            }
        }
    }
    if (!empty($Exp)) { //Si hay expulsiones, se registran
        $arrLength2 = count($Exp);
        for ($i = 0; $i < $arrLength2; $i++) {
            $id = $Exp[$i];
            $ordenSQL = "UPDATE expclase
                        SET firma='S', fechaFirma='$fecha'
                        WHERE id=$id;";
            $resultado = $conexion->query($ordenSQL);
            if ($conexion->affected_rows != 1) {
                $jsonEnviado = JSON_encode("Error registrando expulsiones firmadas.");
                break;
            } else {
                $jsonEnviado = JSON_encode("Expulsiones registradas correctamente.");
            }
        }
    }
    if (!empty($Amon) && !empty($Exp)) {
        $jsonEnviado = JSON_encode("Amonestaciones y expulsiones registradas correctamente.");
    }
}
echo ($jsonEnviado);
mysqli_close($conexion);
