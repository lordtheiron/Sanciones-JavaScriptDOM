/////////////////////////////////IMPORTS////////////////////////
/*-------------------Recursos---------------------------------------------*/
import * as recursos from './utilidades.js';

////////////////////VARIABLES////////////////////////////////////
let usuario = recursos.read_cookie("Usuario");
var docDefinition;
var selectAlumno;
var tablaAmon;
var tablaSanc;
var selectProfesor;
var selectGrupos;
//////////////////////////////////////////////////////////////////////////////////////////////
////LAS FUNCIONES/////////////////////////////////////////////////////////////////////////////
/*-------------------Cargan los apartados---------------------------------------------*/
//Carga el menu de seleccion de listados
export function menuListado() {
    let divAmon = document.createElement("div");
    divAmon.setAttribute("id", "menuListas");
    divAmon.setAttribute("class", "card border border-primary border-4 rounded-4 p-3");
    divAmon.innerHTML = `
    <h3>Listados de datos</h3>
    <p class="blue-text">Seleccione el listado que desea ver</p>
    <form class="row g-3" onsubmit="event.preventDefault(this.value)">
        <div class="col-md-12" id="btnGroup">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" id="botonLista1">Amonestaciones y sanciones por alumno</button>
                <button type="button" class="btn btn-primary" id="botonLista2">Listado de alumnos sin firma.</button>
                <button type="button" class="btn btn-primary" id="botonLista3">Amonestaciones por profesor y alumno</button>
                <button type="button" class="btn btn-primary" id="botonLista4">Amonestaciones por grupo</button>
                <button type="button" class="btn btn-primary" id="botonLista5">Amonestaciones por profesor</button>
            </div>
        </div>
        <div class="col-12 mx-auto text-center">
            <button type="submit" class="btn btn-primary" id="ImprimirListado">Imprimir listado</button>
        </div>
    </form>
        `;
    document.getElementById("contenedor").appendChild(divAmon);

    //Primer boton de listados
    document.getElementById("botonLista1").addEventListener("click", () => {
        recursos.limpiar();
        menuListado();
        selecAlumnosBtn1();
    });
    //Segundo boton de listados
    document.getElementById("botonLista2").addEventListener("click", () => {
        recursos.limpiar();
        menuListado();
        listaAmoNoFirmaBtn2();
    });
    //Tercer boton de listados
    document.getElementById("botonLista3").addEventListener("click", () => {
        recursos.limpiar();
        menuListado();
        selecProfesoresBtn3();
    });
    //Cuarto boton de listados
    document.getElementById("botonLista4").addEventListener("click", () => {
        recursos.limpiar();
        menuListado();
        selecGruposBtn4();
    });
    //Quinto boton de listados
    document.getElementById("botonLista5").addEventListener("click", () => {
        recursos.limpiar();
        menuListado();
        listaAmoProfeBtn5();
    });
    //Imprimir listado
    document.getElementById("ImprimirListado").addEventListener("click", () => {
        botonImprimir();
    });


}
//Carga el primer boton de listados
function selecAlumnosBtn1() {
    //El selector de alumnos
    let divSelectAlumno = document.createElement("div");
    divSelectAlumno.setAttribute("id", "divSelecAlumno");
    divSelectAlumno.setAttribute("class", "col-12");
    divSelectAlumno.innerHTML = `
    <label for="selectAlumno" class="form-label">Alumnos con amonestaciones o sanciones</label>
    <select id="selectAlumno" class="form-select" aria-label="Default select example">
        <option value="0" selected>Nombre del alumno</option>
    </select>
    `;

    document.getElementById("btnGroup").after(divSelectAlumno);
    //Tabla de amonestaciones
    let divTablaAmon = document.createElement("div");
    divTablaAmon.setAttribute("id", "divTablaAmonAlumnos");
    divTablaAmon.setAttribute("class", "col-md-6");
    divTablaAmon.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaAmon.innerHTML = `
    <table class="table" id="tablaAmonBtn1">
    <thead>
        <tr>
            <th scope="col">Amonestaciones del alumno</th>
        </tr>
    </thead>
    <tbody id="bodTablaAmonBtn1">
        <tr>
            <td>Mark</td>
        </tr>
    </tbody>
    </table>
    `;
    document.getElementById("divSelecAlumno").after(divTablaAmon);
    //Tabla de sanciones
    let divTablaSan = document.createElement("div");
    divTablaSan.setAttribute("id", "divTablaSancAlumnos");
    divTablaSan.setAttribute("class", "col-md-6");
    divTablaSan.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaSan.innerHTML = `
    <table class="table" id="tablaSancBtn1">
    <thead>
        <tr>
            <th scope="col">Sanciones del alumno</th>
        </tr>
    </thead>
    <tbody id="bodTablaSancBtn1">
        <tr>
            <td>Mark</td>
        </tr>
    </tbody>
    </table>
    `;
    document.getElementById("divTablaAmonAlumnos").after(divTablaSan);

    //Carga los select en variables para los eventos
    selectAlumno = document.getElementById("selectAlumno");
    let nomAlumno = "";

    //Carga los select iniciales
    selecAlumnoBtn1();

    //Carga los eventos de los select
    selectAlumno.addEventListener('change', () => {
        tablaAmonBtn1();
        nomAlumno = selectAlumno.options[selectAlumno.selectedIndex].text;
        //console.log(nomAlumno);
        //La variable para el pdf
        docDefinition = {
            content: [{ text: 'Amonestaciones y sanciones de: ' + nomAlumno + '.', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Amonestaciones', style: 'tableHeader' }]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Sanciones', style: 'tableHeader' }]
                    ]
                }
            }],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            }
        };
    });
    selectAlumno.addEventListener('change', () => {
        tablaSancBtn1();
        nomAlumno = selectAlumno.options[selectAlumno.selectedIndex].text;
        //console.log(nomAlumno);
        //La variable para el pdf
        docDefinition = {
            content: [{ text: 'Amonestaciones y sanciones de: ' + nomAlumno + '.', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Amonestaciones', style: 'tableHeader' }]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Sanciones', style: 'tableHeader' }]
                    ]
                }
            }],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            }
        };
    });
}
//Carga el segundo boton de listados
function listaAmoNoFirmaBtn2() {
    //Tabla de amonestaciones
    let divTablaAmonNoFirma = document.createElement("div");
    divTablaAmonNoFirma.setAttribute("id", "divTablaAmonNoFirma");
    divTablaAmonNoFirma.setAttribute("class", "col-md-12");
    divTablaAmonNoFirma.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaAmonNoFirma.innerHTML = `
        <table class="table" id="tablaAmoNoFirma">
        <thead>
            <tr>
                <th scope="col">Alumno</th>
                <th scope="col">Amonestación</th>
            </tr>
        </thead>
        <tbody id="bodTablaAmoNoFirma">
            <tr>
                <td>Mark</td>
                <td>Mark2</td>
            </tr>
        </tbody>
        </table>
        `;
    document.getElementById("btnGroup").after(divTablaAmonNoFirma);

    docDefinition = {
        content: [
            { text: 'Amonestaciones de alumnos sin firma', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Alumno', style: 'tableHeader' }, { text: 'Amonestación', style: 'tableHeader' }]
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        }
    };
    //Carga los datos en la tabla
    tablaAmoNoFirmaBtn2();
}
//Carga el tercer boton de listados
function selecProfesoresBtn3() {
    //El selector de profesores
    let divSelectProfesor = document.createElement("div");
    divSelectProfesor.setAttribute("id", "divSelecProfesor");
    divSelectProfesor.setAttribute("class", "col-12");
    divSelectProfesor.innerHTML = `
    <label for="selectProfesor" class="form-label">Profesores</label>
    <select id="selectProfesor" class="form-select" aria-label="Default select example">
        <option value="0" selected>Nombre del profesor</option>
    </select>
    `;
    document.getElementById("btnGroup").after(divSelectProfesor);

    //Tabla de amonestaciones
    let divTablaAmon = document.createElement("div");
    divTablaAmon.setAttribute("id", "divTablaAmonAlumnos");
    divTablaAmon.setAttribute("class", "col-md-12");
    divTablaAmon.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaAmon.innerHTML = `
    <table class="table" id="tablaAmonBtn3">
    <thead>
        <tr>
            <th scope="col">Alumno</th>
            <th scope="col">Amonestacion</th>
            <th scope="col">Fecha</th>
        </tr>
    </thead>
    <tbody id="bodTablaAmonBtn3">
        <tr>
            <td>Mark</td>
            <td>Mark2</td>
            <td>Mark3</td>
        </tr>
    </tbody>
    </table>
    `;
    document.getElementById("divSelecProfesor").after(divTablaAmon);

    //Carga los select en variables para los eventos
    selectProfesor = document.getElementById("selectProfesor");
    let nomProfe = "";

    //Carga los select iniciales
    selecProfesor();

    //Carga los eventos de los select
    selectProfesor.addEventListener('change', () => {
        tablaAmonBtn3();
        nomProfe = selectProfesor.options[selectProfesor.selectedIndex].text;
        //console.log(nomProfe);
        //La variable para el pdf
        docDefinition = {
            content: [{ text: 'Amonestaciones por: ' + nomProfe + '.', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Alumno', style: 'tableHeader' }, { text: 'Amonestación', style: 'tableHeader' }, { text: 'Fecha', style: 'tableHeader' }]
                    ]
                }
            }],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            }
        };
    });
}
//Carga el cuarto boton de listados
function selecGruposBtn4() {
    //El selector de profesores
    let divSelectGrupos = document.createElement("div");
    divSelectGrupos.setAttribute("id", "divSelecGrupos");
    divSelectGrupos.setAttribute("class", "col-12");
    divSelectGrupos.innerHTML = `
    <label for="selectGrupos" class="form-label">Grupos</label>
    <select id="selectGrupos" class="form-select" aria-label="Default select example">
        <option value="0" selected>Grupos disponibles</option>
    </select>
    `;
    document.getElementById("btnGroup").after(divSelectGrupos);

    //El selector de alumnos
    let divSelectAlumno = document.createElement("div");
    divSelectAlumno.setAttribute("id", "divSelecAlumno");
    divSelectAlumno.setAttribute("class", "col-12");
    divSelectAlumno.innerHTML = `
        <label for="selectAlumno" class="form-label">Alumnos</label>
        <select id="selectAlumno" class="form-select" aria-label="Default select example">
            <option value="0" selected>Nombre del alumno</option>
        </select>
        `;
    document.getElementById("divSelecGrupos").after(divSelectAlumno);

    //Tabla de amonestaciones
    let divTablaAmon = document.createElement("div");
    divTablaAmon.setAttribute("id", "divTablaAmonAlumnos");
    divTablaAmon.setAttribute("class", "col-md-12");
    divTablaAmon.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaAmon.innerHTML = `
            <table class="table" id="tablaAmonBtn4">
            <thead>
                <tr>
                    <th scope="col">Amonestacion</th>
                    <th scope="col">Fecha</th>
                </tr>
            </thead>
            <tbody id="bodTablaAmonBtn4">
                <tr>
                    <td>Mark</td>
                    <td>Mark2</td>
                </tr>
            </tbody>
            </table>
            `;
    document.getElementById("divSelecAlumno").after(divTablaAmon);
    //Carga los select en variables para los eventos
    selectGrupos = document.getElementById("selectGrupos");
    selectAlumno = document.getElementById("selectAlumno");

    //Carga los select iniciales
    selecGrupo();
    let nomAlumno = "";
    let nomGrupo = "";

    //Carga los eventos de los select
    selectGrupos.addEventListener('change', () => {
        selecAlumnoBtn4();
    });
    selectAlumno.addEventListener('change', () => {
        tablaAlumBtn4();
        nomAlumno = selectAlumno.options[selectAlumno.selectedIndex].text;
        nomGrupo = selectGrupos.options[selectGrupos.selectedIndex].text;
        //console.log(nomAlumno);
        //La variable para el pdf
        docDefinition = {
            content: [{ text: 'Amonestaciones del alumno ' + nomAlumno + ', del grupo ' + nomGrupo + '.', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Amonestación', style: 'tableHeader' }, { text: 'Fecha', style: 'tableHeader' }]
                    ]
                }
            }],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            }
        };
    });
}
//Carga el quinto boton de listados
function listaAmoProfeBtn5() {
    //Tabla de amonestaciones
    let divTablaAmonNoFirma = document.createElement("div");
    divTablaAmonNoFirma.setAttribute("id", "divTablaAmonProfe");
    divTablaAmonNoFirma.setAttribute("class", "col-md-12");
    divTablaAmonNoFirma.setAttribute("style", "overflow-y:scroll;max-height: 32%;");
    divTablaAmonNoFirma.innerHTML = `
        <table class="table" id="tablaAmoProfe">
            <thead>
                <tr>
                    <th scope="col">Profesor</th>
                    <th scope="col">Amonestación</th>
                    <th scope="col">Alumno</th>
                    <th scope="col">Grupo</th>
                    <th scope="col">Fecha</th>
                </tr>
            </thead>
            <tbody id="bodTablaAmoProfe">
                <tr>
                    <td>Mark</td>
                    <td>Mark2</td>
                    <td>Mark3</td>
                    <td>Mark4</td>
                    <td>Mark5</td>
                </tr>
            </tbody>
        </table>
        `;
    document.getElementById("btnGroup").after(divTablaAmonNoFirma);

    docDefinition = {
        content: [
            { text: 'Total de amonestaciones de los profesores', style: 'header' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Profesor', style: 'tableHeader' },
                        { text: 'Amonestación', style: 'tableHeader' },
                        { text: 'Alumno', style: 'tableHeader' },
                        { text: 'Grupo', style: 'tableHeader' },
                        { text: 'Fecha', style: 'tableHeader' }
                        ]
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        }
    };

    //Carga los datos en la tabla
    listaAmonBtn5();
}
/*-------------------Tocan la BD---------------------------------------------*/
//Carga los alumnos en el select
function selecAlumnoBtn1() {
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
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].id;
                option.text = data[i].nombre;
                selectAlumno.appendChild(option);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
