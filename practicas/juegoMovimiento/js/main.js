import { obstaculos } from "./obstaculos.js";

const personaje = document.getElementById("personaje");
//guarda todos los estilos que tenga personaje
const personajeStyle = window.getComputedStyle(personaje);

//creamos fuera para que funcione 
let positionLeft = personajeStyle.getPropertyValue("left");
let positionTop = personajeStyle.getPropertyValue("top");

positionLeft = new Number(positionLeft.substring(0, (positionLeft.length - 2)));
positionTop = new Number(positionTop.substring(0, (positionTop.length - 2)));

const velocidad = 10;

dibujaObstaculos();

document.addEventListener("keydown",function(e){
    e.preventDefault;

    if(e.repeat){
        switch(e.key){
           case "ArrowRight":
                //Le sumamos 1 a positionLeft
                positionLeft += velocidad;
                console.log(`Posición ${positionLeft}`);
                personaje.style.left = positionLeft + "px"
                break;
            case "ArrowLeft":
                //Le sumamos 1 a positionLeft
                positionLeft -= velocidad;
                console.log(`Posición ${positionLeft}`);
                personaje.style.left = positionLeft + "px"
                break;
             case "ArrowUp":
                //Le sumamos 1 a positionLeft
                positionTop -= velocidad;
                console.log(`Posición ${positionTop}`);
                personaje.style.top = positionTop + "px"
                break;
            case "ArrowDown":
                //Le sumamos 1 a positionTop
                positionTop += velocidad;
                console.log(`Posición ${positionTop}`);
                personaje.style.top = positionTop + "px"
                break;

            default:
                break;
        }   

    }
})

/**
 * Funcion para pintar los obstaculos 
 */
function dibujaObstaculos() {
    for (const elem of obstaculos) {
        let obstaculo = document.createElement("div");
        obstaculo.style.position = "absolute";
        obstaculo.style.left = elem.x + "px";
        obstaculo.style.top = elem.y + "px";
        obstaculo.style.width = elem.ancho + "px";
        obstaculo.style.height = elem.alto + "px";
        obstaculo.style.backgroundColor = elem.colorFondo;
        document.body.appendChild(obstaculo);
    }
}