//2--> PODEMOS EXPORTAR DIRECTAMENTE PASANDO EL NOMBRE DE LAS FUNCIONES 
        export {saludar,edad}


//1-->PODEMOS EXPORTAR DIRECTAMENTE FUNCIONES, VARIABLES, COLOCANDOLE EL EXPORT DELANTE
//export 
function saludar (nombre){
    return iniciaSaludo()+" " + nombre;
}

//export
var edad = 30;

//3-->Podemos crear funciones que vamos a llamar en otra que si exporta y que esta sin tener el export tambien se exporte
function iniciaSaludo(){
    let dateNow = new Date();
    let result="";

    if(dateNow.getHours<=12){
        result = "Buenos dias";
    }else{
        result="Buenas tardes";
    }

    return result;
}

//4-->
var password = "asasasasa58fsadaO*-";
export default function muestraPassword(){
    return password;
}


export class Usuario {
    constructor(nombre = "anónimo", apellidos = "") {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.password = "ñlkasdf987sad!";
    }
}