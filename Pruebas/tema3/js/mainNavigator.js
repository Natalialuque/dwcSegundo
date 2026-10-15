/**
 * objeto navigator 
 */
const h21 = document.getElementById("h21");

let navigatorObject = new Object({
    userAgent: navigator.userAgent, //informacion sobre el navegador 
    language: navigator.language, //lenguaje del navegador
    platform : navigator.platform, //para ver el sistema
    conectado : navigator.onLine,
    permitencookies : navigator.cookieEnabled,
    cpu : navigator.hardwareConcurrency,
    ram: navigator.deviceMemory

    
});


// h21.innerHTML="navegador y sistema: "+navigatorObject.userAgent +"<br><br>"+
//             "Lenguaje:"+navigatorObject.language+"<br><br>"+
//             "Sistema ope:"+navigatorObject.platform+"<br><br>"+
//             "Conectado a:"+navigatorObject.conectado+"<br><br>"+
//             "Se permiten cookies:"+navigatorObject.permitencookies+"<br><br>"+
//             "CPU:"+navigatorObject.cpu+"<br><br>"+
//             "RAM:"+navigatorObject.ram;


/**
 * Objeto Screen 
 */
//muestran lo mismo 
 //h21.innerHTML = `Ancho total: ${screen.width}, Alto total: ${screen.height} <br>`;
// h21.innerHTML += `Ancho disponible: ${screen.availWidth}, Alto disponible: ${screen.availHeight} <br>`;

// h21.innerHTML += `Número de bits para colores: ${screen.colorDepth}<br>`
// h21.innerHTML += `Orientación de la pantalla: ${screen.orientation.angle} grados<br>`
// h21.innerHTML += `Primera posición izquierda disponible: ${screen.availLeft}<br>`


/**
 * hazme aplicacion que me diga si pi pantalla esta tumbada o levantada
 */

h21.innerHTML=posicion();

function posicion (){

    let resultado ="";

    if(screen.height<screen.width){
        resultado+="Pantalla horizontal";
    }else{
        resultado+="pantalla vertical";
    }

    return resultado;
}
