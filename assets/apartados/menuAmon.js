/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';

////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
var selectGrupos;
var selectAlumnos;
var selectMaterias;
var selectCausa;
var selectProfe;
var alumnos = [];
var profesores = [];
var causas = [];
var asignaturas = [];
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el formulario de registro de amonestaciones
export function menuAmon() {
    let divAmon = document.createElement("div");
    divAmon.setAttribute("id", "menuAmon");
    divAmon.setAttribute("class", "card border border-primary border-4 rounded-4 p-3");

    let divUsuario;
    //Cambia el HTML que se genera segun el tipo de usuario guardado en la Cookie
    if (usuario.tipo == "Profesor") {//Si es profesor
        divUsuario = `
            <h3>Poner una amonestación</h3>
            <p class="blue-text">Seleccione el alumno y su amonestación.</p>
            <form class="row g-3" onsubmit="event.preventDefault(this.value)">
                <div class="col-md-6">
                    <select id="SelectGrupo" class="form-select" aria-label="Default select example" required>
                        <option value="0" selected>Grupo</option>
                    </select>
                </div>
                <div class="col-12">
                <select id="selectAlumno" class="form-select" aria-label="Default select example" required>
                    <option value="0" selected>Nombre del alumno</option>
                </select>
                </div>
                <div class="col-md-6">
                    </br>
                    <select id="selectAsignatura" class="form-select" aria-label="Default select example" required>
                        <option value="0" selected>Asignatura</option>
                    </select>
                </div>
                <div class="col-12">
                    <select id="selectCausa" class="form-select" aria-label="Default select example">
                        <option value="0" selected>Causa</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputCausa" class="form-label">Nueva Causa</label>
                    <input type="text" class="form-control" id="inputCausa"
                        placeholder="Introducir causa que no aparece en la lista">
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
                    <button type="submit" class="btn btn-primary" id="RegistrarSancion">Registrar Amonestación</button>
                </div>
            </form>
                `;
    } else if (usuario.tipo == "Jefatura") {//Si es jefatura
        divUsuario = `
            <h3>Poner una amonestación</h3>
            <p class="blue-text">Seleccione el alumno y su amonestación.</p>
            <form class="row g-3" onsubmit="event.preventDefault(this.value)">
                <div class="col-md-6">
                    <select id="SelectGrupo" class="form-select" aria-label="Default select example" required>
                        <option value="0" selected>Grupo</option>
                    </select>
                </div>
                <div class="col-12">
                <select id="selectAlumno" class="form-select" aria-label="Default select example" required>
                    <option value="0" selected>Nombre del alumno</option>
                </select>
                </div>
                <div class="col-md-6">
                    </br>
                    <select id="selectAsignatura" class="form-select" aria-label="Default select example" required>
                        <option value="0" selected>Asignatura</option>
                    </select>
                </div>
                <div class="col-12">
                    <select id="selectCausa" class="form-select" aria-label="Default select example">
                        <option value="0" selected>Causa</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputCausa" class="form-label">Nueva Causa</label>
                    <input type="text" class="form-control" id="inputCausa"
                        placeholder="Introducir causa que no aparece en la lista">
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
                    <button type="submit" class="btn btn-primary" id="RegistrarSancion">Registrar Amonestación</button>
                </div>
            </form>
            `;
    }
    divAmon.innerHTML = divUsuario;
    document.getElementById("contenedor").appendChild(divAmon);
    document.getElementById('inputFecha').valueAsDate = new Date();

    //Carga los select en variables para los eventos
    selectGrupos = document.getElementById("SelectGrupo");
    selectAlumnos = document.getElementById("selectAlumno");
    selectMaterias = document.getElementById("selectAsignatura");
    selectCausa = document.getElementById("selectCausa");
    selectProfe = document.getElementById("selectProfesor");

    //Carga los eventos de los select
    selectGrupos.addEventListener('change', selecAlumno);
    selectAlumnos.addEventListener('change', selecAsignatura);
    //selectMaterias.addEventListener('change', selecCausa);
    document.getElementById("selectCausa").addEventListener("change", function () {
        recursos.disableElement("inputCausa");
        let elem = document.getElementById("selectCausa");
        if (recursos.getEnabledOrDisabled(elem) == "disabled") {
            recursos.enableElement("selectCausa");
            recursos.disableElement("inputCausa");
        }
    });
    document.getElementById("inputCausa").addEventListener("click", function () {
        recursos.disableElement("selectCausa");
        let elem = document.getElementById("inputCausa");
        if (recursos.getEnabledOrDisabled(elem) == "disabled") {
            recursos.enableElement("inputCausa");
            recursos.disableElement("selectCausa");
        }
    });
    //Carga los select iniciales
    selecGrupo();
    selecCausa();
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
            //console.log(alumnos);
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
            asignaturas = datos;
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
function selecCausa() {
    selectCausa = document.getElementById("selectCausa");

    const iniciar = {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-type': 'application/json ; charset=utf-8'
        }
    }
    fetch('PHP/sacaCausasAmon.php', iniciar)
        .then(function (response) {
            //console.log('respuesta del servidor');
            return response.json();
        })
        .then(function (data) {
            //console.log(data);
            causas = data;
            if (data == "no existe") {
                let option = document.createElement("option");
                option.value = 0;
                option.text = "No hay causas anteriores";
                option.setAttribute("disabled", "disabled");
                selectCausa.appendChild(option);
            } else {
                for (let i = 0; i < data.length; i++) {
                    let option = document.createElement("option");
                    option.value = data[i].id;
                    option.text = data[i].causa;
                    selectCausa.appendChild(option);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Registra la sanción en la BD
export function registrarAmon() {
    let Grupo = document.getElementById("SelectGrupo");
    let selAlumno = document.getElementById("selectAlumno").value;
    let Alumno = alumnos.find(element => element.id == document.getElementById("selectAlumno").value);
    let selMateria = document.getElementById("selectAsignatura").value;
    let Materia = asignaturas.find(element => element.id == document.getElementById("selectAsignatura").value);
    //Comprueba que los campos no estén vacíos
    if (Grupo.value == 0 || selAlumno.value == 0 || selMateria.value == 0) {
        recursos.modalMensajes("malo", "Error de registro de amonestación", "Faltan datos por introducir.");
        $('#staticBackdrop').modal('show');
        return;
    }

    let selCausa = document.getElementById("selectCausa").value;
    let Causa;
    //Comprueba si la causa es "otra" y si lo es, coge el valor del input
    if (selCausa == "0") {
        selCausa = document.getElementById("inputCausa").value;
        Causa = selCausa;
        if (selCausa == "") {
            recursos.modalMensajes("malo", "Error de registro de amonestación", "Indique una causa del desplegable<br> o introduzca una nueva.");
            $('#staticBackdrop').modal('show');
            return;
        }
        //console.log(Causa);    
    } else {
        let ObCausa = causas.find(element => element.id == document.getElementById("selectCausa").value);
        //console.log(ObCausa);
        Causa = ObCausa.causa;
    }
    //Guarda en "Profesor" el id del profesor que introduce la sanción
    let Profesor;
    let selProfesor;
    if (usuario.tipo == "Profesor") {
        Profesor = usuario.id;
    } else if (usuario.tipo == "Jefatura") {
        if (document.getElementById("selectProfesor").value == 0) {
            recursos.modalMensajes("malo", "Error de registro de amonestación", "Debe indicar el docente que introduce la sanción.");
            $('#staticBackdrop').modal('show');
            return;
        }
        selProfesor = profesores.find(element => element.id == document.getElementById("selectProfesor").value);
        //console.log(selProfesor);
        Profesor = selProfesor.id;
        //console.log(Profesor);
    }
    let Fecha = document.getElementById("inputFecha");
    //Comprueba la edad para saber a quien va el correo, padres o al alumno
    let Correo = "";
    var edad = recursos.calcularEdad(Alumno.fechaNac);
    if (edad >= 18) {//Si es mayor de edad
        Correo = Alumno.correoMen;
    } else {//Si es menor de edad
        Correo = Alumno.correoAd;
    }

    let objAmon = {
        grupo: Grupo.value,
        alumno: Alumno.id,
        correo: Correo,
        materia: selMateria,
        causa: selCausa,
        profesor: Profesor,
        fecha: Fecha.value
    }
    //console.log(objAmon);




    var objetoEnvio = JSON.stringify(objAmon);
    //console.log(objetoEnvio);

    fetch('PHP/registraAmonestacion.php', {
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
                recursos.modalMensajes("bueno", "Registro de amonestación",
                    "La amonestación se ha registrado correctamente,</br>se enviará un correo al alumno amonestado.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Usted ha recibido una amonestación";
            } else {//Si es menor de edad
                recursos.modalMensajes("bueno", "Registro de amonestación",
                    "La amonestación se ha registrado correctamente,</br>se enviará un correo al padre/madre/tutor del alumno.");
                $('#staticBackdrop').modal('show');
                recursos.progressBar();
                recursos.move();
                asunto = "Su hijo/a ha recibido una amonestación";
            }
            let mensaje = "";
            if (usuario.tipo == "Profesor") {
                mensaje = "El alumno " + Alumno.nombre + "</br>" +
                    " ha recibido una amonestación por " + Causa + "</br>" +
                    " en la materia de " + Materia.nombre + ".</br>" +
                    "Registrada por " + usuario.nombre + " el día " + Fecha.value + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            } else if (usuario.tipo == "Jefatura") {
                mensaje = "El alumno " + Alumno.nombre + "</br>" +
                    " ha recibido una amonestación por " + Causa + "</br>" +
                    " en la materia de " + Materia.nombre + ".</br>" +
                    "Registrada por " + selProfesor.nombre + " el día " + Fecha.value + ".</br>";
                recursos.enviaMail(Correo, asunto, mensaje);
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
            recursos.modalMensajes("malo", "Error de registro de amonestación", "Algo ha ido mal.");
            $('#staticBackdrop').modal('show');
        });
}
