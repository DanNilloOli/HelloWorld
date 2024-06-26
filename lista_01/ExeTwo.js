console.log("Olá, seja bem-vinde!");

const leia = require('readline-sync');

let bimestre1;
let bimestre2;
let bimestre3;
let bimestre4;
let notafinal;

console.log("Vamos calcular sua nota final!");

bimestre1 = leia.questionInt("\nDigite a nota de fechamento do 1 bimestre em numero inteiro: ", {limitMessage: 'Digite a nota do 1° bimestre'});
bimestre2 = leia.questionInt("\nDigite a nota de fechamento do 2 bimestre em numero inteiro: ", {limitMessage: 'Digite a nota do 2° bimestre'});
bimestre3 = leia.questionInt("\nDigite a nota de fechamento do 3 bimestre em numero inteiro: ", {limitMessage: 'Digite a nota do 3° bimestre'});
bimestre4 = leia.questionInt("\nDigite a nota de fechamento do 4 bimestre em numero inteiro: ", {limitMessage: 'Digite a nota do 4° bimestre'});

notafinal = (bimestre1 + bimestre2 + bimestre3 + bimestre4)/4;

console.log("Sua nota final foi de: " + notafinal);
