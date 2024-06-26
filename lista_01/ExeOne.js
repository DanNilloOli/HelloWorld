console.log("Olá, seja bem-vinde!");

const leia = require('readline-sync');

let salario;
let abono;
let salarioatualizado;

salario = leia.questionInt("\nPara consultar a sua atualizacao salarial, digite o seu salario em numeros inteiros:   ", {limitMessage:'digite o seu salario em numeros inteiros'});
console.log("O valor digitado foi de:  R$" + salario);

abono = leia.questionInt("\nAgora preciso que voce digite o valor do abono aprovado em sua categoria em numeros inteiros:  ", {limitMessage:'digite o valor do abono aprovado em sua categoria em numeros inteiros'});
console.log("A porcentagem digitada foi de: " + abono + "%");

salarioatualizado = salario+ (salario * abono/ 100);

console.log("Com base nas informacoes passadas, o seu salario sera atualizado para: R$" + salarioatualizado);