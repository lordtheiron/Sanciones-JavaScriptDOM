/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';
////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
var selectAlumno;
var tablaAmon;
var tablaExp;
var lisAlumnos = [];
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el formulario de registro de firmas
export function menuFirma() {
    let divExp = document.createElement("div");
    divExp.setAttribute("id", "menuFirma");
    divExp.setAttribute("class", "card border border-primary border-4 rounded-4 p-3");
    let divFirmas = `
    <h3>Control de firmas</h3>
    <p class="blue-text">Seleccione el alumno y la causa sin firmar</p>
    <form class="row g-3" onsubmit="event.preventDefault(this.value)">
        <div class="col-12">
            <label for="selectAlumno" class="form-label">Alumnos sin firma</label>
            <select id="selectAlumno" class="form-select" aria-label="Default select example">
                <option value="0" selected>Nombre del alumno</option>
            </select>
        </div>
        <div class="col-md-6" style="overflow-y:auto;">
            <table class="table" id="tablaAmon">
                <thead>
                    <tr>
                        <th scope="col">Amonestaciones no firmadas</th>
                        <th scope="col">Firmado</th>
                    </tr>
                </thead>
                <tbody id="bodTablaAmon">
                <tr>
                    <td>Mark</td>
                    <td>
                        <input type="checkbox" class="form-check-input" id="0" disabled>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-6" style="overflow-y:auto;">
            <table class="table" id="tablaExp">
                <thead>
                    <tr>
                        <th scope="col">Expulsiones no firmadas</th>
                        <th scope="col">Firmado</th>
                    </tr>
                </thead>
                <tbody id="bodTablaExp">
                    <tr>
                        <td>Mark</td>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="0" disabled>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12 mx-auto text-center">
            <button type="submit" class="btn btn-primary" id="RegistrarFirma">Registrar Firmas</button>
        </div>
    </form>
            `;
    divExp.innerHTML = divFirmas;
    document.getElementById("contenedor").appendChild(divExp);

    //Carga los select en variables para los eventos
    selectAlumno = document.getElementById("selectAlumno");
    tablaAmon = document.getElementById("tablaAmon");
    tablaExp = document.getElementById("tablaExp");

    //Carga los eventos de los select
    selectAlumno.addEventListener('change', selecAmon);
    selectAlumno.addEventListener('change', selecExp);

    //Carga los select iniciales
    selecAlumno();
}
/*-------------------Tocan la BD---------------------------------------------*/
//Carga los alumnos en el select
function selecAlumno() {
    selectAlumno = document.getElementById("selectAlumno");

    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaAlumnosAmon.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            lisAlumnos = data;
            if (data == "ha ocurrido un error") {
                let option = document.createElement("option");
                option.value = 0;
                option.text = "No hay alumnos que necesiten firma.";
                selectAlumno.appendChild(option);
            } else {
                for (let i = 0; i < data.length; i++) {
                    let option = document.createElement("option");
                    option.value = data[i].id;
                    option.text = data[i].nombre;
                    selectAlumno.appendChild(option);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Carga las amonestaciones en el select
function selecAmon() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaAmon = document.getElementById("bodTablaAmon");
    //console.log(alumno);
    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaAmonAlumnos.php', {
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
            recursos.limpiarCampo("bodTablaAmon");
            if (datos == "no existe") {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.innerHTML = "No tiene amonestaciones";
                td1.setAttribute("id", "0");
                tr.appendChild(td1);
                tablaAmon.appendChild(tr);
            } else {
                for (let i = 0; i < datos.length; i++) {
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.className = "form-check-input";
                    input.id = datos[i].id;
                    td1.innerHTML = datos[i].causa;
                    td1.id = datos[i].id;
                    td2.appendChild(input);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tablaAmon.appendChild(tr);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function selecExp() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaExp = document.getElementById("bodTablaExp");
    //console.log(alumno);

    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaExpAlumnos.php', {
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
            recursos.limpiarCampo("bodTablaExp");
            if (datos == "no existe") {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.innerHTML = "No tiene expulsiones";
                td1.setAttribute("id", "0");
                tr.appendChild(td1);
                tablaExp.appendChild(tr);
            } else {
                for (let i = 0; i < datos.length; i++) {
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.className = "form-check-input";
                    input.id = datos[i].id;
                    td1.innerHTML = datos[i].motivo;
                    td1.id = datos[i].id;
                    td2.appendChild(input);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tablaExp.appendChild(tr);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
//Registra la sanción en la BD
export function registrarFirma() {
    let Alumno = document.getElementById("selectAlumno").value;
    if (Alumno == 0) {
        recursos.modalMensajes("malo", "Error de registro de firma", "debe indicar el alumno.");
        $('#staticBackdrop').modal('show');
        return;
    }
    let selAlumno = lisAlumnos.find(element => element.id == document.getElementById("selectAlumno").value);
    let tablaAmon = document.getElementById("bodTablaAmon");
    let tablaExp = document.getElementById("bodTablaExp");
    let arrayAmonFirmado = [];
    let arrayExpFirmado = [];
    //Comprueba la edad para saber a quien va el correo, padres o al alumno
    let Correo = "";
    var edad = recursos.calcularEdad(selAlumno.fechaNac);
    if (edad >= 18) {//Si es mayor de edad
        Correo = selAlumno.correoMen;
    } else {//Si es menor de edad
        Correo = selAlumno.correoAd;
    }

    if (tablaAmon.rows[0].childNodes[0].id != 0) {
        for (var i = 0, row; row = tablaAmon.rows[i]; i++) {
            if (row.cells[1].childNodes[0].checked == true) {
                arrayAmonFirmado.push(row.cells[1].childNodes[0].id);
            }
        }
    }
    if (tablaExp.rows[0].childNodes[0].id != 0) {
        for (var i = 0, row; row = tablaExp.rows[i]; i++) {
            //console.log(row.cells[1].childNodes[0].id + "algo" + row.cells[1].childNodes[0].checked + "algo");
            if (row.cells[1].childNodes[0].checked == true) {
                arrayExpFirmado.push(row.cells[1].childNodes[0].id);
            }
        }
    }
    //Fecha en la que se registra la firma
    var fechaFirma = new Date();
    //console.log(arrayExpFirmado);

    let objFirma = {
        amon: arrayAmonFirmado,
        expul: arrayExpFirmado,
        fecha: fechaFirma
    }
    //console.log(objFirma);
    var objetoEnvio = JSON.stringify(objFirma);
    //console.log(objetoEnvio);

    fetch('PHP/registraFirma.php', {
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
            if (datos == "No hay firmas que registrar.") {
                recursos.modalMensajes("malo", "Error de registro de firma de amonestación", datos);
                $('#staticBackdrop').modal('show');
            } else {
                recursos.modalMensajes("bueno", "Registro de firma de amonestación", datos);
                $('#staticBackdrop').modal('show');
                //El correo
                let asunto = "";
                let mensaje = "";
                recursos.progressBar();
                recursos.move();
                if (edad >= 18) {//Si es mayor de edad
                    asunto = "Usted ha firmado una amonestación";
                    mensaje = "El alumno " + selAlumno.nombre + "</br>" +
                        " ha entregado la firma por una amonestación.";
                    recursos.enviaMail(Correo, asunto, mensaje);
                } else {//Si es menor de edad
                    asunto = "Su hijo/a ha entregado la firma por una amonestación";
                    mensaje = "El alumno " + selAlumno.nombre + "</br>" +
                        " ha entregado la firma por una amonestación.";
                    recursos.enviaMail(Correo, asunto, mensaje);
                }
            }

        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
            recursos.modalMensajes("malo", "Error de registro de firmas", "Ha ocurrido un error<br>" + err);
            $('#staticBackdrop').modal('show');
        });
}
