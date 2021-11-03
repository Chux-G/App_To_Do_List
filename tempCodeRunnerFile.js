function generarClave(){
   let vector = [];
   let minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   let mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   let signos = ['#','~','!','@','$',"%",'^','&','*','(',')'];
   let numeros = [0,1,2,3,4,5,6,7,8,9];

   let caracteres = [...minusculas,...mayusculas,...signos,...numeros];
   let cantidad 
   let preferido
   cantidad = prompt('Ingresa la cantidad de caracteres para generar la clave');
   preferido = prompt('Ingresa un caracter de tu preferencia')

   for(let i = 0; i < caracteres.length; i++){

      let recogedor = Math.floor(Math.random()*caracteres.length);
      vector.push(caracteres[recogedor]);

   }

   vector.length = cantidad;
   return vector.join('');

   preferido = prompt('Ingresa un caracter de tu preferencia')
   for(let j = 0; j < vector.length; j++){
      if (vector[j]==perferido){
         vector.join('');
         alert('Caracter preferido '+preferido+' detectado en la posicion '+vector[j+1])
      } else{
         alert('No se')
      }
   }
   
}

console.log(generarClave());