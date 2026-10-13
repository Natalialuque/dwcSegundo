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

//EJER 7 --> SACAR LA MEDIA ARTIRMETICA OBTENIENDO UNA CADENA DE STRING
let boton7 = document.getElementById("boton7");
let ejer7 = document.getElementById("ejer7");

boton7.addEventListener("click",notas);

function notas(){
    //llamamos a las variables 
    let nota11 = parseFloat(document.getElementById("nota11").value);
    let nota22 = parseFloat(document.getElementById("nota22").value);
    let nota33 = parseFloat(document.getElementById("nota33").value);

    //sacamos la media aritmetica 
    let media = (nota11+nota22+nota33)/3;
    //console.log(media);

    //Hacemos las comparaciones
    if(media<5){
        ejer7.innerHTML="suspenso";
    }else if(media<7){
        ejer7.innerHTML="bien";
    }else if(media<=8.5){
        ejer7.innerHTML="notable";
    }else{
        ejer7.innerHTML="sobresaliente";
    }

    //SWITCH
    // switch (true) {
    // case (media < 5):
    //     ejer7.innerHTML = "suspenso";
    //     break;

    // case (media < 7):
    //     ejer7.innerHTML = "bien";
    //     break;

    // case (media <= 8.5):
    //     ejer7.innerHTML = "notable";
    //     break;

    // default:
    //     ejer7.innerHTML = "sobresaliente";
}
  

//EJER 8 --> PIRAMIDE DEL 1 AL 50 (1-22-333-4444-55555-666666...)
let boton8 = document.getElementById("boton8");
let ejer8 = document.getElementById("ejer8");

boton8.addEventListener("click",piramide50);

function piramide50(){

    let resultado = "";

    for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += i;
        }
        resultado += "<br>";
    }
    ejer8.innerHTML = resultado;
}

//EJER 9 --> PIRAMIDE DEL 1 AL 50 (1-12-123-12134-123456)
let boton9 = document.getElementById("boton9");
let ejer9 = document.getElementById("ejer9");

boton9.addEventListener("click",piramide50_2);

function piramide50_2(){
    let resultado = "";

    //Bucle anidado para sacar una piramide de numeros poner j hace que coja los numeros en orden
    for (let i = 1; i <= 50; i++) {
        for (let j = 1; j <= i; j++) {
            resultado += j;
        }
        resultado += "<br>";
    }
    ejer9.innerHTML = resultado;
}

//EJER 10 --> FUNCION ARROW 
let boton10 = document.getElementById("boton10");
let ejer10 = document.getElementById("ejer10");


boton10.onclick = ()=>{
    let numArrow = document.getElementById("numArrow").value;

    if(numArrow%2===0){
        ejer10.innerHTML="El numero "+numArrow+" es par";
    }else{
        ejer10.innerHTML="El numero "+numArrow+" es impar";
    }
}

//EJER 11 --> JUEGO DEL PUM QUE MODIFICA LOS MULTIS DE 7 Y LOS TERMINADO EN 7
let boton11 = document.getElementById("boton11");
let ejer11 = document.getElementById("ejer11");

boton11.onclick=function(){

    //para guardar el resultado
    let resultado = "";
    //recorremos bucle
    for(let i =1;i<=100;i++){
        //si es siete o multiplo ponemos PUM y saltamos 
        if (i % 7 === 0 || i % 10 === 7) {
            resultado+= "PUM\n"; 
    }//si no mostramos resultado normal 
    else {
            resultado += i + ", ";
        }
    }

    ejer11.innerHTML = resultado;
}

//EJER 12 --> APLICACION QUE GENERA 300 NUMEROS,PARTE FILA CADA 10, LOS MULTIPLOS DE 4 LOS MUESTRA MAS GRANDES Y EN VERDE, LOS DE 9 MAS GRANDES Y EN ROJOS
let boton12 = document.getElementById("boton12");
let ejer12 = document.getElementById("ejer12");

boton12.onclick=function(){

    for (let i = 1; i <= 300; i++) {

    let span = document.createElement("span");
    span.textContent = i + " ";

    // Múltiplos de 4
    if (i % 4 === 0) {
        span.style.color = "green";
        span.style.fontSize = "20px"; 
    }

    // Múltiplos de 9
    if (i % 9 === 0) {
        span.style.color = "red";
        span.style.fontSize = "18px"; 
    }

    ejer12.appendChild(span);

    // Salto de línea cada 10 números
    if (i % 10 === 0) {
        ejer12.appendChild(document.createElement("br"));
    }
}
}

