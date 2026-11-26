let nombre = document.getElementById("nombre");
let botonLogin = document.getElementById("botonPadre");

botonLogin.addEventListener("click",logeo);

function logeo(){
   //solo debe abrir la hija 
     window.open(
        "hija.html",
        "HIJA",
        "width=700,height=700"
     )
}
