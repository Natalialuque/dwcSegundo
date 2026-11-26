let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let boton = document.getElementById("botonPadre");

boton.addEventListener("click",enviarPadre);

function enviarPadre(e){
    e.preventDefault();//para que no de problemas

    //Abre la ventana padre, localiza en lugar donde escribir, mete los valores
    window.opener.document.getElementById("nombreApellidos").
                    textContent = nombre.value+" "+apellido.value;

    //sirve para cerrar  
    window.close();
}