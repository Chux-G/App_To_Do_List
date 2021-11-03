/*
1) cree un array con el abecedario y numeros del 0 al 9.
1)pida por pantalla un número entero al usuario.
2)Escribe a continuación un script que devuelva por pantalla un número de tantos 
caracteres como el número entero indicado por la persona. (por ejem: si un array a = ['a', 'b', 'c', 'd'] esta ya propuesto, 
y el usuario ingresa un numero 2, debe arrojar dos carateres aleatorios, 'ad', 'ba', etc). esta generacion aleatoria sera una contraseña.

-La contraseña puede estar formada por minúsculas de la a a la z, números y los caracteres _, -, ., $, &, #, @.

-Si lo deseas completa la contraseña con mayúsculas y/o otras posibilidades.

**Para resolver este problema lo primero que debemos hacer es trazar un plan.**
Paso 1: pedir un número al usuario y transformarlo a entero.
Paso 2: crear un texto con n caracteres dónde n es el número indicado por el usuario.
Paso 3: conseguir ahora que cada letra pase a ser aleatorio.
Paso 4: hemos conseguido escribir una palabra de n caracteres dónde cada una es aleatoria.

extra: la contraseña generada debe guardarse en un array, luego con la utilizacion de metodos nativos de javascript crear una rutina donde el array con la contraseña sea recorrido y detectar si tiene una letra o numero en especifico de su preferencia. */

//-----------------------Programa--------------------------------

//Funcion para generar una clave aleatoria
function generarClave(){

   /*Declaracion de los arreglos en donde se almacenan los datos 
   que se van a generar de forma aleatoria para generar la clave*/

   let vector = [];
   let minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   let mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   let signos = ['#','~','!','@','$',"%",'^','&','*','(',')'];
   let numeros = [0,1,2,3,4,5,6,7,8,9];
   let caracteres = [...minusculas,...mayusculas,...signos,...numeros];

   //Declaracion de variables para solicitar datos a usuario
   let cantidad; 
   let preferido;
   cantidad = prompt('Ingresa la cantidad de caracteres para generar la clave:');
   preferido = prompt('Ingresa un caracter de tu preferencia:');

   //Iteracion para la recoleccion aleatoria de todos los datos psoibles que conformaran la clave
      for(let i = 0; i < caracteres.length; i++){

         let recogedor = Math.floor(Math.random()*caracteres.length); //Variable que ira recolectando cada dato en forma aleatoria
         vector.push(caracteres[recogedor]); //Metodo para almacenar de los datos de la clave dentro del vector

      }

   vector.length = cantidad; //Asignacion del tamaño del vector dado por el usuario

   /*Rutina para la deteccion de un caracter preferido ingresado por el usuario en la clave*/

   let k = 0; //Iniciacion del contador de detecciones 

      for(let j = 0; j < vector.length; j++){ //Iteracion para recorrer el vector y detectar el caracter preferido
         if (vector[j]==preferido){
            console.log('Caracter preferido "'+preferido+'" fue detectado en la posicion '+(j+1)+' de la clave.');
            k++;
         } 
      }
   console.log('Cantidad de detecciones del caracter preferido -> '+k); //Indicador de la cantidad de detecciones

   return console.log('Clave generada: '+vector.join('')); //Retorno de la clave generada en forma forma aleatoria
}

console.log(generarClave()); //Impresion por pantalla la funcion desarrollada

//Desarrollo Autor: <-~ Jesus Silva ~->