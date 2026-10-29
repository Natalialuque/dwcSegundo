/**
 * EJERCICIO 1 --> DEFINICIÓN DE JERARQUÍA DE OBJETOS 
 */
let botonEstudiantes = document.getElementById("verEstudiante");
let botonProfesor = document.getElementById("verProfesor");
let resultadoEstudiante = document.getElementById("resultadoEstudiante");
let resultadoProfesor = document.getElementById("resultadoProfesor");


// Clase base Persona
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  //Lo devuelto por el objeto detalles 
  obtDetalles() {
    return "nombre:"+this.nombre+"<br>Edad:"+this.edad+"<br>Género:"+this.genero;
  }
}

// Clase Estudiante
class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }

  //Lo devuelto por el estudiante + objeto detalles
  registrar() {
    return this.obtDetalles()+"<br>Curso:" +this.curso+"<br>Grupo:"+this.grupo;
  }
}

// Clase Profesor
class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  //lo devuelto por el profesor + objeto detalles 
  asignar() {
    return this.obtDetalles()+"<br>Asignatura:"+this.asignatura+"<br>Nivel:"+ this.nivel;
  }
}

// Crear instancias
const persona = new Persona("Natalia",21,"Femenino");
const persona2= new Persona ("Joselu",45,"Masculino");
const estudiante = new Estudiante(persona.nombre, persona.edad, persona.genero, "2º Bachillerato", "B");
const profesor = new Profesor(persona2.nombre, persona2.edad, persona2.genero, "Matemáticas", "Secundaria");

//Mostramos los resultaados
botonEstudiantes.onclick= function(){
    resultadoEstudiante.innerHTML=estudiante.registrar();
}

botonProfesor.onclick= function(){
    resultadoProfesor.innerHTML=profesor.asignar();

}

/**
 * EJERCICIO 2--> CALCULAMOS LONGITUD, ANGULO Y PENDIENTE 
 */
//apartado 1
let longitud = document.getElementById("longitud");
let altura = document.getElementById("altura");
let boton2_1 = document.getElementById("boton2_1");
let resul2_1 = document.getElementById("resul2_1");

boton2_1.addEventListener("click",longitu); //cuando pulsemos
function longitu(){
    resul2_1.innerHTML=Math.sqrt((Math.pow(longitud.value,2))+Math.pow(altura.value,2));
}

//apartado 2
let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");
let boton2_2 = document.getElementById("boton2_2");
let resul2_2 = document.getElementById("resul2_2");

boton2_2.addEventListener("click",angulo); //cuando pulsemos
function angulo(){
    // Calcular la pendiente (tangente del ángulo)
    let pendiente = (y2.value - y1.value) / (x2.value- x1.value);

    // Calcular el ángulo en radianes y luego convertirlo a grados
    let anguloRad = Math.atan(pendiente);
    let anguloGrados = anguloRad * (180 / Math.PI);

    resul2_2.innerHTML=anguloGrados;
}

//apartado 3
let ascendidos = document.getElementById("ascendidos");
let recorridos = document.getElementById("recorridos");
let boton2_3 = document.getElementById("boton2_3");
let resul2_3 = document.getElementById("resul2_3");

boton2_3.addEventListener("click",pendiente); //cuando pulsemos
function pendiente(){
    resul2_3.innerHTML=(ascendidos.value/recorridos.value)*100;

}

/**
 * EJERCICIO 3 --> MOSTRAR VALORES DE PI CON DOS DECIMALES CON DOS FORMATOS DIFERENTES 
 */
let pi1 = document.getElementById("pi1");
let pi2 = document.getElementById("pi2");

const PI = Math.PI;
// console.log(PI);

    //toFixed 
    pi1.innerHTML= PI.toFixed(4);

    //con el math.round
    pi2.innerHTML = Math.round(PI * 10000) / 10000; // Devuelve 3.1416

  
/**
 * EJERCICIO 4 --> SACAR DIAS QUE LLEVAS VIVO
 */
let fechaNaci = document.getElementById("fechaNaci");
let resul4 = document.getElementById("resul4");
let boton4 = document.getElementById("boton4");

boton4.addEventListener("click",dias);

function dias(){
  const naci = new Date(fechaNaci.value);
  const hoy = new Date();

  //console.log("hoy"+hoy);

  //restamos las fechas
  let resultado = hoy-naci;

  //sacamos los dias
  resul4.innerHTML = "Llevas vivo "+ Math.floor(resultado / (1000 * 60 * 60 * 24))+" dias";
}

/**
 * EJERCICIO 5 --> SACAR LA EDAD EN AÑOS DIAS HORAS Y MINUTOS, TEN EN CUENTA QUE QUE EN EL AÑO CUMPLE
 */
let fechaNacimiento = document.getElementById("fechaNacimiento");
let boton5 = document.getElementById("boton5");
let resul5 = document.getElementById("resul5");

boton5.addEventListener("click",fecha);

function fecha(){

    const nacimiento = new Date(fechaNacimiento.value);
    const ahora = new Date();

  // Diferencia total en milisegundos, para poder multiplicar y sacarlo
    const diferenciaMs = ahora - nacimiento;

  // Calcular años completos
    let edadAños = ahora.getFullYear() - nacimiento.getFullYear();

  //para controlar que no ha cumplido años
  const cumpleEsteAño = new Date(ahora.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
  if (ahora < cumpleEsteAño) {
    edadAños--; // Aún no ha cumplido años este año
  }

  // Calcular días, horas y minutos totales vividos
    const diasTotales = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
    const horasTotales = Math.floor(diferenciaMs / (1000 * 60 * 60));
    const minutosTotales = Math.floor(diferenciaMs / (1000 * 60));

    resul5.innerHTML="Edad años:"+edadAños+"<br>Dias: "+diasTotales+"<br>Horas:"+horasTotales+"<br>Minutos:"+minutosTotales;
  
}

/**
 * EJERCICIO 6 --> 
 */
//variables 
let hora = document.getElementById("hora");
let texto = document.getElementById("texto");
let recordar = document.getElementById("boton6");
let lista = document.getElementById("resul6");

//array para guardar todo el evento
let eventos = [];

recordar.onclick=function(){
  //variables 
  let mensaje = texto.value;
  let tiempo = hora.value;

  //si esta vacio que de error
  if (!mensaje || !tiempo) {
      alert("Por favor, escribe un recordatorio y selecciona una fecha.");
      return;
    }

    //lo añadimos a un array
    eventos.push({ mensaje, tiempo });

    // Ordenar por fecha ascendente, para que aparezcan en orden
    eventos.sort((a, b) => new Date(a.tiempo) - new Date(b.tiempo)); 

    lista.innerHTML = ""; // ← Esto evita duplicados
    eventos.forEach(evento => {
      const fechaFormateada = new Date(evento.tiempo).toLocaleString();
      lista.innerHTML += `<p><strong>${fechaFormateada}</strong>: ${evento.mensaje}</p>`;
    });


}