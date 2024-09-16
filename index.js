///Pair Programming
//Arrays
var arrayVacio = [];
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayNumerosPares = [0, 2, 4, 6, 8];
var arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

//Funciones
function suma(a, b) {
  return a + b;
}
function potenciacion(a, b) {
  return Math.pow(a, b);
}
function separarPalabras(palabras) {
  let palabrasSeparadas = [];
  if (typeof palabras !== "string") {
    console.error('El parametro no es un string');
    return;
  }
  palabrasSeparadas = palabras.split(" ");
  return palabrasSeparadas;
}
function repetirString(texto, repeticiones) {
    let textoConcatenado = '';
    for(let i = 0; i < repeticiones; i++) {
        textoConcatenado += texto;
    }
    return textoConcatenado;
}
function esPrimo(numero) {
    if(numero < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          return false;
        }
    }
      return true;
}

//Mezclando arrays y funciones
function ordenarArray(numeros) {
    return numeros.sort();
}
function obtenerPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
          pares.push(numeros[i]);
        }
    }
    return pares;
}
function pintarArray(cadena) {
    return '[' + cadena.join(', ') + ']';
}
function arrayMapi(cadena, funcion) {
    return cadena.map(funcion);
}
function eliminarDuplicados (cadena) {
    let sinDuplicados = [];
    for (let i = 0; i < cadena.length; i++) {
        if(!sinDuplicados.includes(cadena[i])) {
            sinDuplicados.push(cadena[i]);
        }
    }
    return sinDuplicados;
}
///Proyecto Individual
//Arrays
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones
function multiplicacion(a,b) {
    return a * b;
}
function division(a,b) {
    return a / b;
}
function resta(a,b) {
    return a - b;
}
function esPar(numero) {
    return numero % 2 === 0;
}
let arrayFunciones = [suma, resta, multiplicacion];

//Mezclando arrays y funciones
function ordenarArray(numeros) {
    return numeros.sort();
}
function ordenarArray2(numeros) {
    let numerosOrdenados = numeros.sort();
    return numerosOrdenados.reverse();
}
function obtenerImpares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i]);
        }
    }
    return impares;
}
function sumarArray(numeros) {
    return numeros.reduce((acumulador, valorActual)=> acumulador + valorActual, 0);
}
function multiplicarArray(numeros) {
    return numeros.reduce((acumulador, valorActual)=> acumulador * valorActual, 1);
}