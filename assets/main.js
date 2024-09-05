/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
//import { ConsultaObjeto, ConsultaObjeto2 } from "./Modulos/ConsultaObjeto.js";
//import * as ConsultaObjeto from './Modulos/ConsultaObjeto.js';
import * as recursos from "./apartados/utilidades.js";
import { login, verificaLogin } from "./apartados/iniSesion.js";
import { menuInicio } from "./apartados/menuInicio.js";
import { instalaciones, recursosCentro, ofertaEducativa } from "./apartados/apartadosCentro.js";
import { menuAmon, registrarAmon } from "./apartados/menuAmon.js";
import { menuExp, registrarExp } from "./apartados/menuExp.js";
import { menuFirma, registrarFirma } from "./apartados/menuFirma.js";
import { menuCorrec } from "./apartados/menuCorrecciones.js";
import { menuCorrecAmon, ponerSancion } from "./apartados/menuCorreccionesAmon.js";
import { menuCorrecDir, registrarSancionDir } from "./apartados/menuCorreccionesDir.js";
import { menuListado } from "./apartados/menuListados.js";
////////////////////VARIABLES////////////////////////////////////
//let menu = document.getElementById("navbar");
var contenedor = document.getElementById("contenedor");
var usCook = "";
////CARGA_INICIO///////////////////////////////////////////////////////////
window.onload = function () {
    //Esto se ejecuta nada mas abrir el HTML
    //Muestra el banner de cookies si no se ha aceptado
    //document.getElementById('inputFecha').valueAsDate = new Date();
    let banCook = recursos.read_cookie("aceptaCookies");
    //console.log(banCook);
    if (banCook) {
        document.getElementById("bannerCookies").style.display = "none";
    } else {
        document.getElementById("bannerCookies").style.display = "block";
    }
    //Abre el login si la cookie de sesion no existe.
    usCook = recursos.read_cookie("Usuario");
    //console.log(usCook);
    //console.log(usCook.tipo);
    if (usCook) {
        recursos.actualizaUsuario();
        //Abre la ventana principal
        //menuInicio();
    } else {
        //Abre el login
        //login();
    }
};
//Muestra el objeto ordenado en consola.
//console.log("Usuario: " + JSON.stringify(usuario.usuario, null, 4));
////BOTONES////////////////////////////////////////////
document.addEventListener("click", function (event) {
    let selec = event.target.id;
    //Extraera el ID de donde haga click.
    //console.log(`Seleccionado ${selec}`);
    switch (selec) {
        case "InicioSesion"://El del login
            //console.log(`Entra en ${selec}`);
            //verificaLogin();
            let respuesta = verificaLogin();
            console.log(respuesta);
            break;
        case "Salir"://Cierra la sesion, eliminando la cookie
            //console.log(`Entra en ${selec}`);
            //Elimina la cookie del usuario
            recursos.delete_cookie("Usuario");
            let cook = recursos.read_cookie("Usuario");
            console.log(cook);
            //Elimina la cookie del banner de cookies
            recursos.delete_cookie("aceptaCookies");
            let cookBan = recursos.read_cookie("aceptaCookies");
            console.log(cookBan);
            //Muestra el mensaje de sesion cerrada
            recursos.modalMensajes("bueno", "Sesión cerrada", "Ha cerrado sesión, volverá al inicio.");
            $('#staticBackdrop').modal('show');
            recursos.limpiar();
            //Recarga la pagina, haciendo que todo vuelva a verse como al principio, sin usuario.
            setTimeout(function () {
                location.reload();
            }, 2000);
            break;
        case "Editar"://Apartado de editar el usuario.
            //console.log(`Entra en ${selec}`);
            recursos.modalMensajes("malo", "Esta no es la sección que estás buscando.", "Esta sección aún no está disponible.");
            $('#staticBackdrop').modal('show');
            break;
        case "aceptaCookie"://Cierra la ventana de las cookies
            //console.log(`Entra en ${selec}`);
            recursos.bake_cookie("aceptaCookies", true);
            document.getElementById("bannerCookies").style.display = "none";
            break;
        case "rechazaCookie"://Obliga a aceptar las cookies
            console.log(`Entra en ${selec}`);
            alert("No se puede acceder sin aceptar las cookies");
            break;
        ////Botones de navegación de la barra////
        case "VolverInicio"://Devuelve al usuario al menu inicial.
            //console.log(`Entra en ${selec}`);
            location.reload();
            break;
        case 'Instalaciones'://Sección de las instalaciones del centro
            //Cambiar el active
            document.getElementById("Instalaciones").setAttribute('class', 'nav-link active');
            document.getElementById("Recursos").setAttribute('class', 'nav-link');
            document.getElementById("OfEducativa").setAttribute('class', 'nav-link');
            document.getElementById("MenuSanciones").setAttribute('class', 'nav-link');
            /*------------------------------*/
            recursos.limpiar();
            instalaciones();
            break;
        case 'Recursos'://Sección de los recursos del centro
            //Cambiar el active
            document.getElementById("Instalaciones").setAttribute('class', 'nav-link');
            document.getElementById("Recursos").setAttribute('class', 'nav-link active');
            document.getElementById("OfEducativa").setAttribute('class', 'nav-link');
            document.getElementById("MenuSanciones").setAttribute('class', 'nav-link');
            /*------------------------------*/
            recursos.limpiar();
            recursosCentro();
            break;
        case 'OfEducativa'://Sección de la oferta educativa del centro
            //Cambiar el active
            document.getElementById("Instalaciones").setAttribute('class', 'nav-link');
            document.getElementById("Recursos").setAttribute('class', 'nav-link');
            document.getElementById("OfEducativa").setAttribute('class', 'nav-link active');
            document.getElementById("MenuSanciones").setAttribute('class', 'nav-link');
            /*------------------------------*/
            recursos.limpiar();
            ofertaEducativa();
            break;
        ////Botones para acceder a los distintos menús de sanciones////
        case "MenuSanciones":
            //Cambiar el active
            document.getElementById("Instalaciones").setAttribute('class', 'nav-link');
            document.getElementById("Recursos").setAttribute('class', 'nav-link');
            document.getElementById("OfEducativa").setAttribute('class', 'nav-link');
            document.getElementById("MenuSanciones").setAttribute('class', 'nav-link active');
            /*------------------------------*/
            if (usCook) {
                recursos.limpiar();
                menuInicio();
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Acceso a inicio", "No se ha detectado usuario, se dirigirá al login.");
                $('#staticBackdrop').modal('show');
                recursos.limpiar();
                login();
            }
            break;
        //Amonestaciones    
        case "menAmon": case "btnAmon"://Apartado de amonestaciones
            if (usCook) {
                recursos.limpiar();
                menuAmon();
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "RegistrarSancion"://Boton de alta de amonestaciones
            registrarAmon();
            break;
        //Expulsiones
        case "menExp": case "btnExp"://Apartado de expulsiones
            if (usCook) {
                recursos.limpiar();
                menuExp();
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "RegistrarExp"://Boton de alta de expulsiones
            registrarExp();
            break;
        //Firmas
        case "menFir": case "btnFir"://Apartado de firmas
            if (usCook) {
                if (usCook.tipo != "Jefatura") {
                    recursos.modalMensajes("malo", "Error de acceso", "No tiene permisos para acceder a esta sección.");
                    $('#staticBackdrop').modal('show');
                } else {
                    recursos.limpiar();
                    menuFirma();
                }
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "RegistrarFirma"://Boton de alta de firmas
            registrarFirma();
            break;
        //Correciones
        case "menCor": case "btnCor"://Apartado de correcciones
            if (usCook) {
                if (usCook.tipo != "Jefatura") {
                    recursos.modalMensajes("malo", "Error de acceso", "No tiene permisos para acceder a esta sección.");
                    $('#staticBackdrop').modal('show');
                } else {
                    recursos.limpiar();
                    menuCorrec();
                }
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "btnCorrecAmon"://Corrección de amonestaciones
            if (usCook) {
                if (usCook.tipo != "Jefatura") {
                    recursos.modalMensajes("malo", "Error de acceso", "No tiene permisos para acceder a esta sección.");
                    $('#staticBackdrop').modal('show');
                } else {
                    recursos.limpiar();
                    menuCorrecAmon();
                }
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "RegistrarCastigo"://Boton de alta de sanciones
            ponerSancion();
            break;
        case "btnCorrecDir"://Corrección de expulsiones
            if (usCook) {
                if (usCook.tipo != "Jefatura") {
                    recursos.modalMensajes("malo", "Error de acceso", "No tiene permisos para acceder a esta sección.");
                    $('#staticBackdrop').modal('show');
                } else {
                    recursos.limpiar();
                    menuCorrecDir();
                }
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
        case "RegistrarCastigoDir"://Boton de expulsiones
            registrarSancionDir();
            break;
        //Listados
        case "menList": case "btnList"://Apartado de listados
            if (usCook) {
                if (usCook.tipo != "Jefatura") {
                    recursos.modalMensajes("malo", "Error de acceso", "No tiene permisos para acceder a esta sección.");
                    $('#staticBackdrop').modal('show');
                } else {
                    recursos.limpiar();
                    menuListado();
                }
            } else if (!usCook) {
                recursos.modalMensajes("malo", "Error de acceso", "No hay ninguna sesión activa.");
                $('#staticBackdrop').modal('show');
            }
            break;
    }
}, false);
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Utilidades---------------------------------------------*/
/*-------------------Apartados----------------------------------------------*/
/*-------------------Tocan la BD--------------------------------------------*/
