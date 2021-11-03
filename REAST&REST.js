//Operador Reast & Parametro Rest
/*
  function sumar (a,b, ...c) {
    let resultado = a + b;

    c.forEach(function (n){
        resultado += n
    });

    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));


const arr1 = [1,2,3,4,5],
      arr2 = [5,6,7,8,9];

console.log(arr1, arr2);

const arr3 = [...arr1,...arr2];
console.log(arr3);*/

//////////////////////////////////////////////////////

//Arrow Functions --> Funciones anonimas

/*const saludo = nombre => console.log('Hola '+nombre);
saludo('Jesus');

const sumar = (a,b) => a + b;
console.log(sumar(9,9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

const numeros = [1,2,3,4,5];

numeros.forEach((el, index) => console.log(el+" esta en la posicion"+index));

const p = {
    nombre: "fgbdb",
    ladrar: () => {
        console.log(this)
    }
}

p.ladrar();*/

//Prototipos

//Funcion constructora

/*function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;

    Animal.prototype.sonar = function(){
        console.log('Hago sonidos porque estoy vivo.');

    }

    Animal.prototype.saludar = function () {
        console.log('Hola me llamo'+(this.nombre));
    }
}

// Herencia Prototipica
function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log('Soy un perro y mi sonido es ladrar');

}

Perro.prototype.ladrar = function(){
    console.log('Guaaaauuuu Guaaaaauuuuuu !!!!!')
}

const snoopy = new Perro('Snoopy', 'Macho');
lolaBunny = new Animal('Lola BUnny', 'Hembra');

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();*/

//Metodos Staticos, Getter y Setter
/*
//Las clases no se recomiendan, JavaScript es un Lenguaje POO orientado a prototipos
class Animal{
   //Constructor --> Metodos con parametros dentro de una clase
    constructor(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
    }

    //Metodos
    sonar(){
        console.log('Hago sonidos porque estoy vivo.');
    }

    saludar(){
        console.log('Hola me llamo '+(this.nombre));
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
      //Metodo super()--> Es para mandar a llamar un constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y ladro");
    }

    ladrar(){
        console.log("Guaaaauuuu!!!!");
    }
    //un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log('Soy un perro y soy considerado el mejor amigo del hombre');
    }

    //Los setters y getters son metodos espe
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();
const mumu = new Animal("Mumu", "Hembra");
      scooby = new Perro("Scooby", "Macho", "Gigante");

 console.log(mumu);
 mumu.saludar();
 mumu.sonar();
 console.log(scooby);
 scooby.saludar();
 scooby.sonar(); 
 scooby.ladrar();
 console.log(scooby.getRaza)
 scooby.setRaza = "Grandanes";
 console.log(scooby.getRaza); */

 //Objeto Console
 /*
 console.error('Esto es un error');
 console.warn('ADVERTENCIA!');
 console.info('Mensaje Informativo');
 console.log('Esto es un egistro de lo que ha pasado en nuestra aplicacion');

 let nombre = 'Jon',
    apellido = 'Mircha',
    edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);
console.log("Hola mi nombre es "+nombre+" "+apellido+" y tengo "+edad+" anos.");

console.clear();
console.log("Hola mi nombre es %s %s y tengo %d anos",nombre, apellido, edad);


console.groupCollapsed("Cursos de jonmircha");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de Flexbox");
console.groupEnd();

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4],
      vocales = ['a','e','i','o','u'];

console.table(numeros); //Metodo Table --> Listas en Tabla
console.table(vocales);

const perro = {
    nombre: 'Chespi',
    raza: 'Boxer',
    color: 'cafe'
}
console.table(perro);
console.clear();

console.time("Cuanto tiempo tarda la ejecucion");
const arreglo = Array(10000000);

for(let i=0; i < arreglo.length; i++){
    arreglo[i] = i; //Metodo time --> Cuenta el tiempo de ejecucion
}

console.timeEnd("Cuanto tiempo tarda la ejecucion");
console.clear();

for(let i = 0; i <= 100; i++){
    console.count("codigo for");//Metodo for --> Cuenta el for en cada iteracion
    console.log(i);
}

console.clear();

let x = 2.4,
    y = 2,
    pruebaXY = 'Se espera que X siempre sea menor que Y';

console.assert((x<y),(x,y,pruebaXY)); //Metodo assert --> Evalua la ejecucion de codigo, util para testing
*/


