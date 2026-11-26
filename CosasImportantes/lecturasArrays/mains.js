let notas = [5, 8, 10, 7];

for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")

let nombres = ["Ana", "Pepe", "Laura"];

for(let nombre of nombres){
    console.log(nombre);
}

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")

let aprobados = [true, false, true];

aprobados.forEach(valor => {
    console.log(valor);
});

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")

let alumnos = [
    {nombre: "Ana", nota: 8},
    {nombre: "Juan", nota: 6},
    {nombre: "Sara", nota: 10}
];

for(let alumno of alumnos){
    console.log(alumno.nombre);
    console.log(alumno.nota);
}

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")

let datos = [
    "Natalia",
    20,
    true
];

console.log(datos[0]); // Natalia
console.log(datos[1]); // 20
console.log(datos[2]); // true

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(matriz[0][1]); // 2
console.log(matriz[1][2]); // 6

for(let fila of matriz){
    for(let valor of fila){
        console.log(valor);
    }
}

console.log("**-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*")
//TRES FORMAS DE RECORRER ARRAYS 
// for clásico
for(let i = 0; i < array.length; i++){ }

// for...of
for(let elemento of array){ }

// forEach()
array.forEach(elemento => { });

//Y PARA ACCEDER 
array[i]                 // array normal
objeto.propiedad         // objeto
arrayObjetos[i].nombre   // array de objetos
matriz[fila][columna]    // array bidimensional
