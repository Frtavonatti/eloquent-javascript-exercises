// EJERCICIO 1: Mínimo
// Define una función que acepte dos argumentos y devuelva el menor de los dos.

function min(a, b) {
    return Math.min(a, b)
}

console.log(min(3, 10)); // Esperado: 3
console.log(min(7, -2)); // Esperado: -2




// EJERCICIO 2: Recursión
// Define una función recursiva isEven que acepte un número entero positivo y devuelva true si es par y false si es impar.

function isEven(n) {
    if (n < 0) {
        return isEven(-n)
    } else if (n === 0) {
        return true
    } else if (n === 1) {
        return false
    } else {
        return isEven(n - 2)
    }
}

console.log(isEven(50));  // Esperado: true
console.log(isEven(75));  // Esperado: false
console.log(isEven(-1));  // Esperado: false
console.log(isEven(-18)); // Esperado: true




// EJERCICIO 3: Contando frijoles
// Escribe una función contarBs que devuelva cuántas veces aparece la letra 'B' en una cadena.

function contarBs(cadena) {
    let count = 0

    for (let index = 0; index < cadena.length; index++) {
        const letra = cadena[index];
        if (letra === 'B' || letra === 'b') {
            count++
        }
    }

    return count
}

console.log(contarBs("Bobby Brown Bought a Big Balloon")); // Ejemplo: 7
