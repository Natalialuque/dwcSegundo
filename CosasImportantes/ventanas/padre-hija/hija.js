let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p21 = document.getAnimations("p2_1");

//WINDOW OPENER SE ENCARGA DE HACER REFERENCIA A LA VENTANA QUE LO ABRIO Y ASI PODER ACCEDER A SUS FUNCIONES

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//esto (opener) recibe la funcion que se ha creado en el objeto padre 
let nombreApelldiorecibido = window.opener.sacarNombreApellido();

p1.innerHTML+="EL nombre recibido es"+nombreApelldiorecibido;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//recibimos un objeto entero que podemos mostrar por trozos 
let alumno = window.opener.obtenerAlumno();

p2.innerHTML+= "Objeto "+ alumno + "<br>"+ //con esto sacamos el objeto tal cual, el cual no puede leer
                //con esto ya si vamos leyendo bien
               "Nombre:"+alumno.nombre + "<br>"+
               "edad:"+alumno.edad;

alumno.edad=50; //si aqui modificamos valor en la padre tambien se cambia 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Podemos recoger informacion en gran cantidad pero debo ir usandola en condiciones 
