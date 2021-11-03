/*Elaboré un programa q recolecte 5 objetos con los siguientes datos, nombre y edad. 
Y otorgar a las personas q sean mayor de edad, las q no pintar error. */


//-----------------------Programa--------------------------------

//Definicion de variables
let nombre1,nombre2,nombre3,nombe4,nombre5;
let edad1,edad2,edad3,edad4,edad5;

//Solicitud de datos
console.log('Persona 1:');
nombre1 = prompt('Ingresa tu nombre');
edad1 = prompt('Ingresa tu edad');
console.log('Persona 2:');
nombre2 = prompt('Ingresa tu nombre');
edad2 = prompt('Ingresa tu edad');
console.log('Persona 3:');
nombre3 = prompt('Ingresa tu nombre');
edad3 = prompt('Ingresa tu edad');
console.log('Persona 4:');
nombre4 = prompt('Ingresa tu nombre');
edad4 = prompt('Ingresa tu edad');
console.log('Persona 5:');
nombre5 = prompt('Ingresa tu nombre');
edad5 = prompt('Ingresa tu edad');

function Datos(nombre,edad){ //Constructor para la recolecta de 5 objetos
    this.nombre = nombre;
    this.edad = edad;
};

//Creacion de objetos con sus atributos
let dato1 = new Datos(nombre1,edad1); 
let dato2 = new Datos(nombre2,edad2);
let dato3 = new Datos(nombre3,edad3);
let dato4 = new Datos(nombre4,edad4);
let dato5 = new Datos(nombre5,edad5);

//Registro de objetos alamacenados en un vector
let registros = [dato1,dato2,dato3,dato4,dato5];
console.log(registros);


let n;
let e;
function validarEdad(n,e){ //Funcion para validar mayoria de edad
    if(e>=18){
        console.log('El usuario '+n+' ha sido aceptado.');
    }else{
        console.log('Error, el usuario '+n+' ha sido negado.');
    }
}

//Funcion con los atributos como parametros asignados de cada persona
validarEdad(nombre1,edad1);
validarEdad(nombre2,edad2);
validarEdad(nombre3,edad3);
validarEdad(nombre4,edad4);
validarEdad(nombre5,edad5);

//Desarrollo Autor: <-~ Jesus Silva ~->