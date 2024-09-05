/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';

////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
var fecha;
var selectGrupo;
var selectGrupos;
var selectAlumno;
var tablaAmon;
var optCausa;
var optConsec;
var arrAlum = [];
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/

export function menuCorrecAmon() {
    let divAmon = document.createElement("div");
    divAmon.setAttribute("id", "menuCorrAmon");
    divAmon.setAttribute("class", "card border border-primary border-4 rounded-4 p-3");
    divAmon.innerHTML = `
    <h3>Control de sanciones</h3>
    <p class="blue-text">Seleccione la amonestación/es a sancionar</p>
    <form class="row g-3" onsubmit="event.preventDefault(this.value)">
        <div class="col-md-6">
            <label for="selectAlumno" class="form-label">Grupos con amonestaciones</label>
            <select id="SelectGrupo" class="form-select" aria-label="Default select example" required>
                <option value="0" selected>Grupo</option>
            </select>
            </div>
        <div class="col-md-6">
            <label for="selectAlumno" class="form-label">Alumnos con amonestaciones</label>
            <select id="selectAlumno" class="form-select" aria-label="Default select example">
                <option value="0" selected>Nombre del alumno</option>
            </select>
        </div>
        <div class="col-md-12" style="overflow-y:scroll;max-height: 32%;">
            <table class="table" id="tablaAmon">
                <thead>
                    <tr>
                        <th scope="col">Amonestaciones no sancionadas</th>
                        <th scope="col">Seleccionar</th>
                    </tr>
                </thead>
                <tbody id="bodTablaAmon">
                    <tr>
                        <td>Mark</td>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="0" disabled>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-12">
            <label for="consecuencia" class="form-label">Indicar consecuencia</label>
            <input class="form-control" list="consecOptions" id="consecuencia" placeholder="Busque la consecuencia o indiquela aqui...">
            <datalist id="consecOptions">
            </datalist>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-3">
            <label for="inputFechaSanc" class="form-label">Fecha de la sanción</label>
            <input type="date" class="form-control" id="inputFechaSanc">
        </div>
        <div class="col-md-3">
            <label for="inputFechaCons" class="form-label">Fecha de inicio del castigo</label>
            <input type="date" class="form-control" id="inputFechaCons">
        </div>
        <div class="col-md-3">
            <label for="inputFechaFin" class="form-label">Fecha de fin del castigo</label>
            <input type="date" class="form-control" id="inputFechaFin">
        </div>
        <div class="col-12 mx-auto text-center">
            <button type="submit" class="btn btn-primary" id="RegistrarCastigo">Registrar Castigo</button>
        </div>
        </div>
    </form>
        `;

    document.getElementById("contenedor").appendChild(divAmon);
    //Control de las fechas
    let fechaSanc = document.getElementById('inputFechaSanc');
    let fechaInicio = document.getElementById('inputFechaCons');
    let fechaFin = document.getElementById('inputFechaFin');
    //Controla que la fecha que se muestra no sea la misma en los tres campos
    fecha = new Date();
    fechaSanc.valueAsDate = fecha;
    fechaSanc.setAttribute("min", fecha);
    fecha.setDate(fecha.getDate() + 1);
    fechaInicio.valueAsDate = fecha;
    fechaInicio.setAttribute("min", fecha);
    fecha.setDate(fecha.getDate() + 2);
    fechaFin.valueAsDate = fecha;
    fechaFin.setAttribute("min", fecha);

    //Carga los select en variables para los eventos
    selectAlumno = document.getElementById("selectAlumno");
    selectGrupos = document.getElementById("SelectGrupo");
    tablaAmon = document.getElementById("tablaAmon");


    //Carga los eventos de los select
    selectGrupos.addEventListener('change', selecAlumno);
    selectAlumno.addEventListener('change', selecAmon);

    //Carga los select iniciales
    selecGrupo();
    //selecCausa();
    selecConsecuencia();
}

/*-------------------Tocan la BD---------------------------------------------*/
//Carga los grupos en el select
function selecGrupo() {
    selectGrupos = document.getElementById("SelectGrupo");

    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaGrupos.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].id;
                option.text = data[i].grupo;
                selectGrupos.appendChild(option);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Carga los alumnos en el select
