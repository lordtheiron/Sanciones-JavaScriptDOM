/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';
////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
var selectGrupos;
var selectAlumnos;
var selectMaterias;
var selectMotivo;
var selectProfe;
var alumnos = [];
var profesores = [];
var motivos = [];
var materias = [];
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el formulario de registro de sanciones
export function menuExp() {
    let divExp = document.createElement("div");
    divExp.setAttribute("id", "menuExp");
    divExp.setAttribute("class", "card border border-primary border-4 rounded-4 p-3");
    let divUsuario;

    //Cambia el HTML que se genera segun el tipo de usuario guardado en la Cookie
    if (usuario.tipo == "Profesor") {//Si es profesor
        divUsuario = `
        <h3>Registrar una expulsión de clase</h3>
        <p class="blue-text">Seleccione el alumno y la causa.</p>
        <form class="row g-3" onsubmit="event.preventDefault(this.value)">
            <div class="col-md-6">
                <select id="SelectGrupo" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Grupo</option>
                </select>
            </div>
            <div class="col-12">
            <select id="selectAlumno" class="form-select" aria-label="Default select example">
                <option value="0" selected>Nombre del alumno</option>
            </select>
            </div>
            <div class="col-md-6">
                </br>
                <select id="selectAsignatura" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Asignatura</option>
                </select>
            </div>
            <div class="col-12">
                <select id="selectMotivo" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Motivo</option>
                </select>
            </div>
            <div class="col-12">
                <label for="inputMotivo" class="form-label">Nuevo motivo de expulsión</label>
                <input type="text" class="form-control" id="inputMotivo"
                    placeholder="Introducir un motivo de expulsión que no aparece en la lista">
            </div>
            <div class="col-md-6">
                <label for="inputProfesor" class="form-label">Profesor</label>
                <input type="text" class="form-control" id="inputProfesor" readonly>
            </div>
            <div class="col-md-4">
                <label for="inputFecha" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="inputFecha">
            </div>
            <div class="col-12 mx-auto text-center">
                <button type="submit" class="btn btn-primary" id="RegistrarExp">Registrar Expulsión</button>
            </div>
        </form>
            `;
    } else if (usuario.tipo == "Jefatura") {//Si es jefatura
        divUsuario = `
        <h3>Registrar una expulsión de clase</h3>
        <p class="blue-text">Seleccione el alumno y la causa.</p>
        <form class="row g-3" onsubmit="event.preventDefault(this.value)">
            <div class="col-md-6">
                <select id="SelectGrupo" class="form-select" aria-label="Default select example">
                    <option value="0" selected="">Grupo</option>
                </select>
            </div>
            <div class="col-12">
                <select id="selectAlumno" class="form-select" aria-label="Default select example">
                    <option value="0" selected="">Nombre del alumno</option>
                </select>
            </div>
            <div class="col-md-6">
                <br>
                <select id="selectAsignatura" class="form-select" aria-label="Default select example">
                    <option value="0" selected="">Asignatura</option>
                </select>
            </div>
            <div class="col-12">
                <select id="selectMotivo" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Motivo</option>
                </select>
            </div>
            <div class="col-12">
                <label for="inputMotivo" class="form-label">Nuevo motivo de expulsión</label>
                <input type="text" class="form-control" id="inputMotivo"
                    placeholder="Introducir un motivo de expulsión que no aparece en la lista">
            </div>
            <div class="col-md-6">
                <label for="selectProfesor" class="form-label">Profesor</label>
                <select id="selectProfesor" class="form-select" aria-label="Default select example">
                    <option value="0" selected="">Profesor</option>
                </select>
            </div>
            <div class="col-md-4">
                <label for="inputFecha" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="inputFecha">
            </div>
            <div class="col-12 mx-auto text-center">
                <button type="submit" class="btn btn-primary" id="RegistrarExp">Registrar Expulsión</button>
            </div>
        </form>
        `;
    }
    divExp.innerHTML = divUsuario;
    document.getElementById("contenedor").appendChild(divExp);
    document.getElementById('inputFecha').valueAsDate = new Date();

    //Carga los select en variables para los eventos
    selectGrupos = document.getElementById("SelectGrupo");
    selectAlumnos = document.getElementById("selectAlumno");
    selectMaterias = document.getElementById("selectAsignatura");
    selectMotivo = document.getElementById("selectMotivo");
    selectProfe = document.getElementById("selectProfesor");

    //Carga los eventos de los select
    selectGrupos.addEventListener('change', selecAlumno);
    selectAlumnos.addEventListener('change', selecAsignatura);
    //selectMaterias.addEventListener('change', selecMotivo);
    document.getElementById("selectMotivo").addEventListener("change", function () {
        recursos.disableElement("inputMotivo");
        let elem = document.getElementById("selectMotivo");
        if (recursos.getEnabledOrDisabled(elem) == "disabled") {
            recursos.enableElement("selectMotivo");
            recursos.disableElement("inputMotivo");
        }
    });
    document.getElementById("inputMotivo").addEventListener("click", function () {
        recursos.disableElement("selectMotivo");
        let elem = document.getElementById("inputMotivo");
        if (recursos.getEnabledOrDisabled(elem) == "disabled") {
            recursos.enableElement("inputMotivo");
            recursos.disableElement("selectMotivo");
        }
    });

    //Carga los select iniciales
    selecGrupo();
    selecMotivo();
    if (selectProfe != null) {
        selecProfesor();
    } else {
        document.getElementById("inputProfesor").value = usuario.nombre;
    }

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
    let grupo = document.getElementById("SelectGrupo").value;
    selectAlumnos = document.getElementById("selectAlumno");
    //console.log(grupo);

    var objetoEnvio = JSON.stringify(grupo);
    //console.log(objetoEnvio);

    fetch('PHP/sacaAlumnos.php', {
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
            alumnos = datos;
            recursos.limpiarCampo("selectAlumno");
            let option = document.createElement("option");
            option.value = 0;
            option.text = "Nombre del alumno";
            selectAlumnos.appendChild(option);
            for (let i = 0; i < datos.length; i++) {
                let option = document.createElement("option");
                option.value = datos[i].id;
                option.text = datos[i].nombre;
                selectAlumnos.appendChild(option);
                //console.log(option);
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
//Carga las asignaturas en el select
function selecAsignatura() {
    let alumno = document.getElementById("selectAlumno").value;
    selectMaterias = document.getElementById("selectAsignatura");
    //console.log(alumno);

    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaMaterias.php', {
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
            materias = datos;
            recursos.limpiarCampo("selectAsignatura");
            let option = document.createElement("option");
            option.value = 0;
            option.text = "Asignatura";
            selectMaterias.appendChild(option);
            for (let i = 0; i < datos.length; i++) {
                let option = document.createElement("option");
                option.value = datos[i].id;
                option.text = datos[i].nombre;
                selectMaterias.appendChild(option);
                //console.log(option);
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
//Carga las sanciones existentes en el select
function selecMotivo() {
    selectMotivo = document.getElementById("selectMotivo");

    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaMotivosExp.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            motivos = data;
            if (data == "no existe") {
                let option = document.createElement("option");
                option.value = 0;
                option.text = "No hay motivos anteriores";
                option.setAttribute("disabled", "disabled");
                selectMotivo.appendChild(option);
            } else {
                for (let i = 0; i < data.length; i++) {
                    let option = document.createElement("option");
                    option.value = data[i].id;
                    option.text = data[i].motivo;
                    selectMotivo.appendChild(option);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Carga la lista de profesores en el select (Solo si es de 'Jefatura')
function selecProfesor() {
    selectProfe = document.getElementById("selectProfesor");

    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaProfes.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            profesores = data;
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].id;
                option.text = data[i].nombre;
                selectProfe.appendChild(option);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Registra la sanción en la BD
export function registrarExp() {
    let Alumno = document.getElementById("selectAlumno");
    let menAlumno = alumnos.find(element => element.id == document.getElementById("selectAlumno").value);
    let Materia = document.getElementById("selectAsignatura");
    let menMateria = materias.find(element => element.id == document.getElementById("selectAsignatura").value);
    let Motivo = document.getElementById("selectMotivo").value;
    let menMotivo;
    if (Motivo == "0") {//Si es nuevo motivo
        Motivo = document.getElementById("inputMotivo").value;
        menMotivo = Motivo;
        if (Motivo == "") {
            recursos.modalMensajes("malo", "Error de registro de expulsión", "Indique un motivo del desplegable<br> o introduzca uno nuevo.");
            $('#staticBackdrop').modal('show');
            return;
        }
    } else {//Si sale del select
        let selectElement = document.querySelector('#selectMotivo');
        Motivo = selectElement.options[selectElement.selectedIndex].text;
        menMotivo = Motivo;
    }
    let Profesor = "";
    let menProfesor;
    if (usuario.tipo == "Profesor") {//Si es profesor
        Profesor = usuario.id;
        menProfesor = usuario;
    } else if (usuario.tipo == "Jefatura") {//Si es jefatura
        Profesor = document.getElementById("selectProfesor").value;
        menProfesor = profesores.find(element => element.id == document.getElementById("selectProfesor").value);
    }
    let Fecha = document.getElementById("inputFecha");
    //Comprueba la edad para saber a quien va el correo, padres o al alumno
    let Correo = "";
    var edad = recursos.calcularEdad(menAlumno.fechaNac);
    if (edad >= 18) {//Si es mayor de edad
        Correo = menAlumno.correoMen;
    } else {//Si es menor de edad
        Correo = menAlumno.correoAd;
    }
    if (Alumno.value == "0" || Materia.value == "0" || Motivo == "0" || Fecha.value == "" || Profesor == "" || Profesor == 0) {
        recursos.modalMensajes("malo", "Error de registro de expulsión", "Faltan datos por introducir.");
        $('#staticBackdrop').modal('show');
        return;
    }
    let objExp = {
        alumno: Alumno.value,
        motivo: Motivo,
        materia: Materia.value,
        profesor: Profesor,
        fecha: Fecha.value
    }
    //console.log(objExp);

    var objetoEnvio = JSON.stringify(objExp);
    //console.log(objetoEnvio);

    fetch('PHP/registraExpulsion.php', {
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
            //El correo
            let asunto = "";
            if (edad >= 18) {//Si es mayor de edad
                recursos.modalMensajes("bueno", "Registro de expulsión",
                    "La expulsión se ha registrado correctamente,</br>se enviará un correo al alumno expulsado.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Usted ha sido expulsado/a de clase.";
            } else {//Si es menor de edad
                recursos.modalMensajes("bueno", "Registro de expulsión",
                    "La expulsión se ha registrado correctamente,</br>se enviará un correo al padre/madre/tutor del alumno.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Su hijo/a ha sido expulsado de clase.";
            }
            let mensaje = "";
            if (usuario.tipo == "Profesor") {
                mensaje = "El alumno " + menAlumno.nombre + "</br>" +
                    " ha sido expulsado de clase por " + Motivo + "</br>" +
                    " en la materia de " + menMateria.nombre + ".</br>" +
                    "Registrada por " + usuario.nombre + " el día " + Fecha.value + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            } else if (usuario.tipo == "Jefatura") {
                mensaje = "El alumno " + menAlumno.nombre + "</br>" +
                    " ha sido expulsado de clase por " + Motivo + "</br>" +
                    " en la materia de " + menMateria.nombre + ".</br>" +
                    "Registrada por " + menProfesor.nombre + " el día " + Fecha.value + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
            recursos.modalMensajes("malo", "Error de registro de amonestación", "Ha ocurrido un error<br>" + err);
            $('#staticBackdrop').modal('show');
        });
}
