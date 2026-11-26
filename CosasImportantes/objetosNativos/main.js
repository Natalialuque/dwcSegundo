//PRUEBAS DE STRING 

let texto = "hola buenos, dias como estas";

console.log(texto.length);
console.log(texto.charAt(2));
console.log(texto.indexOf("a"));
console.log(texto.replace("buenos","viejos"));
console.log(texto.split(","));
console.log(texto.slice(2,5));

///////////////////////////////////////////
console.log("----------------------------");
let array = ["buenos dias", "señorita", 80, true];

array.push("hola");
array.unshift("adios");

console.log(array);

array.pop();
array.shift();

console.log(array);
console.log(array.length);
console.log(array.indexOf("señorita"));
console.log(array.includes(80));
console.log(array.at(2));
console.log(
    array.find(elemento => elemento === true)
);
console.log(
    array.filter(elemento => typeof elemento === "string")
);
console.log(
    array.map(elemento => elemento + "!")
);
console.log(
    [30, 10, 20].sort()
);
////////////////////////////////////////
console.log("----------------------------");
let fecha = new Date();

console.log(fecha);

console.log(fecha.getDate());      // Día del mes
console.log(fecha.getDay());       // Día de la semana
console.log(fecha.getMonth());     // Mes (0-11)
console.log(fecha.getFullYear());  // Año
console.log(fecha.getHours());     // Hora
console.log(fecha.getMinutes());   // Minutos
console.log(fecha.getSeconds());   // Segundos

console.log(fecha.getTime());      // Milisegundos desde 1/1/1970

console.log(fecha.toDateString());       // Fecha legible
console.log(fecha.toLocaleDateString()); // Fecha local
console.log(fecha.toLocaleTimeString()); // Hora local
console.log(fecha.toString());           // Fecha completa
////////////////////////////////////////
console.log("----------------------------");
let numero = 123.456789;

console.log(numero.toFixed(2));
console.log(numero.toPrecision(4));
console.log(numero.toString());
console.log(Number.isNaN(numero));
console.log(Number.isFinite(numero));