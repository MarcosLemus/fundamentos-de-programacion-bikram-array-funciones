//Arrays


let arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Funciones


function suma (num1, num2) {
    return num1 + num2;
}

suma(4 + 6);


function potenciacion(num1, num2){
    return Math.pow(num1, num2);
}
const resultado = potenciacion(5, 9);
console.log(resultado);



  
function separarPalabras(frase) {
    const palabras = frase.split(' ');
    return palabras;
}
  
const frase = 'hola mundo';
const palabrasSeparadas = separarPalabras(frase);
  
console.log(palabrasSeparadas);



function repetirString(frase, num){
    let palabras = frase.repeat(num);
    return palabras;
}

repetirString('hola', 5);

/*
- [ ] 9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es**** 
*/

function esPrimo(num){

    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }else{
            return true;
        }
    }
}

esPrimo(5);

/*
[ ] 10.-  Crear la función **ordenarArray** que acepta como argumento **un array de números** y devuelva un **array ordenado de menor a mayor**

- [ ] 11.- Crear la función **obtenerPares** que acepta como argumento **un array de números** y devuelva un **array con los elementos pares**

- [ ] 12.- Crear la función **pintarArray** que acepte como argumento **un array** y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**

- [ ] 13.- Crear la función **arrayMapi** que acepte como argumento **un Array y una función** y devuelva **un array en el que se haya aplicado la función a cada elemento del array**

- [ ] 14.- Crear la función **eliminarDuplicados** que acepte como argumento **un array** y devuelva **un array en el que se hayan eliminado los duplicados**
*/

const numbers = [4, 2, 5, 1, 3];
function ordenarArray (numArr) {
  return numArr = numbers.sort();
};
console.log(ordenarArray);




function obtenerPares(numArr){
    let numeros = 0;
    for (let i = 0; i < numeros.length; i++) {
        numArr = numeros[i];
    }

    return numArr;

};

obtenerPares();

function pintarArray(arr){

};


//Arrays

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'Marcos'], [225, 'Lemus'], [298, 'casa']];


//Funciones

function multiplicacion(a,b){
    return a * b;
}
multiplicacion();

function division(a,b){
    return a / b;
}
division();

function esPar(num){
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}
esPar();

const arrayFunciones = [
    function suma(a, b) {
      return a + b;
    },
    function resta(a, b) {
      return a - b;
    },
    function multiplicacion(a, b) {
      return a * b;
    },
  ];
  
  /*
  # Mezclando arrays y funciones ###

- [ ] 23.-  Crear la función **ordenarArray2** que acepta como argumento **un array de números** y devuelva un **array ordenado de mayor a menor**

- [ ] 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números** y devuelva un **array con los elementos impares**

- [ ] 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

- [ ] 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**
*/
