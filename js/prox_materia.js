var matriz_materias = new Array();

// 1
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:45 - 10:00';
materia.nombre = 'WORD';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-B';
matriz_materias.push(materia);

// 2
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:45 - 10:00';
materia.nombre = 'INTERNET';
materia.prerequisito = 'Excel';
materia.aula = 'LAB-C';
matriz_materias.push(materia);

// 3
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '7:30 - 8:45';
materia.nombre = 'EXCEL';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-B';
matriz_materias.push(materia);

// 4
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '7:30 - 8:45';
materia.nombre = 'WINDOWS';
materia.prerequisito = 'Ninguno';
materia.aula = 'LAB-C';
matriz_materias.push(materia);

// 5
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'ADMINISTRACIÓN DE LA PRODUCCIÓN (Administración Técnica)';
materia.prerequisito = 'Administración General';
materia.aula = 'B-2';
matriz_materias.push(materia);
// 6
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'ADMINISTRACIÓN GENERAL';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-1';
matriz_materias.push(materia);
// 7
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'CONTABILIDAD INTERMEDIA (Auxiliar Contable)';
materia.prerequisito = 'Contabilidad I';
materia.aula = 'B-3';
matriz_materias.push(materia);
// 8
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'CONTABILIDAD II (Contabilidad Intermedia)';
materia.prerequisito = 'Contabilidad I';
materia.aula = 'B-3';
matriz_materias.push(materia);
// 9
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'HISTORIA DEL ARTE';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-1';
matriz_materias.push(materia);
// 10
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'ZONA FRANCA (Gestor de Trámites Aduaneros)';
materia.prerequisito = 'Tributos Aduaneros';
materia.aula = 'A-2';
matriz_materias.push(materia);
// 11
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'TÉCMICAS DE NEGOCIACIÓN (Marketing y Ventas)';
materia.prerequisito = 'Psicología Comercial';
materia.aula = 'C-2';
matriz_materias.push(materia);
// 12
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'TALLER DE APLICABILIDAD II';
materia.prerequisito = 'Todas las Anteriores';
materia.aula = 'A-3';
matriz_materias.push(materia);
// 13
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 11:00';
materia.nombre = 'MECANOGRAFÍA I (Secreatariado Ejecutivo)';
materia.prerequisito = 'Ninguno';
materia.aula = 'B-2 y LAB-A';
matriz_materias.push(materia);
// 14
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '8:00 - 9:00';
materia.nombre = 'ELECTRÓNICA BÁSICA';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-1';
matriz_materias.push(materia);
// 15
var materia = new Object();
materia.turno = 'Mañana';
materia.horario = '9:00 - 10:00';
materia.nombre = 'REPARACIÓN DE FUENTES DE PODER';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-1';
matriz_materias.push(materia);
// 16
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '14:30 - 15:45';
materia.nombre = 'WORD';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-C';
matriz_materias.push(materia);
// 16
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:45 - 17:00';
materia.nombre = 'EXCEL';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-C';
matriz_materias.push(materia);
// 17
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '14:30 - 15:45';
materia.nombre = 'INTERNET';
materia.prerequisito = 'Excel';
materia.aula = 'LAB-A';
matriz_materias.push(materia);
// 18
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:45 - 17:00';
materia.nombre = 'WINDOWS';
materia.prerequisito = 'Ninguno';
materia.aula = 'LAB-A';
matriz_materias.push(materia);
// 19
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:30 - 17:00';
materia.nombre = 'WINDOWS';
materia.prerequisito = 'Ninguno';
materia.aula = 'LAB-A';
matriz_materias.push(materia);
// 20
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'MATEMÁTICA FINANCIERA';
materia.prerequisito = 'Ninguno';
materia.aula = 'B-1';
matriz_materias.push(materia);
// 21
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'MATEMÁTICA COMERCIAL (Matemática Financiera)';
materia.prerequisito = 'Ninguno';
materia.aula = 'B-1';
matriz_materias.push(materia);
// 22
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'TALLER PRÁCTICO ADMINISTRATIVO (Administración Técnica)';
materia.prerequisito = 'Administración General';
materia.aula = 'B-2';
matriz_materias.push(materia);
// 23
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'TALLER DE CONTABILIDAD INTERMEDIA (Auxiliar Contable)';
materia.prerequisito = 'Contabilidad Intermedia';
materia.aula = 'B-3';
matriz_materias.push(materia);
// 24
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'CONTABILIDAD BANCARIA (Técnico Bancario)';
materia.prerequisito = 'Contabilidad Básica';
materia.aula = 'C-2';
matriz_materias.push(materia);
// 25
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'MATERIALES DE REVESTIMIENTO';
materia.prerequisito = 'Diseño de Mobiliario';
materia.aula = 'A-3';
matriz_materias.push(materia);
// 26
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'COMUNICACIÓN Y ORATORIA';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-3';
matriz_materias.push(materia);
// 27
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'ELECTIVA COMUNICACIÓN Y ORATORIA (Secreatariado)';
materia.prerequisito = 'Todas las Anteriores';
materia.aula = 'C-3';
matriz_materias.push(materia);
// 28
var materia = new Object();
materia.turno = 'Tarde';
materia.horario = '15:00 - 18:00';
materia.nombre = 'MECANOGRAFÍA II';
materia.prerequisito = 'Mecanografía I';
materia.aula = 'A-2 y LAB-B';
matriz_materias.push(materia);
// 29
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 20:15';
materia.nombre = 'WINDOWS';
materia.prerequisito = 'Ninguno';
materia.aula = 'LAB-A';
matriz_materias.push(materia);
// 30
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 20:15';
materia.nombre = 'EXCEL';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-C';
matriz_materias.push(materia);
// 31
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '20:15 - 21:30';
materia.nombre = 'WORD';
materia.prerequisito = 'Windows';
materia.aula = 'LAB-A';
matriz_materias.push(materia);
// 32
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'ADMINISTRACIÓN GENERAL (Técnico Bancario)';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-1';
matriz_materias.push(materia);
// 33
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'ADMINISTRACIÓN Y ORGANIZACIÓN (Secreatariado Ejecutivo)';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-1';
matriz_materias.push(materia);
// 34
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'CONTABILIDAD AVANZADA (Auxiliar Contable)';
materia.prerequisito = 'Contabilidad Intermedia';
materia.aula = 'B-3';
matriz_materias.push(materia);
// 35
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'ANÁLISIS FINANCIERO (Auxiliar Contable)';
materia.prerequisito = 'Contabilidad Intermedia';
materia.aula = 'B-2';
matriz_materias.push(materia);
// 36
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'TRANSPORTE Y SEGUROS (Gestor en Trámites Aduaneros)';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-2';
matriz_materias.push(materia);
// 37
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'MARKETING I (Marketing y Ventas)';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-2';
matriz_materias.push(materia);
// 38
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 22:00';
materia.nombre = 'RELACIONES INTERNACIONALES (Secreatariado Ejecutivo)';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-3';
matriz_materias.push(materia);
// 39
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 20:00';
materia.nombre = 'ARQUITECTURA DE LA COMPUTADORA';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-1';
matriz_materias.push(materia);
// 40
var materia = new Object();
materia.turno = 'Noche';
materia.horario = '19:00 - 20:00';
materia.nombre = 'ENSAMBLADO DE LA COMPUTADORA';
materia.prerequisito = 'Ninguno';
materia.aula = 'A-2';
matriz_materias.push(materia);
//SABADOS
// 41
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:30';
materia.nombre = 'WINDOWS';
materia.prerequisito = 'Ninguno';
materia.aula = 'LAB-C';
matriz_materias.push(materia);
// 42
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:30';
materia.nombre = 'ADMINISTRACIÓN DE SERVIDORES';
materia.prerequisito = 'Sistemas Operativos';
materia.aula = 'LAB-B';
matriz_materias.push(materia);
// 43
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:30';
materia.nombre = 'RIESGO CREDITICIO';
materia.prerequisito = 'Técnico Práctico Bancario';
materia.aula = 'B-3';
matriz_materias.push(materia);
// 44
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:30';
materia.nombre = 'PRESUPUESTO Y CONTROL';
materia.prerequisito = 'Contabilidad Intermedia';
materia.aula = 'A-2';
matriz_materias.push(materia);
// 45
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:30';
materia.nombre = 'LEGISLACIÓN TRIBUTARÍA';
materia.prerequisito = 'Ninguno';
materia.aula = 'C-2';
matriz_materias.push(materia);
// 46
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:00';
materia.nombre = 'ADMINISTRACIÓN DE LA PRODUCCIÓN';
materia.prerequisito = 'Administración General';
materia.aula = 'C-1';
matriz_materias.push(materia);
// 47
var materia = new Object();
materia.turno = 'Tarde (Sábados)';
materia.horario = '15:00 - 18:00';
materia.nombre = 'TALLER DE ANALISÍS FINACIERO';
materia.prerequisito = 'Analisís Finaciero';
materia.aula = 'B-2';
matriz_materias.push(materia);
// ==============================================
//alert(materia.nombre);
//alert(matriz_materias[0].prerequisito);
var man = true;
var tar = true;
var noch = true;
var sab_man = true;
var sab_tar = true;
var cadena = '';
matriz_materias.forEach(MostrarMaterias);
function MostrarMaterias(obj) {
    if (obj.turno == 'Mañana') {
        if (man) {
            cadena += '<h5 class="center-align white-text ">Materias lunes a viernes turno mañana</h5><table class="bordered striped responsive-table light-blue darken-4 white-text"><thead><tr><th>Turno</th><th>Horario</th><th>Materia</th><th>Prerequisito</th><th>Aula</th></tr></thead><tbody>';
            man = false;
        }
        cadena += '<tr><td class="deep-orange accent-2">' + obj.turno + '</td><td class="white deep-orange-text text-accent-2">' + obj.horario + '</td><td class="deep-orange accent-2">' + obj.nombre + '</td><td class="white deep-orange-text text-accent-2">' + obj.prerequisito + '</td><td class="deep-orange accent-2">' + obj.aula + '</td></tr>';
    }
    else if (obj.turno == 'Tarde') {
        if (tar) {
            cadena += '</tbody></table><br><h5 class="center-align white-text ">Materias lunes a viernes turno tarde</h5><br><table class="bordered striped responsive-table light-blue darken-4 white-text"><thead><tr><th>Turno</th><th>Horario</th><th>Materia</th><th>Prerequisito</th><th>Aula</th></tr></thead><tbody>';
            tar = false;
        }
        cadena += '<tr><td class="light-blue darken-3 white-text">' + obj.turno + '</td><td class="white light-blue-text text-darken-4">' + obj.horario + '</td><td class="light-blue darken-3 white-text">' + obj.nombre + '</td><td class="white light-blue-text text-darken-4">' + obj.prerequisito + '</td><td class="light-blue darken-3 white-text">' + obj.aula + '</td></tr>';
    }
    else if (obj.turno == 'Noche') {
        if (noch) {
            cadena += '</tbody></table><br><h5 class="center-align white-text ">Materias lunes a viernes turno noche</h5><br><table class="bordered striped responsive-table light-blue darken-4 white-text"><thead><tr><th>Turno</th><th>Horario</th><th>Materia</th><th>Prerequisito</th><th>Aula</th></tr></thead><tbody>';
            noch = false;
        }
        cadena += '<tr><td class="deep-purple accent-1">' + obj.turno + '</td><td class="white deep-purple-text text-accent-2">' + obj.horario + '</td><td class="deep-purple accent-1">' + obj.nombre + '</td><td class="white deep-purple-text text-accent-2">' + obj.prerequisito + '</td><td class="deep-purple accent-1">' + obj.aula + '</td></tr>';
    }

    if (obj.turno == 'Mañana (Sábados)') {
        if (sab_man) {
            cadena += '</tbody></table><br><h5 class="center-align white-text ">Materias solo sábados turno tarde</h5><br><table class="bordered striped responsive-table light-blue darken-4 white-text"><thead><tr><th>Turno</th><th>Horario</th><th>Materia</th><th>Prerequisito</th><th>Aula</th></tr></thead><tbody>';
            sab_man = false;
        }
        cadena += '<tr><td class="deep-orange accent-2">' + obj.turno + '</td><td class="white deep-orange-text text-accent-2">' + obj.horario + '</td><td class="deep-orange accent-2">' + obj.nombre + '</td><td class="white deep-orange-text text-accent-2">' + obj.prerequisito + '</td><td class="deep-orange accent-2">' + obj.aula + '</td></tr>';
    }
    else if (obj.turno == 'Tarde (Sábados)') {
        if (sab_tar) {
            cadena += '</tbody></table><br><h5 class="center-align white-text ">Materias solo sábados turno tarde</h5><br><table class="bordered striped responsive-table light-blue darken-4 white-text"><thead><tr><th>Turno</th><th>Horario</th><th>Materia</th><th>Prerequisito</th><th>Aula</th></tr></thead><tbody>';
            sab_tar = false;
        }
        cadena += '<tr><td class="light-blue darken-3 white-text">' + obj.turno + '</td><td class="white light-blue-text text-darken-4">' + obj.horario + '</td><td class="light-blue darken-3 white-text">' + obj.nombre + '</td><td class="white light-blue-text text-darken-4">' + obj.prerequisito + '</td><td class="light-blue darken-3 white-text">' + obj.aula + '</td></tr>';
    }

}
cadena += '</tbody></table>';
//alert(cadena);
//$('#tabla_materias').html(cadena);
//$('#tabla_materias').html('HOLA');
//document.getElementById("tabla_materias").innerHTML = cadena;
function AgregarTabla() {
    $('#tabla_materias').html(cadena);
    //document.getElementById("tabla_materias").innerHTML += cadena;
};

$(document).ready(function () {
    AgregarTabla();
});

