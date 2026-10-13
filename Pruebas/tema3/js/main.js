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

h1.innerHTML += "<hr>Nombre del alumno/a:" + myAlumn3.name + ". Edad: " + myAlumn3.age;

myAlumn3.age = 55;
console.log("Nueva edad: " + myAlumn3.age);
/**
 * FOR OF PARA DEVOLVER TODAS LAS PROPIEDADES DEL PRIMER OBJETO
 */
//let myAlums = new Array(myAlum, myAlum2, myAlumn3);

// for (const data of myAlums) {
//     console.dir("Datos de alumnos: " + Object.entries(data))    
// }


/**
 * Bucle para preguntar dentro del array de mis alumnos cada clave y su valor
 */
//let myAlumns = new Array(myAlumn, myAlumn2, myAlumn3);

// for (let data of myAlumns) {
//     let claves = Object.getOwnPropertyNames(data);
//     console.log (claves)
//     for (let i = 0; i < claves.length; i++)
//         console.log("Valor de la clave " + claves[i] + " es " + data[claves[i]]);
// }


/**
 * probando url 
 */
// const url = "https://www.marca.com/tenis/2026/10/08/ferrero-desvela-batalla-perdida-alcaraz-descarta-entrenar-sinner-dicen-seria-etico.html";

// const h21 = document.getElementById("h21");

// h21.innerHTML = encodeURI(url) + "<hr>" + encodeURIComponent(url)

// eval("h21.innerHTML = 'Hola desde eval'");

// document.forms[].innerHTML

/**
 * 
 */
const h21 = document.getElementById("h21");
let myArray = new Array();

myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push("78.98");
myArray.push(new Array(1,2,3));
myArray.push({marca: "Ford", matricula: "123456A"});
myArray.push(false);
myArray.push(Math.PI);

// for (let index = 0; index < myArray.length; index++)
//     //para verificar que sea un objeto, y tiene las propiedades marca y matricula
//     if ((typeof myArray[index] == "object") && Object.hasOwn(myArray[index],"marca") && Object.hasOwn(myArray[index],"matricula")) {
//         h21.textContent += "{Marca: " + myArray[index].marca + ", Matricula: " + myArray[index].matricula+"}";
//     }else{
//         if (index == (myArray.length - 1))
//                 h21.textContent += myArray[index];
//             else
//                 h21.textContent += myArray[index] + " - ";
//     }
    


/**
 *  filter() para quedarse solo con los elementos booleanos (true o false) de un array.
 */
let myBooleanArray = myArray.filter(function (elem) {
    if (typeof elem == "boolean") return elem;
})

// h21.textContent = "";
// for (let elem of myBooleanArray)
//     h21.textContent += elem + " - ";

/**
 * FECHAS Y HORAS
 */
let myBirthDate = new Date(2004, 4, 4);
let dateNow = new Date();

//h21.innerHTML = "Llevas vivo " + (dateNow - myBirthDate) / (1000*60*60*24) + " días.";


const calendario = document.getElementById("calendario");
calendario.oninput = function () {
    h21.innerHTML = "Desde la fecha seleccionada y tu nacimiento han pasado " + (new Date(this.value) - myBirthDate) / (1000*60*60*24) + " días.";
}
h21.innerHTML = dateNow.toLocaleDateString();
