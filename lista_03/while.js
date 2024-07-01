const leia = require('readline-sync');

let numero1, numero2, resultado;
let continua;

console.log("\n++++++++++++++++MENU++++++++++++++++")
continua = leia.keyInYNStrict("\nDeseja usar a nossa calculadora?");
console.log("++++++++++++++++++++++++++");

while(continua){
    numero1 = leia.questionInt("Digite o primeiro numero: ");
    numero2 = leia.questionInt("Digite o segundo numero: ");

    resultado = numero1 + numero2;
    console.log("O resultado da soma é: " + resultado);

console.log("\n++++++++++++++++MENU++++++++++++++++")
continua = leia.keyInYNStrict("\nDeseja continuar?");
console.log("++++++++++++++++++++++++++");
}