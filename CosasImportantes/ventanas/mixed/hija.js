let nombre = document.getElementById("nombre");
let codigo = document.getElementById("codigo");

let obtenerCodigo = document.getElementById("obtenerCodigo");
let boton = document.getElementById("botonPadre");


obtenerCodigo.addEventListener("click", ()=>{

    window.open(
        "nieta.html",
        "",
        "width=300,height=200"
    );
});

boton.addEventListener("click",envio);

function envio(){
    if (codigo.value == codigoGenerado){
        window.opener.document.getElementById("nombre").textContent=nombre.value;
         //sirve para cerrar  
        window.close();
    }else{
        alert("ERRO CODIGO ERRONEO");
    }

    
}