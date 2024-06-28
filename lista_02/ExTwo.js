const leia = require('readline-sync');

let num1;
let num2;
let num3;
let combo;

console.log("Vamos jogar maior de dois? Funciona assim: Voce escolhe 3 numeros inteiros (Sim, 3) e entao somamos os 2 primeiros numeros e mostramos se ele é maior que o terceiro.")

num1 = leia.questionInt("\nBora, digite o primeiro numero: ");
num2 = leia.questionInt("\nBeleza, agora o segundo: ");
num3 = leia.questionInt("\nTerceiro numero, capricha nesse ein: ");

console.log("\nDeixa eu pensar....");

combo = num1+num2;

if (combo > num3) {
    console.log("Os dois primeiros numeros somados sao maiores que o terceiro.");
} else if (combo === num3) {
    console.log("Vixi, deu empate!");
} else {
    console.log("O terceiro numero foi maior que os dois primeiros somados.");
}

 

