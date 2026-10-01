/**Variables de la clase index.html */
const btnCalcular = document.getElementById("btnCalcular");
const btnError = document.getElementById("btnError");
let resultados = document.getElementById("resultado");

/**Lo que hace el boton al clicarlo */
btnCalcular.addEventListener("click", iniciarCalculo);
btnError.addEventListener("click", provocarError);

/**Funcion de iniciar calculo donde tenemos el precio, varios console.log 
 * y llamamos a otra funcion para hacer concatenacion de ellas  */
function iniciarCalculo() {
  let precio = 200;

  console.log("Iniciando cálculo del descuento");

  console.warn(
    "Se va a utilizar un cálculo con un error de lógica intencionado",
  );

  console.table([
    {
      precioOriginal: precio,
      descuento: "20%",
    },
  ]);

  let resultado = calcularDescuento(precio);

  resultados.innerHTML= resultado + " €";
}

/**Funcion para realizar el descuento */
function calcularDescuento(precio) {
  let descuento = obtenerPorcentaje();
  // Error de lógica intencionado
  let precioFinal = precio - descuento;
  return precioFinal;
}

/**Funcion para obtención del porcentaje */
function obtenerPorcentaje() {
  let porcentaje = 20;
  for (let i = 0; i < 3; i++) {
    console.log("Iteración:", i);
  }
  return porcentaje;
}

/**Funcion para poder provocar un error */
function provocarError() {
  throw new Error("Error provocado para la práctica");
}
