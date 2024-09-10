// EJERCICIO 1: Estructuras de Lista

// Función range que toma dos argumentos (inicio y fin) y devuelve un array con los números en el rango
function range(inicio, fin, paso = 1) {
    let array = []

    if (paso < 0) {
        for (let num = inicio; num >= fin; num += paso) {
            array.push(num)
        }
    } else {
        for (let index = inicio; index <= fin; index += paso) {
            array.push(index)
        }
    }

    return array
  }

  // Asignación adicional: modifica la función range para que tome un tercer argumento opcional (paso)
  console.log(range(5, 2, -1)); // Debería devolver [5, 4, 3, 2]
  console.log(range(1, 10, 2)); // Debería devolver [1, 3, 5, 7, 9]

  // Función sum que toma un array de números y devuelve la suma de los números
function sum(array) {
    let count = 0

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        count += element
    }
    return count
  }
  
  // Ejemplo de uso
    console.log(sum(range(1, 10))); // Debería devolver 55




// EJERCICIO 2: Invertir un Array
// Función reverseArray que toma un array y devuelve un nuevo array con los elementos invertidos
function reverseArray(array) {
    let newArray = [];
    
    for (let index = (array.length - 1); index >= 0; index--) {
        const element = array[index];
        newArray.push(element)
    }
    return newArray;
}

// Ejemplos de uso:
let arrayOriginal = [1, 2, 3, 4, 5];

let arrayInvertido = reverseArray(arrayOriginal);
console.log(arrayInvertido); // Debería devolver [5, 4, 3, 2, 1]
console.log(arrayOriginal);  // El array original debería seguir igual [1, 2, 3, 4, 5]



// Función reverseArrayInPlace que invierte los elementos del array original (modifica el array dado)
function reverseArrayInPlace(array) {
    let originalLength = array.length;

    for (let index = (originalLength - 2); index >= 0; index--) {
        const element = array[index];
        array.push(element)
    }
    for (let i = 0; i < originalLength - 1; i++) {
        array.shift(); // Eliminamos los primeros elementos
    }
    return array;
}

// Ejemplos de uso:
let otherArray = [100, 200, 300, 400, 500];

reverseArrayInPlace(otherArray);
console.log(otherArray);  // Ahora el array original debería estar invertido [500, 400, 300, 200, 100]




// EJERCICIO 3: Lista


// Tareas:

// 1. Escribe una función arrayToList que construya una estructura de lista como la mostrada
//    cuando se le da [1, 2, 3] como argumento.

let exampleList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
        value: 3,
        rest: null
        }
    }
};

const exampleArray = [1, 2, 5]

// function arrayToList (array) {
//     let copyOfArray = [...array]

//     if (copyOfArray.length === 0) return null
//     return {
//         value: copyOfArray[0],
//         rest: arrayToList(copyOfArray.slice(1)) 
//       };
// }

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }

console.log(arrayToList(exampleArray));


// 2. Escribe una función listToArray que produzca un array a partir de una lista.

// 3. Agrega la función auxiliar prepend, que toma un elemento y una lista y crea una nueva lista
//    que añade el elemento al principio de la lista de entrada.

// 4. Agrega la función nth, que toma una lista y un número y devuelve el elemento en la posición dada 
//    en la lista (siendo cero el primer elemento) o undefined cuando no hay tal elemento.

// 5. Escribe una versión recursiva de nth.



// Ejemplos de test:

// 1. Prueba de arrayToList
let list = arrayToList([1, 2, 3]);
console.log(JSON.stringify(list)); 
// Debería imprimir: {"value":1,"rest":{"value":2,"rest":{"value":3,"rest":null}}}

// 2. Prueba de listToArray
let array = listToArray(list);
console.log(array); 
// Debería imprimir: [1, 2, 3]

// 3. Prueba de prepend
let newList = prepend(0, list);
console.log(JSON.stringify(newList)); 
// Debería imprimir: {"value":0,"rest":{"value":1,"rest":{"value":2,"rest":{"value":3,"rest":null}}}}

// 4. Prueba de nth
console.log(nth(list, 1)); 
// Debería imprimir: 2

// 5. Prueba de nth recursivo
console.log(nth(list, 2)); 
// Debería imprimir: 3

// Prueba de nth para un índice inexistente
console.log(nth(list, 5)); 
// Debería imprimir: undefined




// EJERCICIO 4: COMPARACIÓN PROFUNDA
// Tarea: Escribir la función deepEqual que compara dos valores u objetos profundamente.
// 1. Si ambos valores son estrictamente iguales (===), retorna true.
// 2. Si uno de los valores es null o no es un objeto, retorna false.
// 3. Si ambos valores son objetos, compara sus propiedades usando Object.keys.
// 4. Si las propiedades tienen el mismo número de claves, compara los valores de cada propiedad recursivamente con deepEqual.

// Función deepEqual
function deepEqual(a, b) {
    // Caso 1: Si son estrictamente iguales, devolver true.
    if (a === b) return true;

    // Caso 2: Si alguno de los dos es null o no es un objeto, devolver false.
    if (a === null || typeof a !== "object" || b === null || typeof b !== "object") {
      return false;
    }

    // Caso 3: Si ambos son objetos, compara las claves y sus valores recursivamente.
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    // Verifica si tienen el mismo número de propiedades.
    if (keysA.length !== keysB.length) return false;

    // Recorre todas las claves y compara los valores.
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
}

// Pruebas para validar el funcionamiento de deepEqual

let obj = { here: { is: "an" }, object: 2 };

// Debería devolver true porque el objeto es igual a sí mismo.
console.log(deepEqual(obj, obj)); // true

// Debería devolver false porque { is: "an" } no es estrictamente igual a { is: "an" }.
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // true

// Debería devolver false porque los objetos no son iguales.
console.log(deepEqual(obj, { here: 1, object: 2 })); // false