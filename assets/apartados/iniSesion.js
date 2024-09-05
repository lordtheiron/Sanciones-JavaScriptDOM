/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';
import * as menu from './menuInicio.js';
////////////////////VARIABLES////////////////////////////////////
//let menu = document.getElementById("navbar");
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el formulario de inicio de sesión
export function login() {
    let divLogin = document.createElement("div");
    divLogin.setAttribute("id", "login");
    divLogin.setAttribute("class", "container");
    divLogin.innerHTML = `
    <section class="card border border-primary border-4 rounded-4 p-3 bg-opacity-75" id="contenedorLogin">
    <img src="IMG/headImg.png" id="imgLogin" alt="" width="150" height="132" style="margin-left:30%;" class="d-inline-block align-text-top">
        <h1 class="fw-bold">Inicio de sesión</h1>
        <div>
            <div class="form-group">
                <label for="user" class="h4">Usuario</label>
                <input type="text" class="form-control logForm" id="user" placeholder="Usuario">
            </div>
            <div class="form-group">
                <label for="pass" class="h4">Clave</label>
                <input type="password" class="form-control logForm" id="pass" placeholder="Clave">
            </div>
            <button class="btn btn-primary" id="InicioSesion">Entrar</button>
        </div>
    </section>
        `;
    document.getElementById("contenedor").appendChild(divLogin);
}
/*-------------------Tocan la BD---------------------------------------------*/
//Comprueba si el usuario y la clave son correctos
export function verificaLogin() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    var objeto = {
        'User': user,
        'Pass': pass
    };
    var objetoEnvio = JSON.stringify(objeto);
    //console.log(objetoEnvio);

    fetch('PHP/loginPOST.php', {
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
            if (datos == "no existe") {
                //alert("Datos incorrectos");
                recursos.modalMensajes("malo", "Error de inicio de sesión", "El usuario no existe o algún dato es incorrecto");
                $('#staticBackdrop').modal('show');
                recursos.limpiar();
                login();
            } else {
                recursos.bake_cookie("Usuario", datos);
                let cook = recursos.read_cookie("Usuario");
                //console.log(cook);
                //alert("Ha entrado");
                recursos.actualizaUsuario();
                recursos.limpiar();
                menu.menuInicio();
                //location.reload();
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}