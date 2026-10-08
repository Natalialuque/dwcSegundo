//EJERCICIO 1 --> CREAR UN ARRAY BIDIMENSIONAL CON LA SIGUIENTE INFORMACIÓN 
//vamos pidiendo datos y los dejamos guardados en dicho array oara luego mostrarlo 

let ejer1 = document.getElementById("ejer1");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellidos");
let curso = document.getElementById("curso");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let notaFinal = document.getElementById("notaFinal");
let boton1 = document.getElementById("boton1");

boton1.addEventListener("click",bidimensional);

let array=[];

function bidimensional(){

    // Comprobar vacíos
    if(nombre.value == "" || apellido.value == "" ||curso.value == "" ||nota1.value == "" ||nota2.value == "" ||notaFinal.value == ""){
         ejer1.innerHTML = "NO PUEDE HABER DATOS VACÍOS";
    }

    // Comprobar que las notas son números
    else if(isNaN(Number(nota1.value)) ||isNaN(Number(nota2.value)) ||isNaN(Number(notaFinal.value))){
        ejer1.innerHTML = "LAS NOTAS DEBEN SER NÚMEROS";
    }

    // Comprobar mayúscula inicial
    else if(nombre.value[0] != nombre.value[0].toUpperCase() || apellido.value[0] != apellido.value[0].toUpperCase()){
        ejer1.innerHTML = "NOMBRE Y APELLIDO DEBEN EMPEZAR POR MAYÚSCULA";
    
    }else{
        //añadimos al array todos los valores 
        array.push(nombre.value);
        array.push(apellido.value);
        array.push(curso.value);
        array.push(nota1.value);
        array.push(nota2.value);
        array.push(notaFinal.value);

        //mostramos por pantalla
       ejer1.innerHTML = array;
    }

}


    

//EJER 2 --> DADOS DOS VALORES BINARIOS DEVOLVER EL RESULTADO DE LA XOR 
//pedimos los dos valores y sacamos resultado 
let valorA = document.getElementById("valorA");
let valorB = document.getElementById("valorB");
let boton2 = document.getElementById("boton2");
let ejer2 = document.getElementById("ejer2");

boton2.addEventListener("click",xor);

function xor(){
    //verificamos que los valores solo sean binarios
    if((valorA.value != "0" && valorA.value != "1") ||(valorB.value != "0" && valorB.value != "1")){
        ejer2.innerHTML = "LOS VALORES DEBEN SER BINARIOS";
    }
    //mostramos el valor 1 si son diferentes
    else if (valorA.value != valorB.value){
        ejer2.innerHTML = "1";
    }
    //mostramos valor 0 si son iguales 
    else{
        ejer2.innerHTML = "0";
    }
}


//EJER 3--> INTRODUCIMOS UN CANTIDAD EN € Y TENEMOS QUE PASARLA A YENES Y DOLARES 
let euro = document.getElementById("euro");
let boton3 = document.getElementById("boton3");
let ejer3 = document.getElementById("ejer3");

boton3.addEventListener("click",conversion);

function conversion(){

    if(isNaN(euro.value)){
        ejer3.innerHTML="EL VALOR INTRODUCIDO DEBE SER UN NUMERO"
    }else{
        let dolar = Number(euro.value) * 1.12;
        let yenes = Number(euro.value) * 178;

        ejer3.innerHTML= euro.value +" son :"+dolar+"$ y "+yenes+" ¥";

    }
}


//EJER 4--> SACAR EL AREA Y EL PERIMETRO DE UNA CIRCUNFERENCIA 
let radio = document.getElementById("radio");
let boton4 = document.getElementById("boton4");
let ejer4 = document.getElementById("ejer4");

boton4.addEventListener("click",areaPerimetro);

function areaPerimetro(){

    let area = 2 * Math.PI * Math.pow(radio.value,2);

    let perimetro = 2 * Math.PI * radio.value;

    ejer4.innerHTML= "El radio de la circunferencia es de :"+radio.value+", su area:"+area+" y su perimetro:"+perimetro;

}

//EJER 5 --> SACAR LOS VALORES PARES DE ENTRE DOS NUMEROS
let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");
let boton5 = document.getElementById("boton5");
let ejer5 = document.getElementById("ejer5");

boton5.addEventListener("click",pares);

function pares (){
    if(par1.value<-100 || par2.value > 5000){
        ejer5.innerHTML="<p color=red>ERROR EL PRIMER VALOR DEBE SER MAYOR A -100 Y EL SEGUNDO MENOR A 5000</p>"
    }else if(isNaN(par1.value) || isNaN(par2.value)){
        ejer5.innerHTML="<p color=red>ERROR NO HAS INTRODUCIDO NUMEROS</p>"
    }else{
         let array=[];
        for(let i = parseInt(par1.value);i<=parseInt(par2.value);i++){
            if(i%2===0){
                array.push(i);
            }
        }
        ejer5.innerHTML=array.join(",");
    }
}

//EJER 6 --> SACAR SUMA + RESTA + DIVISION + MULTIPLICACION + RESTO // RECORDAR QUE NO SE PUEDE DIVIDIR POR 0
// let num1 = document.getElementById("num1").value;
// let num2 = document.getElementById("num2").value;
let boton6 = document.getElementById("boton6");
let ejer6 = document.getElementById("ejer6");

boton6.addEventListener("click",operaciones);

function operaciones(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let suma;
    let resta;
    let division;
    let resto;
    let multiplicacion;

    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;

    if(num2==0){
        division = "no se puede dividir";
        resto= "no se puede dividir";
    }else{
        division = num1/num2;
        resto= num1%num2;
    }
    
    ejer6.innerHTML="SUMA:"+suma+"<br>RESTA:"+resta+"<br>MULTIPLICACION:"+multiplicacion+"<br>DIVISION:"+division+"<br>RESTO:"+resto;

}

//EJER 7 --> 

//EJER 8 --> 

//EJER 9 --> 

//EJER 10 --> 

//EJER 11 --> 

//EJER 12 --> 

//EJER 13 --> 

//EJER 14 --> 

//EJER 15 --> 

//EJER 16 --> 

//EJER 17 --> 

//EJER 18 -->

//EJER 19 --> 

//EJER 20 -->  