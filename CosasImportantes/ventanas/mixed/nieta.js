let numeroAleatorio = document.getElementById("numAleatorio");

let codigo = Math.floor(
    1000 + Math.random()*9000
);

numeroAleatorio.innerHTML=codigo;

//guardamos el codigo para la hija 
window.opener.codigoGenerado = codigo;

//paa cerrar 
setTimeout(() => {
window.close();
}, 5000);