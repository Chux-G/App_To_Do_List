/*Realizar una App de To Do List en JavaScript

Si no saben que es pueden investigar pero básicamente seria como una aplicacion que gestione tareas pendientes 
La Aplicacion debe consistir en lo siguiente
1)Que pueda crear una tarea con el nombre que le asigne el usuario
2)Que esa tarea se almacene o se muestre la tarea en el DOM 
3)Que pueda modificar o Eliminar dicha Tarea creada
4)Que pueda crear múltiples tareas en una Lista <To Do List>

Nota adicional:No es necesario que almacene las tareas en una Base de datos o en el LocalStorage del navegador, simplemente utilice manipulacion del DOM  (todo esta en el curso)
*/


//-----------------------Desarrollo en JS de la App To Do List--------------------------------

//Declaracion varibles para la captura de la entrada de dato, la tabla y el boton
const input = document.getElementById("input");
const table = document.getElementById("tabla");
const boton = document.getElementById("boton");


//Funcion para agregar las tareas a la tabla
function agregarTarea() { 

  const fila = document.createElement("tr"); //Creacion de fila para la tabla

  //Propiedad del elemento para agregar las celdas en las
  //que se introduciran checkboxs, contenido de tarea y guardar tarea
  fila.innerHTML = `
                    <td> <input type="checkbox" onClick="completar()" /> </td> 
                    <td style="flex-grow: 2"> ${input.value} </td>
                    <td> <span onClick="borrar()"> X </span> </td>
                    `;

  tabla.appendChild(fila); //Funcion para agregar a la tabla la captura realizada
}

//Funcionalidad del boton para realizar el evento del click

boton.addEventListener("click", function (e) { //Instrucciones que realizara la funcion anonima que tendra como 
  // parametro el evento e, forma parte de la funcionalidad que tendra el boton

  //Determinacion de los valores de entrada que van a ser introducidos
  if (input.value === "") {
    validacion("introduce una tarea", "fallo");//Llamada de la funcion validacion para mostrar mensaje
  } else {
    agregarTarea();//Llamada de funcion para agregar las tareas
    validacion("Tarea añadida con éxito", "exito");//Llamada de funcion validacion para mostrar mensaje
  }
});

//Funcion para borrar tareas
function borrar(event) {
  this.event.target.parentElement.parentElement.remove(); //Borrar tarea realizada
}

//Funcion con parametros de entrada para validar la funcion y enviar una respuesta de validacion
function validacion(mensaje, clase) {

  const div = document.createElement("div");//Declarar un elemento para mostrar un mensaje
  div.className = clase;//Clase que va a permitir editar el elemento
  div.appendChild(document.createTextNode(mensaje));//Agregar el mensaje que se va a pasar como parametro

  const titulo = document.querySelector("h1");//Declarar el elemento en el que se va a ubicar el mensaje
  titulo.insertBefore(div, null);//Insertar el elemento de ubicacion del mensaje

  setTimeout(function () {//Funcion que permite desaparecer el mensaje en un determinado tiempo
    document.querySelector(`.${clase}`).remove();//Paso del elemento parametro -> clase
  }, 3000);
}

//Funcion con el evento como parametro para indicar si se ha completado o no la tarea
function completar(event) {

  //Comprobacion para determinar si el checkbox esta marcado o no
  if (this.event.target.checked) {
    this.event.target.parentElement.parentElement.classList.add("completado");//Indicar completado
  } else {
    this.event.target.parentElement.parentElement.classList.remove( //Indicar no completado
      "completado"
    );
  }
}

//Desarrollo Autor: <-~ Jesus Silva ~->