function selecAlumnoBtn4() {
    let grupo = document.getElementById("selectGrupos").value;
    selectAlumno = document.getElementById("selectAlumno");

    var objetoEnvio = JSON.stringify(grupo);


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
        .then(function (data) {
            recursos.limpiarCampo("selectAlumno");
            let option = document.createElement("option");
            option.value = 0;
            option.text = "Nombre del alumno";
            selectAlumno.appendChild(option);
            if (data == "no existe") {
                recursos.limpiarCampo("selectAlumno");
                let option = document.createElement("option");
                option.value = 0;
                option.text = "No hay alumnos";
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
//Carga los profesores en el select
function selecProfesor() {
    selectProfesor = document.getElementById("selectProfesor");

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
            for (let i = 0; i < data.length; i++) {
                let option = document.createElement("option");
                option.value = data[i].id;
                option.text = data[i].nombre;
                selectProfesor.appendChild(option);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}
//Carga los grupos en el select
function selecGrupo() {
    selectGrupos = document.getElementById("selectGrupos");

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
//Carga las amonestaciones en la tabla
function tablaAmonBtn1() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaAmon = document.getElementById("bodTablaAmonBtn1");
    recursos.limpiarCampo("bodTablaAmonBtn1");
    //console.log(alumno);
    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaAmonAlumnoLista.php', {
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
            recursos.limpiarCampo("bodTablaAmonBtn1");
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
                    tr.appendChild(td1);
                    tablaAmon.appendChild(tr);
                    docDefinition.content[1].table.body.push([datos[i].causa]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function tablaSancBtn1() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaSanc = document.getElementById("bodTablaSancBtn1");
    recursos.limpiarCampo("bodTablaSancBtn1");
    //console.log(alumno);
    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaSancAlumno.php', {
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
            recursos.limpiarCampo("bodTablaSancBtn1");
            if (datos == "no existe") {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.innerHTML = "No tiene sanciones";
                td1.setAttribute("id", "0");
                tr.appendChild(td1);
                tablaSanc.appendChild(tr);
            } else {
                for (let i = 0; i < datos.length; i++) {
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.className = "form-check-input";
                    input.id = datos[i].id;
                    td1.innerHTML = datos[i].causa;
                    td1.id = datos[i].id;
                    tr.appendChild(td1);
                    tablaSanc.appendChild(tr);
                    docDefinition.content[2].table.body.push([datos[i].causa]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function tablaAmoNoFirmaBtn2() {

    tablaAmon = document.getElementById("bodTablaAmoNoFirma");
    recursos.limpiarCampo("bodTablaAmoNoFirma");


    fetch('PHP/sacaAmonNoFirma.php', {
        method: 'POST',
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
            recursos.limpiarCampo("bodTablaAmoNoFirma");
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

                    td1.innerHTML = datos[i].nombre;
                    td1.id = datos[i].id;
                    td2.innerHTML = datos[i].causa;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tablaAmon.appendChild(tr);
                    docDefinition.content[1].table.body.push([datos[i].nombre, datos[i].causa]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function tablaAmonBtn3() {
    let profesor = document.getElementById("selectProfesor").value;
    tablaAmon = document.getElementById("bodTablaAmonBtn3");
    recursos.limpiarCampo("bodTablaAmonBtn3");

    var objetoEnvio = JSON.stringify(profesor);

    fetch('PHP/sacaAmonProfe.php', {
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
            recursos.limpiarCampo("bodTablaAmonBtn3");
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
                    let td3 = document.createElement("td");

                    td1.innerHTML = datos[i].nombre;
                    td1.id = datos[i].id;
                    td2.innerHTML = datos[i].causa;
                    td3.innerHTML = datos[i].fecha;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tablaAmon.appendChild(tr);
                    docDefinition.content[1].table.body.push([datos[i].nombre, datos[i].causa, datos[i].fecha]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function tablaAlumBtn4() {
    let alumno = document.getElementById("selectAlumno").value;
    tablaAmon = document.getElementById("bodTablaAmonBtn4");
    recursos.limpiarCampo("bodTablaAmonBtn4");
    //console.log(alumno);
    var objetoEnvio = JSON.stringify(alumno);
    //console.log(objetoEnvio);

    fetch('PHP/sacaAmonAlumnoLista.php', {
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
            recursos.limpiarCampo("bodTablaAmonBtn4");
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
                    td1.innerHTML = datos[i].causa;
                    td2.innerHTML = datos[i].fecha;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tablaAmon.appendChild(tr);
                    docDefinition.content[1].table.body.push([datos[i].causa, datos[i].fecha]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
function listaAmonBtn5() {
    tablaAmon = document.getElementById("bodTablaAmoProfe");
    recursos.limpiarCampo("bodTablaAmoProfe");

    fetch('PHP/sacaAmon.php', {
        method: 'POST',
        mode: "cors",
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
            recursos.limpiarCampo("bodTablaAmoProfe");
            if (datos == "no existe") {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                td1.innerHTML = "No hay amonestaciones";
                td1.setAttribute("id", "0");
                tr.appendChild(td1);
                tablaAmon.appendChild(tr);
            } else {
                for (let i = 0; i < datos.length; i++) {
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
                    let td4 = document.createElement("td");
                    let td5 = document.createElement("td");
                    td1.innerHTML = datos[i].profesor;
                    td2.innerHTML = datos[i].amonestacion;
                    td3.innerHTML = datos[i].alumno;
                    td4.innerHTML = datos[i].grupo;
                    td5.innerHTML = datos[i].fecha;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tablaAmon.appendChild(tr);
                    docDefinition.content[1].table.body.push([datos[i].profesor, datos[i].amonestacion, datos[i].alumno, datos[i].grupo, datos[i].fecha]);
                }
            }
        })
        .catch(function (err) {
            console.error(err);
            //alert(err);
        });
}
//Boton para imprimir
function botonImprimir() {
    pdfMake.createPdf(docDefinition).open();
}