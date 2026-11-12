
/**
 * CLASE EN LA QUE VAMOS A CREAR LA TARJETA DE SOCIO 
 */

//FUNCION MOSTRAR --> esta funcion alberga todos los datos del socio buscado mediante dni
function mostrarDatos(socio) {

    document.getElementById("nombre_Id").textContent =
        socio.nombre + " " + socio.apellidos + " (" + socio.id + ")";

    document.getElementById("dni").textContent =
        "DNI: " + socio.dni;

    document.getElementById("email").textContent =
        "Email: " + socio.email +
        " (dominio: " + obtenerDominio(socio.email) + ")";

    document.getElementById("telefono").textContent =
        "Teléfono: " + formatearTelefono(socio.telefono);

    document.getElementById("fechaNaci_Edad").textContent =
        fechaTexto(socio.fechaNacimiento) +
        " · " +
        calcularEdad(socio.fechaNacimiento) +
        " años";

    document.getElementById("FechaAlta_dias").textContent =
        formatearFecha(socio.fechaAlta) +
        " · " +
        diasEnClub(socio.fechaAlta) +
        " días en el club";

    document.getElementById("diasParaCumple").textContent =
        "Faltan " +
        diasParaCumple(socio.fechaNacimiento) +
        " días para su próximo cumpleaños";

    document.getElementById("actividades").textContent =
        "Actividades: " +
        socio.actividades.join(", ");

    document.getElementById("cuota").textContent =
        "Cuota mensual: " +
        socio.cuota.toFixed(2) +
        " €";
}

/**
 * FUNCIONES ADICIONALES PARA ESCRIBIR LOS DATOS DE FORMA CORRECTA 
 */

//email --> Email completo y su dominio: (dominio: correo.es)
function obtenerDominio(email) {
    return email.split("@")[1];
}

//telefono --> formateado a 3 
function formatearTelefono(telefono) {
    telefono = telefono.toString();

    return telefono.substring(0,3) + " " +telefono.substring(3,6) + " " +telefono.substring(6);
}

//Fecha de nacimiento --> en texto martes, 14 de marzo de 1995 
function fechaTexto(fecha){

    let fechaNac = new Date(fecha);

    let diasSemana = [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado"
    ];

    let meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    return diasSemana[fechaNac.getDay()] +
           ", " +
           fechaNac.getDate() +
           " de " +
           meses[fechaNac.getMonth()] +
           " de " +
           fechaNac.getFullYear();
}

//edad --> en numero
function calcularEdad(fechaNacimiento) {

    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    let mes = hoy.getMonth() - nacimiento.getMonth();

    if(mes < 0 ||
      (mes == 0 && hoy.getDate() < nacimiento.getDate())){

        edad--;
    }

    return edad;
}

//fecha alta --> Fecha de alta en formato dd/mm/aaaa 
function formatearFecha(fecha){

    let fechaAlta = new Date(fecha);

    let dia = fechaAlta.getDate();
    let mes = fechaAlta.getMonth() + 1;
    let año = fechaAlta.getFullYear();

    return dia + "/" + mes + "/" + año;
}

// días que lleva en el club.
function diasEnClub(fechaAlta){

    let alta = new Date(fechaAlta);
    let hoy = new Date();

    let diferencia = hoy - alta;

    return Math.floor(
        diferencia / (1000*60*60*24)
    );
}

//Cumple --> Dias que faltan para el cumpleaños 
function diasParaCumple(fechaNacimiento){

    let hoy = new Date();

    let cumple = new Date(fechaNacimiento);

    cumple.setFullYear(hoy.getFullYear());

    if(cumple < hoy){
        cumple.setFullYear(hoy.getFullYear()+1);
    }

    let diferencia = cumple - hoy;

    return Math.ceil(
        diferencia / (1000*60*60*24)
    );
}