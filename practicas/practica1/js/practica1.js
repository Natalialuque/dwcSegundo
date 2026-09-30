const btnCalcular = document.getElementById("btnCalcular");
const btnError = document.getElementById("btnError");
let resultados = document.getElementById("resultado");

btnCalcular.addEventListener("click", iniciarCalculo);
btnError.addEventListener("click", provocarError);


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


function calcularDescuento(precio) {
  let descuento = obtenerPorcentaje();
  // Error de lógica intencionado
  let precioFinal = precio - descuento;
  return precioFinal;
}


function obtenerPorcentaje() {
  let porcentaje = 20;
  for (let i = 0; i < 3; i++) {
    console.log("Iteración:", i);
  }
  return porcentaje;
}


function provocarError() {
  throw new Error("Error provocado para la práctica");
}