//Objeto Date --> Constructor  -  Prototipo
/*
console.log(Date);

let fecha = new Date();
console.log(fecha);
//dia del mes
console.log(fecha.getDate());
//dia de la semana
console.log(fecha.getDay());
//meses del anio
//Dic --> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear()); //Anio actual
console.log(fecha.getHours()); //Horas
console.log(fecha.getMinutes()); //Minutos
console.log(fecha.getSeconds()); //Segundos
console.log(fecha.getMilliseconds()); //Milisegundos
console.log(fecha.toString()); //Mostrar en cadena de texto
console.log(fecha.toDateString()); //Mostrar en cadena los datos de tiempo
console.log(fecha.toLocaleString()); //Fecha Local
console.log(fecha.toLocaleDateString()); //Fecha local de dato del tiempo
console.log(fecha.toLocaleTimeString()); //Tiempo local en cadena
console.log(fecha.getTimezoneOffset()); //Uso horario en el que se encuentra tu localizacion
console.log(fecha.getUTCDate()); //UTC--> Hora 0 Greenwich//Uso horario del dato de tiempo en Greenwich
console.log(fecha.getUTCHours()); //Uso horario de horas con respecto a Greenwich
console.log(Date.now()); //Tiempo en segundo desde el time stamp --> Sirve para guardar algun registro en bases de datos

let cumpleJesus = new Date(2002,3,19);
console.log(cumpleJesus);*/

//Objeto Math
/*
console.log(Math.abs(-7.8)); //Valor absoluto
console.log(Math.ceil(7.2)); //Valor entero que sigue
console.log(Math.floor(7.9)); //Parte entera
console.log(Math.sqrt(169)); //Raiz cuadrada
console.log(Math.pow(2,5)); //Potencia
console.log(Math.sign(-4.56)); //Numero positivo, cero y negativo
console.log(Math.random()*100); //Numero aleatorio entre 0 y 1
console.log(Math.round(Math.random()*1000)); */



//Objeto de Cortocircuito

/*Cortocircuito OR --> Valor izquierda que valida true se carga por 
defecto.

Cortocircuito AND --> Valor de izquierda que valida false se carga por
defecto.*/

//Cortocircuito OR
/*
function saludar(nombre){
    nombre = nombre || 'Desconocido';
    console.log('Hola '+nombre);
}

saludar('Jesus');
saludar();
console.log('Cadena' || 'Valor de la derecha');
console.log([1,2,3,4,5] || 'Valor de la derecha');
console.log(false || 'Valor de la derecha');
console.log(undefined || 'Valor de la derecha');
console.log(0 || 'Valor de la derecha');

//Cortocircuito AND
console.log(" ");
console.log('Cadena' && 'Valor de la derecha');
console.log([1,2,3,4,5] && 'Valor de la derecha');
console.log(false && 'Valor de la derecha');
console.log(undefined && 'Valor de la derecha');
console.log(0 && 'Valor de la derecha');
*/

//alert, confirm y prompt
/*
console.log(window);
//alert('Esto es una alerta'); //Alertas en Webs
//confirm('Esto es una confirmacion'); //Confirmacion en Webs
//prompt('Esto es un aviso'); //Aviso en Webs y permite al usuario ingresar un valor

let alerta = alert('Alerta');
    confirmacion = confirm('Verificacion');
    aviso = prompt('Aviso');

console.log(alerta);
console.log(confirmacion);
console.log(aviso);*/




//Expresiones Regulares

/*Secuencia de caracteres que forma 
patron de busqueda*/

/*//Primera forma//
let cadena = 'mviviom dvinionvio mviviom ndvionevnsdovnionvoienvioenvineivneiovneiovnqoeiqncoiqencqenvoiqnvioeqnvio';
let expReg = new RegExp('Mviviom','ig');
let expReg2 = /mviviom/ig;

console.log(expReg.test(cadena)); //test --> Metodo para verificar palabra en cadena
console.log(expReg.exec(cadena)); //exec --> Metodo para mostrar ubicacion en arreglo de palabra en cadena
*/

/*//Segundaa Forma///*let expReg2 = /mviviom{1,2}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
*/


//Funciones Anonimas Autoejecutables










