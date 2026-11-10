//El window onload es lo primero que se ejecuta al cargar la pagina, con una funcion de iniciar apliacion
window.onload = function () {
    iniciarAplicacion();
};

//En la funcion de iniciar aplicacion tenemos una serie de funciones que nos van a permitir el funcionamiento general de nuestra pagina
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
 * FUNCIONES --> Vamos a ir creando funciones 
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
/**
 * FUNCION A MOSTRAR SOCIOS --> funcion general donde mostramos socios, albergamos una serie mas de funciones donde 
 *                              controlamos diferentes aspectos 
 */
function pintarTablaSocios() {

    //llamamos al body donde vamos a mostrar los socios
    const tbody =document.getElementById("tbodySocios");

    //lo limpiamos para no dar errores
    tbody.innerHTML = "";

    //recorremos el array de socios y vamos metiendolo en cada apartado
    for (let socio of socios) {

        tbody.innerHTML += `
            <tr>
                ${/* un círculo con las dos primeras iniciales del socio  seguido de su id. */''}
                <td class="td-id">
                    <span class="circulo">${obtenerIniciales(socio)}</span>
                    ${socio.id}
                </td>
                ${/* nombre, primer apellido y la inicial del segundo apellido */''}
                <td>${obtenerInicialSegundo(socio)}</td>
                ${/* El email debe aparecer parcialmente oculto, dejando visibles las 2 primeras letras y el dominio */''}
                <td>${ocultarEmail(socio.email)}</td>
                ${/* nombre, primer apellido y la inicial del segundo apellido */''}
                <td>${CalculaFechaNacimiento(socio.fechaNacimiento)}</td>
                ${/* Actividades */''}
                <td>${socio.actividades}</td>
                 ${/* Cuota formateada a dos decimales y con € */''}
                <td>${formatearCuota(socio.cuota)}</td>

            </tr>
        `;

    }
}

//Funcion para obtener las iniciales del nombre y del primer apellido
function obtenerIniciales(socio){

    let primerApellido = socio.apellidos.split(" ")[0];

    return socio.nombre.charAt(0).toUpperCase() +primerApellido.charAt(0).toUpperCase();
}

//funcion para obtener la incial del segundo apellido
function obtenerInicialSegundo(socio){

    let segundoApellido = socio.apellidos.split(" ")[1];
    let primerApellido = socio.apellidos.split(" ")[0];


    return socio.nombre +" "+primerApellido+" "+segundoApellido.charAt(0).toUpperCase();
}

//Funcion que nos permite ocultar el email
function ocultarEmail(email){

    //dividimos el email por el @
    let partes = email.split("@");

    //cogemos el nombre
    let usuario = partes[0];
    //cogemos dominio
    let dominio = partes[1];

    let oculto =usuario.substring(0,2) +"*".repeat(usuario.length - 2);

    return oculto + "@" + dominio;
}

//Calcula la fecha de nacimiento mediante una fecha 
function CalculaFechaNacimiento(fechaNacimiento) {
    let hoy = new Date();
    let fechaNac = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();

    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 ||(mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }

    return edad;
}

//para sacar la cuota con dos decimales 
function formatearCuota(cuota){
    return cuota.toFixed(2) + " €";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * BOTON DE AGRANDAR --> Funcion que permite lo de pantalla completa, el fullScreen basicamente controla que si este en pantalla completa
 */
let botonPantalla = document.getElementById("btnPantallaCompleta");
botonPantalla.addEventListener("click",pantallaCompleta);

function pantallaCompleta() {

    let panel = document.getElementById("panelSocios");

    if (!document.fullscreenElement) {
        panel.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarEstadisticas() {

}

function registrarEventos() {

}