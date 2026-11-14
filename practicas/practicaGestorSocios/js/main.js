/////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * FUNCIONES PRINCIPALES DONDE GUARDAMOS TODAS LAS FUNCIONES Y HACEMOS LA CARGA AL ABRIR LA PAGINA
 */

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

    // Pintar los 10 socios iniciales
    pintarTablaSocios(socios);

    //Todos los filtros de la tabla 
    aplicarBuscaFiltroOrden();

    // Estadísticas iniciales
    mostrarEstadisticas();

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * APARTADO 3.1 DE LA PRACTICA --> dos funciones de cabecera donde meterlos la fecha alcual y la hora actual que va actualizandose
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * FUNCION FECHA ACTUAL --> 
 */
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

/**
 * FUNCION QUE NOS INICIALIZA EL RELOJ CADA 1 SEGUNDO
 */
function iniciarReloj() {
    //esta funcion es la de la hora y la seguida es para que se vaya actualizando cada segundo
    actualizarHora();
    setInterval(
        actualizarHora,
        1000
    );
}

/**
 * FUNCION QUE NOS SACA LA HORA 
 */
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * APARTADO 3.1 DE LA PRACTICA --> se encarga de mostrar todos los datos de socios formateados, y meter tres filtros 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 
 * FUNCION A MOSTRAR SOCIOS --> funcion general donde mostramos socios, albergamos una serie mas de funciones donde 
 *                              controlamos diferentes aspectos 
 */
