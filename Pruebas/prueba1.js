//llamada de main principal
const main = document.getElementById("main1");

//creacion de boton con modulo
var newBoton = document.createElement("button");
newBoton.innerHTML="Hola";
newBoton.style.backgroundColor="red";

//añadirlo en el main 
main.appendChild(newBoton);

//para añadir eventos 
newBoton.addEventListener("click",function(){
    //alert("hemos pulsado el boton");

    if(newBoton.style.backgroundColor==="red"){
        newBoton.style.backgroundColor="white";
    }else{
        newBoton.style.backgroundColor="red";
    }

});

//SEGUNDA PRUEBA --> mostrar por consola el nombre de una variable
let nombre = "pepe";
console.log("nombre de "+nombre);

//
nombre = 5;
console.log("nombre de "+nombre);
