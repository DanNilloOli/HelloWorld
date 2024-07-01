const leia = require("readline-sync");

let soma = 0;
let numero;

console.log("\n+-------------+ Soma de numeros positivos +-------------+");

do {
    numero = leia.questionInt("Digite um numero (0 para sair): ");
    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0);

console.log("O total da soma de todos os numeros positivos é: " + soma + "!");
