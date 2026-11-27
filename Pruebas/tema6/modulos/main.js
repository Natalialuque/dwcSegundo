//CON ESTO IMPORTAMOS 
//las funciones por defecto van siempre fuera de las llaves 
import {saludar,edad,Usuario as User} from "./modules/usuarios.js";

const info = document.getElementById("info");

// info.innerHTML=saludar("pepe") + " "+ edad+" ";
// info.innerHTML+=muestraPassword();


//AL PUSLAR EL BOTON SE HAGA INPORTACION POR DEFECTO 
// document.getElementById("btn1").addEventListener("click", async function () {
//     const usuarios = await import("./modules/usuarios.js");
//     info.innerHTML = `tu contraseña es ${usuarios.default()}`
// })


/////////////
var user1 = new User("Pepe", "Ordoñez");
var user2 = new User();

info.innerHTML = `Usuario ${user1.nombre} ${user1.apellidos} creado correctamente con password ${user1.password}.`;
info.innerHTML += `<hr>Usuario ${user2.nombre} ${user2.apellidos} creado correctamente con password ${user2.password}.`;