function pintarTablaSocios(listaSocios) {

    //llamamos al body donde vamos a mostrar los socios
    const tbody =document.getElementById("tbodySocios");

    //lo limpiamos para no dar errores
    tbody.innerHTML = "";

    //recorremos el array de socios y vamos metiendolo en cada apartado
    for (let socio of listaSocios) {

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

/**
 * FUNCION DE APLICAR BUSCAR+ORDEN+FILTRO --> Una funcion general que albergue las tres funciones y haga directamente las variaciones 
 */

function aplicarBuscaFiltroOrden() {

    //hacemos una copia del array de socios para poder ir apliacando cada filtro
    let resultado = socios.slice();

    resultado = buscarSocios(resultado);

    resultado = aplicarFiltroActividad(resultado);

    resultado = aplicarOrden(resultado);

    pintarTablaSocios(resultado);
}

//controles de las funciones 
const buscador = document.getElementById("txtBuscar");
const selectActividad = document.getElementById("selActividad");
const selectOrden = document.getElementById("selOrden");

buscador.addEventListener("input", aplicarBuscaFiltroOrden);
selectActividad.addEventListener("change", aplicarBuscaFiltroOrden);
selectOrden.addEventListener("change", aplicarBuscaFiltroOrden);

//Funcion Buscar --> mientras se escribe, la tabla cambia su contenido y mostrará solo los socios cuyo
                    //nombre, apellidos o email contienen el texto. La búsqueda empezará a partir de que el usuario
                    //escriba 2 caracteres. No debe distinguir mayúsculas ni tildes: alvaro encuentra a Álvaro.
function buscarSocios(listaSocios) {

    // Normalizo el texto del input
    let textoBusqueda = normalizarTexto(buscador.value.trim());

    // Si ha escrito menos de 2 caracteres,no se filtra nada y se devuelve la lista original.
    if (textoBusqueda.length < 2) {
        return listaSocios;
    }

    // filter recorre todos los socios//Si devuelve true, el socio se guarda // Si devuelve false, se descarta.
    return listaSocios.filter(socio => {

        // Normalizo nombre, apellidos y email para ignorar mayúsculas y tildes.
        let nombre = normalizarTexto(socio.nombre);
        let apellidos = normalizarTexto(socio.apellidos);
        let email = normalizarTexto(socio.email);

        // Compruebo si el texto aparece en alguno de los tres campos.
        return nombre.includes(textoBusqueda) ||
               apellidos.includes(textoBusqueda) ||
               email.includes(textoBusqueda);

    });
}

//funcion auxilar para que no distinga entre mayusculas, ni tildes, MUY MUY COMODA
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Funcion Filtro --> añade una lista desplegable con las actividades que se practican en el club,
                    //más la opción Todas las actividades. Al pulsar en una actividad, en la tabla solo se verán los
                    //socios que están matriculados en esa actividad.
function aplicarFiltroActividad(listaSocios) {

    // Actividad elegida por el usuario
    let actividadSeleccionada = selectActividad.value;

    // Si se selecciona la opción de mostrar todo no aplicamos ningún filtro.
    if (actividadSeleccionada === "Todas las actividades") {
        return listaSocios;
    }

    // Devolvemos únicamente los socios que contienen la actividad seleccionada.
    return listaSocios.filter(socio =>
        socio.actividades.includes(actividadSeleccionada)
    );
}

//Funcion orden --> añade una lista desplegable que ordene la tabla de todos los socios: por nombre,
                    //apellidos, más jóvenes primero o más antiguos primero.
function aplicarOrden(listaSocios) {
    //guardamos los tipos de ordenes que tenemos
    let tipoOrden = selectOrden.value;

    //generamos un switch con los tipos y vamos ordenando mediante lo que nos pide cada uno
    switch (tipoOrden) {

        case "Nombre":
             //MUY TOP LOCALCOMPARE --> COMPARA ALFABETICAMENTE Y LOS VA ORDENANDO
            listaSocios.sort((a, b) =>
                a.nombre.localeCompare(b.nombre)
            );

            break;

        case "Apellidos":
             //MUY TOP LOCALCOMPARE --> COMPARA ALFABETICAMENTE Y LOS VA ORDENANDO
            listaSocios.sort((a, b) =>
                a.apellidos.localeCompare(b.apellidos)
            );

            break;

        case "Más jóvenes":
            //busca al mas pequeño y lo pone primero
            listaSocios.sort((a, b) =>
                new Date(b.fechaNacimiento) -
                new Date(a.fechaNacimiento)
            );

            break;

        case "Más antiguos":
            //busca al mas antiguo y lo pone primero
            listaSocios.sort((a, b) =>
                new Date(a.fechaAlta) -
                new Date(b.fechaAlta)
            );

            break;
    }

    return listaSocios;
}

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * APARTADO 3.3 DE LA PRACTICA --> Se encarga de buscar mediante dni, y muestra en una nueva ventana la ficha del socio correspondiente
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let DNI = document.getElementById("txtDniBusqueda");
let botonBuscaPorDNi = document.getElementById("buscarDNi");


botonBuscaPorDNi.addEventListener("click",mostarCliente);

/**
 * FUNCION MOSTRAR CLIENTE --> Mediante esta funcion abrimos una nueva ventana en la que vamos a mostrar un cliente que hemos buscado, mediante OPEN WINDOW 
 */
let socioFicha = null;

//la hija llama a esta funcion para recoger el socio
window.obtenerSocioFicha = function(){
    return socioFicha;
};

function mostarCliente(e){
    //SUPER IMPORTANTE -> EVITA QUE RECARGUE LA PAGINA
    e.preventDefault();   // evita que se recargue la página

    let dniIntroducido = DNI.value.trim();

    if(dniIntroducido===""){
        alert("campo vacio, rellana con dni");
        return;
    }

    if(!validaDNI(dniIntroducido)){
        alert("Formato de DNI incorrecto");
        return;
    }

    let socioEncontrado = null;
    for(let socio of socios){
        if(socio.dni.toUpperCase() == dniIntroducido.toUpperCase()){
            socioEncontrado = socio;
            break;
        }
    }

    if(!socioEncontrado){
        alert("No existe ningún socio con ese DNI");
        return;
    }

    //guardamos el socio correcto y abrimos la ventana
    socioFicha = socioEncontrado;

    window.open(
        "fichaSocio.html",
        "FichaSocio",
        "width=700,height=700"
    );
}

//Funcion para validar que el dni es correcto 
function validaDNI(dni){
    //expresion regular que verifica que tenga 8 numeros y una letra
    let patron = /^[0-9]{8}[a-zA-Z]{1}$/;

    //verificamos
    return patron.test(dni);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * APARTADO 3.4 DE LA PRACTICA --> Cargar un nuevo usuario a la tabla, verificando los datos de los inputs 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creaamos las variables con las que llamamos 
let nombreInput= document.getElementById("txtNombre");
let apellidosInput = document.getElementById("txtApellidos");
let dniInput = document.getElementById("txtDni");
let emailInput = document.getElementById("txtEmail");
let telefonoInput = document.getElementById("txtTelefono");
let fechaNaciInput = document.getElementById("txtFechaNacimiento");
let cuotaInput = document.getElementById("txtCuota");
let checks = document.querySelectorAll('input[name="actividad"]');

//creamos las variables en las que mostramos errores 
let errorNombre= document.getElementById("errorNombre");
let errorApellidos = document.getElementById("errorApellidos");
let errorDni = document.getElementById("errorDni");
let errorEmail = document.getElementById("errorEmail");
let errorTelefono = document.getElementById("errorTelefono");
let errorFecha = document.getElementById("errorFecha");
let errorCuota = document.getElementById("errorCuota");
let errorActividades = document.getElementById("errorActividades");


//boton de añadir 
let darAlta = document.getElementById("darAlta");

darAlta.addEventListener("click",verificaAñade);

//FUNCION VERIFICA Y AÑADE --> Donde vamos a comprar que los campos estan bien escritos y añadirlos al array 
function verificaAñade(evento){
    evento.preventDefault(); // evita que el formulario se envíe y recargue la página

    const nombre = validarNombre();
    const apellidos = validarApellidos();
    const dni = validardni();
    const email = validarEmail();
    const telefono = validarTelefono();
    const fechaNacimiento = validarFechaNacimiento();
    const actividades = validarActividades();
    const cuota = validarCuota();


    if (nombre === null ||apellidos === null ||dni === null ||email === null ||telefono === null ||fechaNacimiento === null ||actividades === null || cuota === null) {
        return;
    }else{
    
        //tenemos que poner la fecha alta en el dia de hoy
    let hoy = new Date();
    let fechaAlta =`${hoy.getFullYear()}-${String(hoy.getMonth()+1).padStart(2,"0")}-${String(hoy.getDate()).padStart(2,"0")}`;


    //aqui vamos a añadir el nuevo socio si todo esta correcto
    const nuevoSocio = {

        id: generarNuevoId(),
        nombre: nombre,
        apellidos: apellidos,
        dni: dni,
        email: email,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento,
        fechaAlta: fechaAlta,
        actividades: actividades,
        cuota: cuota
    };

    //añadimos el socio al array 
    socios.push(nuevoSocio);

    //notificmos que socio añadido
    alert("Socio añadido");

    //limpiamos formulario
    nombreInput.value = "";
    apellidosInput.value = "";
    dniInput.value = "";
    emailInput.value = "";
    telefonoInput.value = "";
    fechaNaciInput.value = "";
    cuotaInput.value = "";

    checks.forEach(check => {
        check.checked = false;
    });

    //pintamos de nuevo la tabla 
    pintarTablaSocios(socios);

    //actualizamos tabla
    mostrarEstadisticas();
    }

    
}

//FUNCION GENRAR DNI --> necesitamos esta funcion para que busque el ultimo de socios y me genere el siguiente
function generarNuevoId(){

    //busca el ultimo
    let ultimoId = socios[socios.length - 1].id;
    let numero = parseInt(ultimoId.split("-")[1]);
    
    //suma 1
    numero++;

    //el padStart permite añadir 0 delante 
    return "SOC-" + numero.toString().padStart(4, "0");
}

//DOS FUNCIONES PARA PONER LOS CAMPOS EN ROJO Y MOSTRAR EL ERROR Y OTRA PARA BORARLO
/** Marca un campo como erróneo (borde rojo) y muestra el mensaje. */
function mostrarError(input, spanError, mensaje) {
    input.classList.add("error");
    spanError.textContent = mensaje;
}

/** Quita la marca de error de un campo y limpia el mensaje. */
function quitarError(input, spanError) {
    input.classList.remove("error");
    spanError.textContent = "";
}
    
// Patrón: palabras formadas solo por letras (con tildes, ñ, ü), separadas por un único espacio
const PATRON_TEXTO = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+( [A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;

//VALIDAR NOMBRE ---> Solo letras (incluidas tildes, ñ y ü) y un único espacio entre palabras
function validarNombre() {
    const valor = nombreInput.value.trim();

    //no este vacio
    if (valor === "") {
        mostrarError(nombreInput, errorNombre, "El nombre no puede estar vacío");
        return null;
    }
    //coincida con el patron
    if (!PATRON_TEXTO.test(valor)) {
        mostrarError(nombreInput, errorNombre, "El nombre solo puede tener letras y un único espacio entre palabras");
        return null;
    }

    quitarError(nombreInput, errorNombre);
    return valor;
}

//VALIDAR APELLIDO -->Solo letras (incluidas tildes, ñ y ü) y un único espacio entre palabras
function validarApellidos() {
    const valor = apellidosInput.value.trim();

    //no vacio
    if (valor === "") {
        mostrarError(apellidosInput, errorApellidos, "Los apellidos no pueden estar vacíos");
        return null;
    }
    //coincida con el patron
    if (!PATRON_TEXTO.test(valor)) {
        mostrarError(apellidosInput, errorApellidos, "Los apellidos solo pueden tener letras y un único espacio entre palabras");
        return null;
    }

    quitarError(apellidosInput, errorApellidos);
    return valor;
}

//VALIDAR dni -->8 dígitos y una letra, y la letra debe ser la correcta para ese número.
function validardni() {

    const valor = dniInput.value.trim().toUpperCase();

    //que no este vacio 
    if (valor === "") {
        mostrarError(dniInput, errorDni, "El DNI no puede estar vacío");
        return null;
    }
    //patron para verificar lo de 8 numeros y una letra
    const patronDni = /^\d{8}[A-Z]{1}$/;

    if (!patronDni.test(valor)) {
        mostrarError(dniInput, errorDni, "El DNI debe tener 8 números y una letra");
        return null;
    }

    //Con este patron y sacando el resto de la division del los 8 numeros / 23 podemos obtener una letra
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

    let numero = parseInt(valor.substring(0, 8));
    let letra = valor.charAt(8);

    let letraCorrecta = letras[numero % 23];

    if (letra !== letraCorrecta) {
        mostrarError(dniInput, errorDni, "La letra del DNI no es correcta");
        return null;
    }

    // dni repetido
    let encontrado = socios.some(socio => socio.dni === valor);

    if(encontrado){
        mostrarError(dniInput, errorDni,"Ya existe un socio con ese DNI");
        return null;
    }

    quitarError(dniInput, errorDni);
    return valor;
}

//VALIDAR EMAIL -> formato usuario@dominio.extension
function validarEmail() {

    const valor = emailInput.value.trim().toLowerCase();

    const patronEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    //que no este vacio
    if (valor === "") {
        mostrarError(emailInput, errorEmail, "El email no puede estar vacío");
        return null;
    }

    //que cumpla con el patron
    if (!patronEmail.test(valor)) {
        mostrarError(emailInput, errorEmail, "Formato de email incorrecto");
        return null;
    }

    quitarError(emailInput, errorEmail);
    return valor;
}

//VALIDAR TELEFONO -> 9 dígitos empezando por 6,7,8 o 9. Se permiten espacios al escribirlo.
function validarTelefono() {
    const valor = telefonoInput.value.trim();

    if (valor === "") {
        mostrarError(telefonoInput, errorTelefono, "El teléfono no puede estar vacío");
        return null;
    }

    // Quitamos los espacios para validar
    const telefonoLimpio = valor.replaceAll(" ", "");

    const patronTelefono = /^[6789]\d{8}$/;

    //que cumpla con el patron
    if (!patronTelefono.test(telefonoLimpio)) { mostrarError(telefonoInput, errorTelefono,"El teléfono debe tener 9 dígitos y empezar por 6, 7, 8 o 9");
        return null;
    }

    quitarError(telefonoInput, errorTelefono);
    return telefonoLimpio;
}

//VALIDAR FECHA NACIMIENTO -> formato dd/mm/aaaa,fecha existente, no futura y edad mínima de 14 años
function validarFechaNacimiento() {
    const valor = fechaNaciInput.value.trim();

    //no puede estar vacio
    if (valor === "") {
        mostrarError(fechaNaciInput, errorFecha,"La fecha de nacimiento no puede estar vacía");return null;
    }

    //Para formatear la fecha
    const patronFecha = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!patronFecha.test(valor)) {mostrarError(fechaNaciInput, errorFecha,"La fecha debe tener formato dd/mm/aaaa");
        return null;
    }

    let partes = valor.split("/");

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let año = parseInt(partes[2]);

    let fecha = new Date(año, mes, dia);

    // Comprobar que la fecha existe realmente
    if (
        fecha.getDate() !== dia ||
        fecha.getMonth() !== mes ||
        fecha.getFullYear() !== año
    ) {
        mostrarError(fechaNaciInput, errorFecha,"La fecha no existe");
        return;
    }

    let hoy = new Date();

    if (fecha > hoy) {
        mostrarError(fechaNaciInput, errorFecha,"La fecha no puede ser futura");
        return null;
    }

    let edad = hoy.getFullYear() - fecha.getFullYear();

    if (hoy.getMonth() < fecha.getMonth() || (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())){
        edad--;
    }

    //tiene que tener minimo 14 años
    if (edad < 14) {
        mostrarError(fechaNaciInput, errorFecha,"Debe tener al menos 14 años");
        return null;
    }

    quitarError(fechaNaciInput, errorFecha);
    return valor;
}

//VALIDAR ACTIVIDADES -> debe haber al menos una marcada
function validarActividades() {

    let actividadesSeleccionadas = [];

    //verificar que si esa pulsada se añada al array
    checks.forEach(check => {
        if (check.checked) {
            actividadesSeleccionadas.push(check.value);
        }
    });

    //si esta a 0 dar error 
    if (actividadesSeleccionadas.length === 0) {
        errorActividades.textContent ="Debes seleccionar al menos una actividad";
        return null;
    }

    errorActividades.textContent = "";

    return actividadesSeleccionadas;
}

//VALIDAR CUOTA --> Que no este vacia 
function validarCuota(){
    const valor = cuotaInput.value.trim();

    //no puede estar vacio
    if (valor === "") {
        mostrarError(cuotaInput, errorCuota,"La cuota no puede estar vacía");
        return null;
    }

    //quitamos error y devolvemos
    quitarError(cuotaInput, errorCuota);
    return parseFloat(valor);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * APARTADO 3.5 DE LA PRACTICA 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Calcula y muestra todas las estadísticas del club.
 */
/**
 * Muestra todas las estadísticas en pantalla.
 */
function mostrarEstadisticas(){

    document.getElementById("statTotal").innerHTML =
      "<h4>Total socios</h4><p>" + calcularTotalSocios() + "</p>";

    document.getElementById("statIngresos").innerHTML =
      "<h4>Ingresos mensuales</h4><p>" +
      calcularIngresosMensuales().toFixed(2) +
      " €</p>";

    document.getElementById("statCuotaMedia").innerHTML =
      "<h4>Cuota media</h4><p>" + calcularCuotaMedia().toFixed(2) + " €</p>";

    document.getElementById("statEdadMedia").innerHTML =
      "<h4>Edad media</h4><p>" + calcularEdadMedia().toFixed(1) + " años</p>";

    document.getElementById("statActividad").innerHTML =
      "<h4>Actividad popular</h4><p>" + actividadMasPopular() + "</p>";

    document.getElementById("statMenores").innerHTML =
      "<h4>Menores de edad</h4><p>" + (hayMenores() ? "Sí" : "No") + "</p>";

    document.getElementById("statEdadMin").innerHTML =
      "<h4>Edad mínima</h4><p>" + edadMinima() + " años</p>";

    document.getElementById("statEdadMax").innerHTML =
      "<h4>Edad máxima</h4><p>" + edadMaxima() + " años</p>";

    document.getElementById("statActividades").innerHTML =
      "<h4>Con actividades</h4><p>" +
      (todosConActividad() ? "Sí" : "No") +
      "</p>";

    mostrarVeteranos();

    mostrarDominios();
}

//CALCULAR EDAD --> 

function calcularEdad(fechaNacimiento){

    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if( hoy.getMonth() < nacimiento.getMonth() ||(hoy.getMonth() === nacimiento.getMonth() &&hoy.getDate() < nacimiento.getDate() )){
        edad--;
    }

    return edad;
}

//CALCULAR TOTAL DE SOICOS -> todos los guardados en el array
function calcularTotalSocios(){

    return socios.length;
}

//INGESOS MENSUALES --> total de ingresos mensuales 
function calcularIngresosMensuales(){

    let total = 0;

    for(let socio of socios){
        total += socio.cuota;
    }

    return total;
}

//CUOTA MEDIA --> entre la cantidad de socios y sus cuotas, tiramos de la funcion de ingresos mensuales 
function calcularCuotaMedia(){
    return calcularIngresosMensuales() / socios.length;
}

//EDAD MEDIA 
function calcularEdadMedia(){

    let suma = 0;

    for(let socio of socios){
        suma += calcularEdad(socio.fechaNacimiento);
    }

    return suma / socios.length;
}

//VERIFICA SI HAY ALGUN MENOR
function hayMenores(){

    for(let socio of socios){
        if(calcularEdad(socio.fechaNacimiento) < 18){
            return true;
        }
    }

    return false;
}

//ACTIVIDAD MAS POPULAR --> Revisa que actividad es la mas repetida entre los socios 
function actividadMasPopular(){

    let actividades = [];

    for(let socio of socios){
        for(let actividad of socio.actividades){

            if(actividades[actividad]){
                actividades[actividad]++;
            }else{
                actividades[actividad] = 1;
            }
        }
    }

    let mayor = 0;
    let actividadPopular = "";

    for(let actividad in actividades){

        if(actividades[actividad] > mayor){
            mayor = actividades[actividad];
            actividadPopular = actividad;
        }
    }

    return actividadPopular + " (" + mayor + ")";
}

//FUNCION MOSTRAR VETARANOS --> Saca los 3 socios mas veteranos del cluv
function mostrarVeteranos(){

    let lista = document.getElementById("listaVeteranos");

    lista.innerHTML = "";

    let copia = [];

    for(let socio of socios){

        copia.push(socio);
    }

    copia.sort(function(a,b){
        return new Date(a.fechaAlta) -new Date(b.fechaAlta);
    });

    for(let i = 0; i < 3; i++){
        lista.innerHTML +="<li>" + copia[i].nombre + " " +copia[i].apellidos +"</li>";
    }
}

//  FUNCION MUESTRA DOMINIOS --> Saca todos los dominios de coreos 
function mostrarDominios(){

    let lista = document.getElementById("listaDominios");

    lista.innerHTML = "";

    let dominios = [];

    for(let socio of socios){
        let dominio = socio.email.split("@")[1];
        
        if(!dominios.includes(dominio)){
            dominios.push(dominio);
        }
    }

    for(let dominio of dominios){
        lista.innerHTML +="<li>" + dominio + "</li>";
    }
}

//DEVUELVE LA EDAD MINIMA
function edadMinima(){

    let edadMin = calcularEdad(socios[0].fechaNacimiento);

    for(let socio of socios){

        let edadActual =
        calcularEdad(socio.fechaNacimiento);

        if(edadActual < edadMin){

            edadMin = edadActual;
        }
    }

    return edadMin;
}

//DEVUELVE LA EDAD MAXIMA 
function edadMaxima(){

    let edadMax = calcularEdad(socios[0].fechaNacimiento);

    for(let socio of socios){

        let edadActual =
        calcularEdad(socio.fechaNacimiento);

        if(edadActual > edadMax){

            edadMax = edadActual;
        }
    }

    return edadMax;
}

//TODOS CON ACTIVIDAD 
function todosConActividad(){

    for(let socio of socios){

        if(socio.actividades.length === 0){
            return false;
        }
    }
    return true;
}