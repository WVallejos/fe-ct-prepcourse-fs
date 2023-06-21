function agregarPropiedad(objeto, propiedad) {
    // Recibirás un objeto por parámetro.
    // Debes agregarle una propiedad con el nombre recibido por parámetro.
    // Esta propiedad será igual al valor `null`.
    // Retornar el objeto.
    // Tu código:
    objeto[propiedad] = null;
    return objeto;
 }

 function invocarMetodo(objeto, metodo) {
    // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
    // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
    // [NOTA]: no necesitar retornar nada.
    // Tu código:
    objeto[metodo]();
    
 }
 function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario[amigos].push(nuevoAmigo);
 }
 var gato = {
    nombres: ['firu', 'koda'], 
    edad: 3,
    //meow: () => {
    //   console.log( 'Meow!');
    //}
 }
 //console.log(agregarPropiedad(auto, 'marca'));
 //invocarMetodo(gato, 'meow')
 //gato.meow();
 //let autos = ['fiat'];
 //autos.push('ford');
//console.log(autos);
//gato.nombres.push('kali'); 
//console.log(gato.nombres.length);
let array = 'hola como estas'
//for (let prop in gato) {
  //  array = [prop, gato[prop]];
//}
let string = 'adsjfdsfsfjsdjfhacabcsbajda'
let objetoString = {};
let suma = 0;
let stringOrdenado = string.split('').sort().join('');
console.log(stringOrdenado);
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
console.log(objetoString);