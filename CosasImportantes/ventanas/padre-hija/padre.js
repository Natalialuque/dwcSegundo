let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");

let boton = document.getElementById("botonPadre");

//esto se encarga de abrir cuando se pulsa el boton, aqui podriamos meter validaciones y mierdas
//boton.addEventListener("click",enviar);

//CON ESTO PODEMOS CARGAR LA NUEVA VENTANA DIRECTAMENTE 
window.onload = function(){

    window.open(
        "hija.html",
        "hija",
        "width=300,height=200"
    );
  
};

// function enviar(e){
    
//     e.preventDefault();   // evita que se recargue la página

//     window.open(
//         "hija.html",
//         "hija",
//         "width=700,height=700"
//     );
    
//     setTimeout(() => {
//         hija.close();
//     }, 5000);

// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//esto crea una funcion dentro del objeto padre ded window que permite comunicarse entre ventanas
window.sacarNombreApellido = function(){
    return nombre.value + " "+apellido.value;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//puedes mandar objetos completos 
let alumno = {
    nombre: "Natalia",
    edad: 20,
    curso: "2DAW"
};

window.obtenerAlumno = function(){
    return alumno;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Podemos tener validaciones previas al click del boton y hasta que no se cumplan no se puede enviar la informacion a la hija