/**
 * first form for create new object 
 */
let myAlum={
    name:"Juan",
    surname:"rodrig",
    age:29,
    actice : true,
    email : "jcnte99@g.educaand.es",
    notes : [6,7,8,9]
}

document.getElementById("h1").innerHTML="nombre "+myAlum.name+" Edad "+myAlum.age+"<br>";

/**
 * second form  
 */
let myAlum2 = new Object();

/**
 * 
 */
myAlum2.name="anne";
myAlum2.surname="cabello";
myAlum2.age=21;
myAlum2.actice=false;
myAlum2.email="annCabe93@g.educaand.es";
myAlum2.notes=[1,2,3,4];
document.getElementById("h1").innerHTML +="nombre "+myAlum2.name+" Primera nota:"+myAlum2.notes[0];


/**
 * 
 */
let myAlumn3 = new Object();

Object.defineProperties(myAlumn3, {
    name: {configurable: true, enumerable: false, writable:false, value:"Pepe"},
    surname: {configurable: true, enumerable: false, writable:false, value:"Pérez"}    
});

Object.defineProperty(myAlumn3, "age", {configurable: true, enumerable: true, writable:false, value:23});

h11.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn3.name + ". Edad: " + myAlumn3.age;

myAlumn3.age = 55;
console.log("Nueva edad: " + myAlumn3.age);
/**
 * FOR OF PARA DEVOLVER TODAS LAS PROPIEDADES DEL PRIMER OBJETO
 */
let myAlums = new Array(myAlumn, myAlumn2, myAlumn3);

// for (const data of myAlums) {
//     console.dir("Datos de alumnos: " + Object.entries(data))    
// }


/**
 * Bucle para preguntar dentro del array de mis alumnos cada clave y su valor
 */
let myAlumns = new Array(myAlumn, myAlumn2, myAlumn3);

for (let data of myAlumns) {
    let claves = Object.getOwnPropertyNames(data);
    console.log (claves)
    for (let i = 0; i < claves.length; i++)
        console.log("Valor de la clave " + claves[i] + " es " + data[claves[i]]);
}