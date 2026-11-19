let divs = document.getElementsByTagName("div");

for (let div of divs) {
    div.addEventListener("click", ocultar);
    div.addEventListener("mouseenter", ocultar);
    div.addEventListener("mouseleave", ocultar);
}

/**
 * Función con la cual estamos controlando el tipo de evento que le llega, si lo clica
 * se oculta, si el cursor pasa por encima se muestra, si se va se vuelve a ocultar
 * @param {*} e 
 */
function ocultar(e) {

    let h1Local = this.querySelector("h1");

    switch (e.type) {
        case "click":
            h1Local.style.visibility = "hidden"
            break;
        case "mouseenter":
            h1Local.style.visibility = "visible"
            break;
        case "mouseleave":
            h1Local.style.visibility = "hidden";
            break;
        default:
            break;
    }
}

const info = document.getElementById("info");

/**
 * Función para comprobar que teclas se presionan, con alt+n la reseteamos mi parrafo pero con 
 * ctrl+n no podriamos ya que es una funcion de chrome
 */
// document.addEventListener("keydown", (e)=>{
//     e.preventDefault();
//     info.innerHTML += "Tipo: " + e.type + " Tecla pulsada: " + e.key +  " Código:" + e.code + "<br>";
//     if (e.code == "KeyN" && e.altKey) {
//         info.textContent = "";
//     }
//     if (e.key == "KeyN" && e.ctrlKey) {
//         info.textContent = "";
//     }
// });

// infoRaton = document.getElementById("infoRaton");

// document.addEventListener("mousemove", (e) =>{
//     e.preventDefault();
//      infoRaton.innerHTML = "Coordenada X: " + e.clientX + " Coordenada Y: " + e.clientY; 
// });


/**
 * 
 */
login = document.getElementById("login");
contraseña = document.getElementById("contraseña");
botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click",noEnviarDatos);

function noEnviarDatos(){

}