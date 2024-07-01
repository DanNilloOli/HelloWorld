const leia = require('readline-sync');

let pares = 0;
let impares = 0;
let numero;

console.log("\n******* Vamos separar os numeros pares e impares *******");

for (let contador = 1; contador <= 10; contador++) {
         numero = leia.questionInt("\nDigite o numero: ");

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("\nTotal de numeros pares: " + pares);
console.log("\nTotal de numeros impares: " + impares);