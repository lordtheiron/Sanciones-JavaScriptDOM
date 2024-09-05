/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';
////////////////////VARIABLES////////////////////////////////////
//let menu = document.getElementById("navbar");
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el menu de inicio
export function menuInicio() {
    let divInicio = document.createElement("div");
    divInicio.setAttribute("id", "menuInicial");
    divInicio.setAttribute("class", "d-flex justify-content-center align-items-center flex-wrap");
    divInicio.innerHTML = `
    <div class="card mx-5 my-5 imgMenu rounded-4 animate__animated animate__backInLeft" id="divAmon" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Poner una amonestación</h5>
            <p class="card-text h6">Registrar una amonestación a un alumno.</p>
            <a href="#" class="btn btn-primary" id="btnAmon">Acceder</a>
        </div>
    </div>
    <div class="card mx-5 my-5 imgMenu rounded-4 animate__animated animate__backInDown" id="divExp" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Expulsión de clase</h5>
            <p class="card-text h6">Registrar si un alumno ha sido expulsado de clase.</p>
            <a href="#" class="btn btn-primary" id="btnExp">Acceder</a>
        </div>
    </div>
    <div class="card mx-5 my-5 imgMenu rounded-4 direJef animate__animated animate__backInRight" id="divFir" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Control de firmas</h5>
            <p class="card-text h6">Gestionar las sanciones notificadas pendientes de firma.</p>
            <a href="#" class="btn btn-primary direJef" id="btnFir">Acceder</a>
        </div>
    </div>
    <div class="card mx-5 my-5 imgMenu rounded-4 direJef animate__animated animate__backInUp" id="divCorrec" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Aplicar medidas correctoras</h5>
            <p class="card-text h6">Aplicar de medidas correctoras a alumnos sancionados.</p>
            <a href="#" class="btn btn-primary direJef" id="btnCor">Acceder</a>
        </div>
    </div>
    <div class="card mx-5 my-5 imgMenu rounded-4 direJef animate__animated animate__backInUp" id="divList" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-dark h3 fw-bolder text-center">Listados</h5>
            <p class="card-text h6">Obtener un listado de alumnos sancionados.</p>
            <a href="#" class="btn btn-primary direJef" id="btnList">Acceder</a>
        </div>
    </div>
        `;
    document.getElementById("contenedor").appendChild(divInicio);
}
//Carga el formulario de registro de sanciones
/*-------------------Tocan la BD---------------------------------------------*/
//Registra la sanción en la BD