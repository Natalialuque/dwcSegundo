const info = document.getElementById("info");
let listaPaises = document.getElementById("paises");
let opRadio = document.getElementsByName("edad");

const opciones = listaPaises.getElementsByTagName("li");

if(opciones.length > 0) {
    console.log("Número de opciones de la lista: " + opciones.length);
    info.innerHTML = opciones[2].innerHTML;
}
else 
    throw Error ("No existen opciones e lista")

info.innerHTML = "Opciones del radio edad: "; 
for (let op of opRadio)
    info.innerHTML += op.value + ", ";

/**
* implementar boton que cambie colores de impares con pares 
*/
const oplista1 = Array.from(document.getElementsByClassName("pares"));
const oplista2 = Array.from(document.getElementsByClassName("impares"));
document.getElementById("bChangeClassStyle").onclick = function () {
    
    for (let op of oplista1)
        if (op.className == "pares")
            op.className = "impares";
        else
            op.className = "pares";

    for (let op of oplista2)
        if (op.className == "pares")
            op.className = "impares";
        else
            op.className = "pares";
}


/**
 * 
 */
document.getElementById("bNuevoPais").onclick = function () {

listaPaises = document.getElementsByTagName("li");
let nuevoPais = document.getElementById("nuevoPais").value;

if (nuevoPais == "") 
    info.innerHTML ="Debe escribir un País";
else { // Insertamos nuevo nodo en la lista
    let nuevoNodoPais = document.createElement("li");

    if ((listaPaises.length % 2) == 0)
        nuevoNodoPais.className = "impares";
    else
        nuevoNodoPais.className = "pares";

    let nuevoNodoPaisText = document.createTextNode(nuevoPais);
    nuevoNodoPais.appendChild(nuevoNodoPaisText);

    document.getElementById("paises").appendChild(nuevoNodoPais);
}

}

/**
 * FUNCTION CREATE NODE
 * @param tipo 
 * @param Texto 
 * @param id 
 * 
 */
function createNode (tipo, texto, id, styles) {
    let elemento = null;

    if ((tipo) && (typeof tipo === "string")) 
        elemento = document.createElement(tipo);
    else
        return null;
        
    if ((texto != "") && (typeof texto === "string")) {
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if (id != "") 
        elemento.id = id;

    if ((styles) && (typeof styles === "string") && (styles != ""))
        elemento.style = styles;

    return elemento;
}