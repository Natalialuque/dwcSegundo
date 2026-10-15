/EJERCICIO CAFE/

//variables 
let tipoCafe = document.getElementById("tipoCafe");
let cantidad = document.getElementById("cantidad");
let paraLlevar = document.getElementById("paraLlevar");
let botonProcesarPedido= document.getElementById("procesarPedido");
let resultado = document.getElementById("resultado");


//cuando se pulse boton
botonProcesarPedido.addEventListener("click",calculo);

function calculo(){

    let resul = 0;

    //Switch 
    switch(tipoCafe.value){

        case "solo":
            resul = 1.5;
            break;

        case "leche":
            resul = 2;
            break;

        case "capuchino":
            resul = 2.5;
            break;
    }

    //Multiplicar por cantidad
    resul = resul * cantidad.value;

    //Suplemento para llevar
    if(paraLlevar.checked){
        resul += 0.20 * cantidad.value;
    }

    //Descuento
    if(cantidad.value > 5){
        resul = resul - (resul * 0.10);
    }

    //muestra del resultado final
    resultado.innerHTML = resul + " €";
}