
// Catálogo de servicios: el id coincide con el id del input del HTML
const SERVICIOS = [
  { id: "aceite", nombre: "Cambio de aceite", precio: 45 },
  { id: "filtros", nombre: "Cambio de filtros", precio: 30 },
  { id: "frenos", nombre: "Pastillas de freno (eje)", precio: 80 },
  { id: "neumaticos", nombre: "Neumático", precio: 70 },
  { id: "alineado", nombre: "Alineado de dirección", precio: 35 }
];


//LLamamos a las variables 
let cliente = document.getElementById("cliente");
let matricula = document.getElementById("matricula");
let vehiculo = document.getElementById("vehiculo"); //un option value
let aceite = document.getElementById("aceite"); 
let filtros = document.getElementById("filtros"); 
let frenos = document.getElementById("frenos"); 
let neumaticos = document.getElementById("neumaticos"); 
let alineado = document.getElementById("alineado"); 
let pago = document.getElementById("pago"); //un option
let btnPresupuesto = document.getElementById("btnPresupuesto"); 
let btnLimpiar = document.getElementById("btnLimpiar"); 
let mensaje = document.getElementById("mensaje"); //texto de confirmacion 
let presupuesto = document.getElementById("presupuesto"); //texto que muestras nombre, presupuesto, descuento
let total = document.getElementById("total"); //resultado total del presupuesto



//Pulsamos boton presupuesto 
btnPresupuesto.addEventListener("click",presu);

//funcion que saca el presupuesto 
function presu(){

  //variable para el resultado total de dinero
  let resultadoTotal = 0;

    /**
     * COMPROBACIONES
     */

    if(cliente.value===""){
      mensaje.innerHTML="ERROR, campo de nombre vacio";
      presupuesto.innerHTML="";
    }else{
      mensaje.innerHTML="";
    }

    //matricula 7 digitos 
    if(matricula.value<7 && matricula.value===""){
        mensaje.innerHTML="ERROR, la matricula debe tener 7 caracteres y estar completa";
         presupuesto.innerHTML="";
    }else{
      mensaje.innerHTML="";
    }

    //debe estar selecionado tipo de vehiculo y forma de pago 
    if(vehiculo.value===""){
        mensaje.innerHTML="ERROR, debes selecionar vechiculo";
         presupuesto.innerHTML="";    
    }

    if(pago.checked===""){
      mensaje.innerHTML="ERROR, debes selecionar pago";
       presupuesto.innerHTML="";
    }
    


    //con esto podemos sacar la base del presupuesto, los sumamos todos 
    let multi = multii();
    let base = ((aceite.value * 45 * multi) + (filtros.value * 30 +multi)
            + (frenos.value * 80 * multi) + (neumaticos.value * 70 * multi) +
            (alineado.value * 35 * multi));
    
    //console.log(base);

    //vamos a sacar los descuentos de si superar x tanto
    let descuento =0;
    if(base >= 300){
      descuento += base*0.10;
      base = base - descuento;
    }
    else if(base > 150){
      descuento += base*0.05;
      base = base - descuento;
    }
    
   // console.log(base); 

    //Debemos de aplicar el aumneto del 5% si se financia
    let recargo=0;
    if(pago.value === "financiado"){
      recargo += base*0.05;
      base = base + recargo;
      
    }

    //Por ultimo tenemos que aplicar un 21% al resultado final 
    let iva = base * 0.21;
    resultadoTotal += base + iva;
    // console.log(resultadoTotal);

    //Mostramos el resultado total
    total.innerHTML= resultadoTotal+" €";

    //Mostramos los datos del presupuesto, tofixed lo usamos para sacar los decimales
    presupuesto.innerHTML = "Nombre: "+cliente.value +"-Matricula:"+matricula.value+"<br>"+
                            "Base del presu"+base.toFixed(2)+"€"+"<br>"+
                            "Descuento del presu:"+descuento.toFixed(2)+"€"+"<br>"+
                            "Recargo por pago:"+recargo.toFixed(2)+"€"+"<br>"+
                            "Iva del 21%"+ iva.toFixed(2) +"€";
    

}

// Multiplicador por tipo de vehículo. Hacemos una funcion con switch para dependiendo de donde pase
function multii(){
  let op = vehiculo.value;

    let resul=0;
  switch(op){
    case "moto":
      resul = 0.7;
      break;
    case "turismo":
      resul= 1;
      break;
    case "suv":
      resul= 1.2;
      break;
    case "furgoneta":
      resul= 1.35;
      break;
  }
  return resul;
}

//funcion para comprobar lo de los numeros
function comprobar (){
  //aceite
   if(aceite.value<0 && aceite.value>4){
    mensaje.innerHTML="ERROR, no puede ser menor que 0 ni mayor que 4"
   }
   //filtros
   if(filtros.value<0 && filtros.value>4){
    mensaje.innerHTML="ERROR, no puede ser menor que 0 ni mayor que 4"
   }
   //frenos
   if(frenos.value<0 && frenos.value>4){
    mensaje.innerHTML="ERROR, no puede ser menor que 0 ni mayor que 4"
   }
   //vehiculo, teniendo en cuenta moto
   if(vehiculo.value==="moto"){
      if(neumaticos.value<0 && neumaticos.value>2){
        mensaje.innerHTML="ERROR, no puede ser mayor que 2"
      }
   }else{
        mensaje.innerHTML="ERROR, no puede ser menor que 0 ni mayor que 4"
   }
   //alineado
   if(alineado.value<0 && alineado.value>4){
    mensaje.innerHTML="ERROR, no puede ser menor que 0 ni mayor que 4"
   }
}


