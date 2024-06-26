console.log("Olá, seja bem-vinde!");

const leia = require('readline-sync');

let num1;
let num2;
let num3;
let num4;
let diferenca;

console.log("Vamos calcular a diferenca entre os times de numeros!");

num1 = leia.questionInt("\nBora! escolha o primeiro numero do time 1: ",{limitMessage:'Escolha o numero 1'});
num2 = leia.questionInt("\nBeleza, escolha o segundo numero do time 1: ",{limitMessage:'Escolha o numero 2'});
num3 = leia.questionInt("\nOkay, agora escolha o primeiro numero do time 2: ",{limitMessage:'Escolha o numero 3'});
num4 = leia.questionInt("\nEita, está acabando... escolha o segundo numero do time 2: ",{limitMessage:'Escolha o numero 4'});

diferenca = (num1*num2) - (num3*num4);

console.log("Uau... a diferença entre os dois times foi de: " + diferenca);




