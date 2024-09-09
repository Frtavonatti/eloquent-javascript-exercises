// Ejercicio 1: Haciendo un triángulo con bucles
let gato = '#'; 

for (let index = 0; index < 3; index++) {
    gato += '#';
    console.log(gato);
}

// Ejercicio 2: FizzBuzz
for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log('FizzBuzz')
    } else if (index % 3 === 0) {
        console.log('Fizz');
    } else if (index % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(index);
    }
} 

// Ejercicio 3: Tablero de Ajedrez
// Mi solución inicial

// let size = 8
// let negro = '#'
// let blanco = ' '
// let fila = ''
// let tablero = ''

// for (let index = 1; index <= size; index++) {
//     fila = '';

//     if (index % 2 === 0) {
//         while (fila.length < size) {
//             fila += blanco
//             fila += negro 
//         }
//     } else {
//         while (fila.length < size) {
//             fila += negro 
//             fila += blanco
//         }
//     }      
    
//     tablero += fila + '\n'
// }
// console.log(tablero)

// Ejercicio 3: Otra alternativa
    let size = 8;
    let tablero = '';

for (let fila = 0; fila < size; fila++) {
    for (let col = 0; col < size; col++) {
        tablero += (fila + col) % 2 === 0 ? '#' : ' ';
    }
    tablero += '\n'; 
}

console.log(tablero);