const info = document.getElementById("h1");
const login = document.getElementById("login");
const mail = document.getElementById("mail");
const boton = document.getElementById("boton");


//devuelve el nombre del dominio
info.innerHTML+= location.host;

//Lo mismo que el anterior sin el puerto 
info.innerHTML +="<br>"+location.hostname;

//Url completa de nuestro proyecto 
info.innerHTML += "<br>"+location.pathname;

//protocolo que seguimos 
info.innerHTML+="<br>"+location.protocol;

//url completa 
info.innerHTML+="<br>"+location.origin;


//devuelve la url completa pero esta de escritura 
//Con esto podemos modificar la url que abrimos de nuestro programa, en este caso he cambiado y estoy abriendo 
//location.href="https://educacionadistancia.juntadeandalucia.es/centros/malaga/pluginfile.php/267310/mod_resource/content/1/Objetos%20en%20JavaScript.pdf";
//location.assign("https://educacionadistancia.juntadeandalucia.es/centros/malaga/pluginfile.php/267310/mod_resource/content/1/Objetos%20en%20JavaScript.pdf");
//info.innerHTML+="<br>"+location.href;

//Cambiamos de una ruta a otra
boton.onclick=function(){
    location.assign("http://127.0.0.1:5500/Pruebas/tema3/js/mainLocation/usuarios.html");
}