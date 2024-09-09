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
console.log(otherArray);  // Ahora el array original debería estar invertido [5, 4, 3, 2, 1]