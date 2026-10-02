/**
 * implementar un script en el que alguno de los datos numeros es 0 o negativo de error 
 */
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resultadoSuma = document.getElementById("resultadoSuma");
let botonSumar=document.getElementById("botonSumar");

botonSumar.addEventListener("click",function(){
try {
   if(n1.value ==""){
    throw new Error ("error en ni"+{cause:"cadena vacia"});
   }
    if(isNaN(n1.value)){
    throw new Error ("error en ni"+{cause:"no es numero"});
   }
     if((typeof n1.value=="number") && (n1.value<0)){
    throw new Error ("error en ni"+{cause:"Valor negativo"});
   }
}
catch (err) {
    resultadoSuma.innerHTML=err+"-"+err.cause;
}
});

/*************************FUNCTION*********************** */
//Para ahorrarnos codigo de la funcion principal hacemos subfunciones 
function errorFilter(data){

}


/**-------------------------------------------------------------------------------------------------------JOSELU  */
document.getElementById("btnSumar").addEventListener("click", function () {
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;

    try {
      errorFilter(in1);
      errorFilter(in2);
      alert ("Resultado: " + (parseFloat(in1)+parseFloat(in2)));
    }
    catch (err) {
        document.getElementById("pError").innerHTML = err + ":" + err.cause;
    }
})

/************** FUNCTIONS *****************************************************/
/**
 * Comprueba si el dato que se pasa es un número positivo. Ejecutar siempre dentro de try - catch
 * @param valor a filtrar
 */
function errorFilter(data) {
    if (data == "")            
        throw new Error("Error en dato", {cause:"Cadena vacía"});

    data = parseFloat(data);

    if (isNaN(data))
        throw new Error ("Error en dato", {cause:"No es un número"})

    if (data < 0)
        throw new Error ("Error en dato", {cause:"Valor negativo"})
}