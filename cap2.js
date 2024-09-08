// Ejercicio 1: Haciendo un triángulo con bucles
let gato = '#'; 

for (let index = 0; index < 3; index++) {
    gato += '#';
    console.log(gato);
}

// Ejercicio 2: FizzBuzz
// Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
//     Para los números divisibles por 3, imprime "Fizz" en lugar del número, 
//     y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.
// Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 
//     (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).

for (let index = 1; index < 10; index++) {
    if (index % 3 === 0) {
        console.log('Fizz');
    } else if (index % 3 === 0) {
        console.log('Buzz');
    } else {
        console.log(index);
    }
} 