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