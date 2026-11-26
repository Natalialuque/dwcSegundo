const listaColores = document.getElementById("listaDesplegable");
const info = document.getElementById("info");

// listaColores.addEventListener("change",function(e){
//     info.innerHTML = "Color seleccionado: " + this.value;

// document.body.style.background = listaColores.value;
//     console.dir(this.options[this.selectedIndex].text);

// });


/**
 * escribir en un text area todo menos e
 */

// let texarea = document.getElementById("textarea");

// texarea.addEventListener("input",(e)=>{
//    let ultimaLetra = e.target.value.charAt(e.target.value.length-1);
//     if ((ultimaLetra == "e") || (ultimaLetra == "E")) {
//         e.target.value = e.target.value.substring(0, e.target.value.length-1);
//     }
// })


document.getElementById("range1").addEventListener("input", (e)=> {
    info.innerHTML = e.target.value;
})