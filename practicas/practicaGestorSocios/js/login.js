/**
 * VARIABLES
 */
let nombreUsuario = document.getElementById("nombreUsuario");
let contraseña = document.getElementById("contraseña");
let botonInciarSesion = document.getElementById("botonIniciarSesion");
let errorNombre = document.getElementById("errorNombre");
let errorContraseña = document.getElementById("errorContraseña");



botonInciarSesion.addEventListener("click",enviarInforma);

/**
 * funcion que envia la infromacion a la padre para que aparezca el usu
 */
function enviarInforma(){

     let usuarioValidado = validaNombre();
    let contraseñaValida = validaContraseña();

    if(usuarioValidado && contraseñaValida){

        // Enviar el usuario a la ventana padre
        window.opener.document
              .getElementById("inicioLogin")
              .textContent = usuarioValidado;

        // Cerrar la ventana login
        window.close();
    }
}


/**
 * Funcion para validar el nombre de usuario
 */
function validaNombre(){
let nombre = nombreUsuario.value.trim();

const patron = /^[A-Za-z]{4}[0-9]{2}$/

    if(nombre === ""){
        mostrarError(nombreUsuario,errorNombre,"nombre no puede estar vacio");
        return null;
    }

    if(!patron.test(nombre)){
        mostrarError(nombreUsuario,errorNombre,"El nombre debe tener 4 letras y 2 numeros");
        return null;
    }

    quitarError(nombreUsuario,errorNombre);
    return nombre;
}
/**
* FUncion para validar la contraseña
*/
function validaContraseña(){
    let password = contraseña.value.trim();

    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#-])[A-Za-z\d@$!%*?&._#-]{8,}$/;

    if(password === ""){
        mostrarError(contraseña,errorContraseña,"contraseña no puede estar vacio");
        return null;
    }

    if(!patron.test(password)){
        mostrarError(contraseña,errorContraseña,"DEBE tener mayusculas, minusculas, numeros, caracteres especiales y minimo 8 caracteres");
        return null;
    }

    quitarError(contraseña,errorContraseña);
    return password;
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