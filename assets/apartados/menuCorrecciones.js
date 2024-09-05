/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';
////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el menu de seleccion de correcion
export function menuCorrec() {
    let divAmon = document.createElement("div");
    divAmon.setAttribute("id", "menuCorrec");
    divAmon.setAttribute("class", "d-flex justify-content-center align-items-center flex-wrap");
    divAmon.innerHTML = `
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="card mx-5 my-5 imgMenu rounded-4 animate__animated animate__backInLeft" id="divAmon" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Sancionar amonestaciones</h5>
            <p class="card-text h6">Registrar una sanción a un alumno amonestado.</p>
            <a href="#" class="btn btn-primary" id="btnCorrecAmon">Acceder</a>
        </div>
    </div>
    <div class="card mx-5 my-5 imgMenu rounded-4 animate__animated animate__backInRight" id="divExp" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Sancionar de manera directa</h5>
            <p class="card-text h6">Registrar sanciones a los alumnos expulsados de clase.</p>
            <a href="#" class="btn btn-primary" id="btnCorrecDir">Acceder</a>
        </div>
    </div>
        `;
    document.getElementById("contenedor").appendChild(divAmon);
}
/*-------------------Tocan la BD---------------------------------------------*/
