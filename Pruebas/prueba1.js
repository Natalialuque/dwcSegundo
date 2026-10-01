//llamada de main principal
    // const main = document.getElementById("main1");

//creacion de boton con modulo
    // var newBoton = document.createElement("button");
    // newBoton.innerHTML="Hola";
    // newBoton.style.backgroundColor="red";

//añadirlo en el main 
    // main.appendChild(newBoton);

//para añadir eventos 
    // newBoton.addEventListener("click",function(){
    //     //alert("hemos pulsado el boton");

    //     if(newBoton.style.backgroundColor==="red"){
    //         newBoton.style.backgroundColor="white";
    //     }else{
    //         newBoton.style.backgroundColor="red";
    //     }

    // });

//SEGUNDA PRUEBA --> mostrar por consola el nombre de una variable
    // let nombre = "pepe";
    // console.log("nombre de "+nombre);

    // //
    // nombre = 5;
    // console.log("nombre de "+nombre);

//
// nombre = true;
// console.log(nombre);

/**
 * Declaramos las variables
 * las variables var son globales
 * let es local al bloque en el que se crea
 */
        // let a = 5;
        // var b = 10;
        // var c = 20;

        // console.log("Valor de a: " + a + " valor de b: " + b );

        // if (a < 10) {
        //     showA();
        // }


//funciones
        // function showA(){
        //     console.log("El valor de a es menor de 10 es: " + a)
            
        // }

        // console.dir("hola");

/**funcion concatenacion de sumas  */
// var d=5;
// document.getElementById("numeroCarrito").addEventListener("input",function(){
//     a+=parseInt(this.value);
//     console.log(d);
// })

/**Array de literales */
// var alumno = ["pepe",true,5.67,null,{name:"ana",curso:"2daw"},[7,8,9.5]];
// console.log(alumno);


/**
 * le pongo value en el js al campo texto 
 */
//document.getElementById("iti1").value="Hola";

//let b= hola;

/**
 * Switch
 */
        // switch(nota){
        //     case 1: 
        //     case 2:
        //     case 3:
        //         console.log("muy mal"); 
        //         break;
        //     case 4:
        //     case 5: 
        //     case 6:
        //         console.log("mal"); 
        //         break;
        //     case 7: 
        //     case 8:
        //     case 9: 
        //         console.log("bien"); 
        //         break;
        //     case 10:
        //         console.log("muy bien"); 
        //         break;
        // }

/**condiciones con ifff */
const nota = Math.random()*10+1;
        // console.log(nota);

        // if(nota<=3 ){
        //     console.log("muy mal");
        // }
        // else if(nota<=6){
        //     console.log("mal")
        // }
        // else if(nota<=9){
        //     console.log("bien");
        // }
        // else{
        //     console.log("muy bien");
        // }

/**
 * funcion que sume 
 */


// function SUMA(a,b){
//      return a +b;
// }

// let resultado= SUMA(4,5);

// console.log(resultado);


/**
 * 
 */
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resultadoSuma = document.getElementById("resultadoSuma");
let botonSumar=document.getElementById("botonSumar");

botonSumar.addEventListener("click",doSUma);

function doSUma(dato_1,dato_2){
    //para poder colocar un dato u otro, teniendo el primero preferencia 
    let a = dato_1 || parseFloat(n1.value);
    let b = dato_2 || parseFloat(n2.value);

    let result = 0;

    if((typeof a =="number") && (typeof b=="number")){
        result = a+b;
        resultadoSuma.innerHTML=result;
        n1.value="0";
        n2.value="0";
    }else{
                resultadoSuma.innerHTML="valores no validos para la suma";

    }



}