function selecAlumno() {
    selectGrupo = document.getElementById("SelectGrupo").value;
    selectAlumno = document.getElementById("selectAlumno");

    var objetoEnvio = JSON.stringify(selectGrupo);

    const iniciar = {
        method: 'POST',
        body: objetoEnvio,
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaAlumnosAmonGrupo.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            recursos.limpiarCampo("selectAlumno");
            if (data == "ha ocurrido un error") {
                let option = document.createElement("option");
                option.value = 0;
                option.text = "No hay alumnos en este grupo";
                selectAlumno.appendChild(option);
            } else {
                arrAlum = data;
                let option = document.createElement("option");
                option.value = 0;
                option.text = "Nombre del alumno";
                selectAlumno.appendChild(option);
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
//Carga las amonestaciones en la tabla
function selecAmon() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaAmon = document.getElementById("bodTablaAmon");
    //console.log(alumno);
    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaAmonAlumno.php', {
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
//carga las consecuencias en el select
function selecConsecuencia() {
    optConsec = document.getElementById("consecOptions");
    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaConsecSanc.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].consecuencia;
                option.text = data[i].consecuencia;
                optConsec.appendChild(option);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Inserta la sancion en la BD
export function ponerSancion() {
    let alumno = document.getElementById("selectAlumno").value;
    let selAlum = arrAlum.find(element => element.id == document.getElementById("selectAlumno").value)
    let grupo = document.getElementById("SelectGrupo").value;
    let tablaAmon = document.getElementById("bodTablaAmon");
    let arrayAmon = [];
    //Captura los id de las amonestaciones
    if (tablaAmon.rows[0].childNodes[0].id != 0) {
        for (var i = 0, row; row = tablaAmon.rows[i]; i++) {
            //console.log(row.cells[1].childNodes[0]);
            if (row.cells[1].childNodes[0].checked == true) {
                arrayAmon.push(row.cells[1].childNodes[0].id);
            }
        }
    }
    let causaAmon;
    //Comprueba si la causa es "acumulacion de sanciones" y si no lo es, coge el valor del datalist
    if (arrayAmon.length == 1) {
        causaAmon = document.getElementById(arrayAmon[0]).innerHTML;
    } else if (arrayAmon.length > 1) {
        causaAmon = "Acumulación de amonestaciones";
    }
    let consecuencia = document.getElementById("consecuencia").value;
    let fechaSanc = document.getElementById("inputFechaSanc").value;
    let fechaCons = document.getElementById("inputFechaCons").value;
    let fechaFin = document.getElementById("inputFechaFin").value;

    //console.log(arrayAmon);
    if (arrayAmon.length == 0 || alumno == 0 || grupo == 0 || consecuencia == "") {
        recursos.modalMensajes("malo", "Error de registro de sanción", "Faltan datos por introducir.");
        $('#staticBackdrop').modal('show');
        return;
    }

    //Comprueba la edad para saber a quien va el correo, padres o al alumno
    let Correo = "";
    var edad = recursos.calcularEdad(selAlum.fechaNac);
    if (edad >= 18) {//Si es mayor de edad
        Correo = selAlum.correoMen;
    } else {//Si es menor de edad
        Correo = selAlum.correoAd;
    }

    let objSanc = {
        Alumno: alumno,
        Profesor: usuario.id,
        Amonestaciones: arrayAmon,
        Causa: causaAmon,
        Consecuencia: consecuencia,
        FechaSanc: fechaSanc,
        FechaCons: fechaCons,
        FechaFin: fechaFin
    }
    //console.log(objSanc);
    var objetoEnvio = JSON.stringify(objSanc);
    //console.log(objetoEnvio);

    fetch('PHP/registraSancion.php', {
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
            let asunto = "";
            let mensaje = "";

            if (edad >= 18) {//Si es mayor de edad
                recursos.modalMensajes("bueno", "Registro de sanción",
                    datos + ",</br>se enviará un correo al alumno sancionado.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Usted ha recibido una sanción";
                mensaje = "El alumno " + selAlum.nombre + "</br>" +
                    "ha recibido una sanción por " + causaAmon + "</br>" +
                    "Registrada por " + usuario.nombre + " el día " + fechaSanc + ".</br>" +
                    "- Su sanción es: " + consecuencia + "</br>" +
                    "- La sanción se le aplicará desde el día " + fechaCons + ".</br>" +
                    "- La sanción se le aplicará hasta el día " + fechaFin + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            } else {//Si es menor de edad
                recursos.modalMensajes("bueno", "Registro de sanción",
                    datos + ",</br>se enviará un correo al padre/madre/tutor del alumno.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Su hijo/a ha recibido una sanción";
                mensaje = "Ha recibido una sanción por " + causaAmon + "</br>" +
                    "Registrada por " + usuario.nombre + " el día " + fechaSanc + ".</br>" +
                    "- Su sanción es: " + consecuencia + "</br>" +
                    "- La sanción se le aplicará desde el día " + fechaCons + ".</br>" +
                    "- La sanción se le aplicará hasta el día " + fechaFin + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
            recursos.modalMensajes("malo", "Error de registro de la sanción", "Ha ocurrido un error<br>" + err);
            $('#staticBackdrop').modal('show');
        });
}