//EJER 13 --> SUMA DE DOS DADOS GUARDADAS EN UN ARRAY REPETIDO 36000
let boton13 = document.getElementById("boton13");
let ejer13= document.getElementById("ejer13");

boton13.onclick=function(){

    //podriamos usar fill pero no lo hemos visto
    let apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i=1;i<=36000;i++){
    
        //dados creados
        let dado1 = Math.floor(Math.random()*6+1);
        let dado2 = Math.floor(Math.random()*6+1);

        //2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 POSIBLES RESULTADOS DE LA SUMA
       let suma = dado1+dado2;

        //metemos la suma en el array
        apariciones[suma]++;

    }

    //bucle para recorrer los resultados de las sumas
    for (let i = 2; i <= 12; i++) {

        ejer13.innerHTML+= "la suma "+i+" ha aparecido "+apariciones[i]+" veces <br>";
    }
}


//EJER 14 --> INTRODUCIMOS NUMEROS HASTA FINALIZAR
let numero = document.getElementById("numeroInput");
let boton14 = document.getElementById("boton14");
let ejer14 = document.getElementById("ejer14");

let numeros = []; //aray para guardar numeros

boton14.onclick = function () {
    let valor = parseInt(numero.value);//valor del numero

    if (valor === 0) { //si metemos 0 mostramos los resultado
        mostrarResultados();
        return;
    }

    numeros.push(valor);//vamos metiendo los numeros en el array
    numero.value = "";
    numero.focus();
};

//esta funcion saca los mayores/menores, los numeros ordenados, los numeros en general
function mostrarResultados() {

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let ocurrencias = {};

    for (let num of numeros) {
        ocurrencias[num] = (ocurrencias[num] || 0) + 1;
    }

    ejer14.innerHTML = "Orden normal:"+numeros.join(", ")+"<br>"+
        "Orden descendente:"+[...numeros].sort((a,b)=>b-a).join(", ")+"<br>"+
        "Número mayor: "+mayor+ocurrencias[mayor] +"(veces)<br>"+
        "Número menor: "+menor + ocurrencias[menor] +"(veces)";
}

//EJER 15 --> INTRODUCIR UN ARRAY E INVENTIRLO
let boton15 = document.getElementById("boton15");
let ejer15_1 = document.getElementById("ejer15_1");
let ejer15_2 = document.getElementById("ejer15_2");

let arrayBase = [4,5,"hola",8.6, true, {marca: "Ford", matricula: "123456A"},9]; //guardamos el array con diferentes

boton15.onclick=function(){
    //este bucle muestra el array normal sin inversiones
    for(let i = 0; i < arrayBase.length; i++){
        if(typeof arrayBase[i] === "object"){
        ejer15_1.innerHTML += "{marca:"+ arrayBase[i].marca + " matricula:  " + arrayBase[i].matricula + "} ";
        }else{
        ejer15_1.innerHTML += arrayBase[i] + ", ";
        }
    }
    //este bucle lee el array al reves y lo muestra
    for(let i=arrayBase.length-1; i>=0;i--){
       if(typeof arrayBase[i] === "object"){
        ejer15_2.innerHTML += "{marca:"+ arrayBase[i].marca + " matricula:  " + arrayBase[i].matricula + "} ";
        }else{
        ejer15_2.innerHTML += arrayBase[i] + ", ";
        }
    }
}


//EJER 16 --> GENERAR UNA CONTRASEÑA DE X BYTES 
let boton16 = document.getElementById("boton16");
let ejercicio16 = document.getElementById("ejercicio16");
let contraseña = document.getElementById("contraseña");

boton16.onclick=function(){

    let resultado="";

    //verificamos 
    if (isNaN(contraseña.value) || contraseña.value <= 0) {
    alert("Por favor, introduce una longitud válida mayor que 0.");
    return;
    }

    //caracteres de la generacion de contraseña
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?/|";

    //recorremos el bucle con la cantidad de caracteres
    for (let i = 0; i < contraseña.value; i++) {
        //generamos los aleatorios conforme a la cantidad de caracteres
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indice];
  }

  ejercicio16.innerHTML = resultado;
}

//EJER 17 --> 

//EJER 18 -->

//EJER 19 --> 

//EJER 20 --