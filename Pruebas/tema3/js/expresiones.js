//EXPRESIONES REGULARES

let parra = document.getElementById("parrafo");
let boton = document.getElementById("boton");

//busca tanto mayuscula como minuscula con la i 
let re1 =/muerte/img;
let re2 = new RegExp("duda","igm");

console.log(re1.test(parra.value));

//
// let result = null; 
// let myIndex = re1.lastIndex;
// while (re1.test(parra.value)) {
//     re1.lastIndex = myIndex;
//     result = re1.exec(parra.value);
//     myIndex = re1.lastIndex;
//     console.log('Encontrado' + result["0"] + ' en la posición ' + result.index + '.');
//     console.log("------------------------------------------");
// }
