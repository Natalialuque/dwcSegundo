/**
 * Creamos un array de socios, donde vamos a crear 10 socios diferentes y son los que nos van a estar apareciendo siempre
 */
let socios = [
    {
        id: "SOC-0001",
        nombre: "Lucía",
        apellidos: "Martín Ruiz",
        dni: "12345678Z",
        email: "lucia.martin@correo.es",
        telefono: "612345678",
        fechaNacimiento: "1995-03-14",
        fechaAlta: "2019-09-02",
        actividades: ["natación", "yoga"],
        cuota: 35
    },
    {
        id: "SOC-0002",
        nombre: "Álvaro",
        apellidos: "Gómez Navarro",
        dni: "87654321X",
        email: "alvaro.gomez@gmail.com",
        telefono: "622456789",
        fechaNacimiento: "1998-08-21",
        fechaAlta: "2020-01-15",
        actividades: ["pádel", "musculación"],
        cuota: 40
    },
    {
        id: "SOC-0003",
        nombre: "Carmen",
        apellidos: "López Sánchez",
        dni: "45678912P",
        email: "carmen.lopez@hotmail.com",
        telefono: "633987456",
        fechaNacimiento: "1987-11-03",
        fechaAlta: "2018-05-10",
        actividades: ["pilates"],
        cuota: 30
    },
    {
        id: "SOC-0004",
        nombre: "Diego",
        apellidos: "Fernández Pérez",
        dni: "32165498H",
        email: "diegof@outlook.com",
        telefono: "644123456",
        fechaNacimiento: "2003-01-27",
        fechaAlta: "2022-03-20",
        actividades: ["spinning", "musculación"],
        cuota: 45
    },
    {
        id: "SOC-0005",
        nombre: "Sara",
        apellidos: "Jiménez Torres",
        dni: "74185296R",
        email: "sara.jimenez@yahoo.es",
        telefono: "655741258",
        fechaNacimiento: "1992-12-09",
        fechaAlta: "2017-09-30",
        actividades: ["natación"],
        cuota: 32
    },
    {
        id: "SOC-0006",
        nombre: "Pablo",
        apellidos: "Moreno Gil",
        dni: "25874136N",
        email: "pablo.moreno@gmail.com",
        telefono: "666852741",
        fechaNacimiento: "1985-07-18",
        fechaAlta: "2016-02-14",
        actividades: ["yoga", "pilates"],
        cuota: 38
    },
    {
        id: "SOC-0007",
        nombre: "Marta",
        apellidos: "Romero León",
        dni: "95135784Q",
        email: "marta.romero@correo.es",
        telefono: "677963852",
        fechaNacimiento: "2000-10-12",
        fechaAlta: "2021-11-08",
        actividades: ["pádel"],
        cuota: 42
    },

    {
        id: "SOC-0008",
        nombre: "Javier",
        apellidos: "Ortega Muñoz",
        dni: "65412387B",
        email: "javier.ortega@hotmail.com",
        telefono: "688741236",
        fechaNacimiento: "1997-05-07",
        fechaAlta: "2020-06-25",
        actividades: ["musculación", "spinning"],
        cuota: 50
    },
    {
        id: "SOC-0009",
        nombre: "Elena",
        apellidos: "Castro Vidal",
        dni: "78945612T",
        email: "elena.castro@gmail.com",
        telefono: "699852147",
        fechaNacimiento: "2005-09-15",
        fechaAlta: "2023-02-01",
        actividades: ["natación", "pilates"],
        cuota: 36
    },
    {
        id: "SOC-0010",
        nombre: "Antonio",
        apellidos: "Ruiz Delgado",
        dni: "14725836L",
        email: "antonio.ruiz@outlook.com",
        telefono: "611369258",
        fechaNacimiento: "1990-04-02",
        fechaAlta: "2015-07-12",
        actividades: ["yoga", "musculación", "spinning"],
        cuota: 55
    }

];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/**
 * Creamos el window.onload donde vamos a llamar a la funcion de inciiarAPlicacion, la cual va a cargarse 
 * cuando se inicie la aplicación 
 */

window.onload = function () {
    iniciarAplicacion();
};

function iniciarAplicacion() {

    // Fecha de hoy
    mostrarFechaActual();

    // Hora en tiempo real
    iniciarReloj();

    // Cargar actividades del combo
    //cargarComboActividades();

    // Pintar los 10 socios iniciales
    pintarTablaSocios();

    // Eventos de botones y formularios
    //registrarEventos();

    // Estadísticas iniciales
    //mostrarEstadisticas();

}

/**
 * Ahora vamos a ir creando funcion a funcion cada uno de las cosas que nos piden 
 */

//Funcion en la que vamos a mostrar la fecha actual
function mostrarFechaActual() {

    //llamamos al elemento donde mostramos la fehca del html
    const fechaActual = document.getElementById("fechaActual");

    //generamos una nueva fecha
    const fecha = new Date();

    //Array de dias de la semana, porque al usar getDay coge numero y con esto podemos mostrar el dia
    const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];

    //Lo mismo con los meses, pero con getMonth 
    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

    //Con esto Construimos la fecha con formato adecuado al que nos pide
    let textoFecha =dias[fecha.getDay()] + ", " +fecha.getDate() + " de " +meses[fecha.getMonth()] + " de " +fecha.getFullYear();

    //Nos piden el primer caracter en mayuscula, por lo que lo sacamos y lo cambiamos, y seguidamente ponemos el resto de la frase
    textoFecha = textoFecha.charAt(0).toUpperCase() +textoFecha.slice(1);

    //mostramos por pantalla 
    fechaActual.innerHTML = textoFecha;

}

//funcion en la que vamos a mostrar la hora actual, pero se debe ir actualizando cada x para que sea correcta 
function iniciarReloj() {
    //esta funcion es la de la hora y la seguida es para que se vaya actualizando cada segundo
    actualizarHora();
    setInterval(
        actualizarHora,
        1000
    );
}

function actualizarHora() {
    //llamamos al elemento donde mostramos la hora del html
    const horaActual = document.getElementById("horaActual");

    //Creamos la nueva fecha con la hora, y vamos llamando a minutos horas y segundo
    const fecha =new Date();

    let horas =fecha.getHours();
    let minutos =fecha.getMinutes();
    let segundos =fecha.getSeconds();


    //Si la hora, minuto, segundo es menor a 10, ponemos 0 delante
    if (horas < 10) {
     horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    //mostramos por pantalla 
    horaActual.innerHTML = horas + ":" +minutos + ":" +segundos;

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cargarActividades() {

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pintarTablaSocios() {

    //llamamos al body donde vamos a mostrar los socios
    const tbody =document.getElementById("tbodySocios");

    //lo limpiamos para no dar errores
    tbody.innerHTML = "";

    //recorremos el array de socios y vamos metiendolo en cada apartado
    for (let socio of socios) {

        tbody.innerHTML += `
            <tr>

                <td>${socio.id}</td>
                <td>${socio.nombre}</td>
                <td>${socio.apellidos}</td>
                <td>${socio.email}</td>
                <td>${socio.actividades}</td>
                <td>${socio.cuota} €</td>

            </tr>
        `;

    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarEstadisticas() {

}

function registrarEventos() {

}