/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayDeArrays = [];
   let i = 0;
   for (let prop in objeto) {
      arrayDeArrays[i] = [prop, objeto[prop]];
      i++;
   }
   return arrayDeArrays;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objetoString = {};
let suma = 0;
let stringOrdenado = string.split('').sort().join('');
for (i=0; i < stringOrdenado.length; i++) {
  if (objetoString.hasOwnProperty(stringOrdenado[i]) === false) {
     for (j=0; j < stringOrdenado.length; j++) {
        if (stringOrdenado[i] === stringOrdenado[j]) {
           suma++;
        }
     }
     objetoString[stringOrdenado[i]] = suma;
     suma = 0; 
  }
}
return objetoString;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppers = [];
   let lowers = [];
   for (i=0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         uppers.push(string[i]);
      } else {
         lowers.push(string[i]);
      }
   }
   return uppers.join('') + lowers.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let fraseSeparada = frase.split(' ');
   for (i=0; i < fraseSeparada.length; i++) {
      let reversedFrase = fraseSeparada[i].split('').reverse().join('');
      fraseSeparada[i] = reversedFrase;
   }
   return fraseSeparada.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   reversedNumero = numero.toString().split('').reverse().join('');
   if (numero == reversedNumero) {
      return 'Es capicua'
   } else {
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('');
   let finalString = [];
   for (i=0; i < stringArray.length; i++) {
      switch (stringArray[i]) {
         case 'a':
            continue;
         case 'b':
            continue;
         case 'c':
            continue;
         default:
            finalString.push(stringArray[i]);

      }
   }
   return finalString.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a,b) {return a.length - b.length});
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   array3 = [];
   for (i=0; i < array1.length; i++) {
      if ((array2.includes(array1[i])) && (array3.includes(array1[i]) === false)) {
         array3.push(array1[i]);
      }
   }
   return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
