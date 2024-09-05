//Limpia el contenedor
export function limpiar() {
    let contenido = document.getElementById("contenedor");
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}
export function limpiarCampo(idElemento) {
    let contenido = document.getElementById(idElemento);
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}
//Carga la pagina inicial
export function cargaInicio() {
    let divInicio = document.createElement("div");
    divInicio.setAttribute("id", "inicio");
    divInicio.setAttribute("class", "container");
    divInicio.innerHTML = `
    <section class="cont p-2 border border-primary rounded" id="contenedorInicio">
        <h1>Inicio</h1>
        <div>
            <p>Este es el inicio</p>
        </div>
    </section>
        `;
    document.getElementById("contenedor").appendChild(divInicio);
}
//Crea cookie
export function bake_cookie(name, value) {
    var cookie = [name, '=', JSON.stringify(value), '; path=/;'].join('');
    document.cookie = cookie;
}
//Comprueba cookie
export function read_cookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}
//Borra cookie
export function delete_cookie(name) {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;'].join('');
}
export function actualizaUsuario() {
    let usuario = read_cookie("Usuario");
    if (usuario != null) {
        document.getElementById("nombreUs").innerHTML = usuario.nombre;
    } else {
        document.getElementById("nombreUs").innerHTML = "No hay usuario";
    }
}
/*Para que un boton active el modal/////////////////
boton.setAttribute("data-bs-toggle", "modal");
boton.setAttribute("data-bs-target", "#staticBackdrop");
*/
/*Para activar el modal desde el js/////////////////
recursos.modalMensajes("malo", "Error de inicio de sesión", "El usuario no existe");
$('#staticBackdrop').modal('show');
*/
export function modalMensajes(tipo, cabecera, mensaje) {
    //mensaje = "algo";
    //cabecera = "algo";
    //tipo = "malo";
    if (tipo == "bueno") {
        //Cabecera
        document.getElementById('modal-header').className += ' bg-primary';
        document.getElementById('staticBackdropLabel').innerHTML = '<p class="text-dark fw-bolder">' + cabecera + '</p>';
        //Cuerpo
        document.getElementById('mensaje').innerHTML = '<p class="text-dark">' + mensaje;
        //document.getElementById("btnModalContinuar").setAttribute("onclick", "location.reload();");
        //Footer
        document.getElementById('modal-footer').className += ' bg-primary';
        document.getElementById("btnModalContinuar").setAttribute("onclick", "location.reload();");
    } else if (tipo == "malo") {
        //Cabecera
        document.getElementById('modal-header').className += ' text-bg-danger';
        document.getElementById('staticBackdropLabel').innerHTML = '<p class="text-dark fw-bolder">' + cabecera + '</p>';
        //Cuerpo
        document.getElementById('mensaje').innerHTML = '<p class="text-dark">' + mensaje;
        //document.getElementById("btnModalContinuar").setAttribute("onclick", "location.reload();");
        //Footer
        document.getElementById('modal-footer').className += ' text-bg-danger';
    }
}
//function to send a mail with fetch
export function enviaMail(email, Asunto, Mensaje) {
    var correo = {
        destinatario: email,
        asunto: Asunto,
        mensaje: Mensaje,
    };
    //console.log(correo);
    var objetoEnvio = JSON.stringify(correo);
    //console.log(objetoEnvio);
    fetch('PHP/enviaMail.php', {
        method: 'POST',
        body: objetoEnvio,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (datos) {
            //console.log(datos);
            if (datos === 1) {
                modalMensajes("bueno", "Confirmación de envío.", "El correo se ha enviado.");
                $('#staticBackdrop').modal('show');
            } else {
                modalMensajes("malo", "Error al enviar el correo.", "Ha habido un error al enviar el correo.");
                $('#staticBackdrop').modal('show');
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
//Calcula la edad del alumno
export function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}
//Muestra la barra de progreso
export function progressBar() {
    //Limpia el div primero
    //document.getElementById("mensaje").innerHTML = "";
    //DOM de la barra de progreso
    var barra = document.createElement("div");
    barra.setAttribute("id", "myBar");
    var div1 = document.createElement("div");
    div1.setAttribute("id", "myProgress");
    barra.appendChild(div1);
    document.getElementById("mensaje").appendChild(barra);

    //Funcion para que se mueva la barra

}
//mueve la barra de progreso
export function move() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
//Disables the given element
export function disableElement(elemento) {
    document.getElementById(elemento).disabled = true;
}
//Enables the given element
export function enableElement(elemento) {
    document.getElementById(elemento).disabled = false;
}
//Enables or disables the given element
export function enableOrDisableElement(elemento, accion) {
    if (accion == "enable") {
        document.getElementById(elemento).disabled = false;
    } else if (accion == "disable") {
        document.getElementById(elemento).disabled = true;
    }
}
//Gets if the element is enabled or disabled
export function getEnabledOrDisabled(elemento) {
    if (document.getElementById(elemento).disabled == true) {
        return "disabled";
    } else if (document.getElementById(elemento).disabled == false) {
        return "enabled";
    }
}