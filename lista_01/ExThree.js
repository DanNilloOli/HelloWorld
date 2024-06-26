console.log("Olá, seja bem-vinde!");

const leia = require('readline-sync');

let salariobruto;
let adnoturno;
let horaextra;
let descontos;
let salarioliquido;

console.log("Vamos calcular o seu salario liquido!");

salariobruto = leia.questionInt("\nDigite o seu salario bruto: ", {limitMessage:'Digite o seu salario bruto'});
adnoturno = leia.questionInt("\nDigite o seu adicional noturno do mes: ", {limitMessage:'Digite o seu adicional noturno mensal'});
horaextra = leia.questionInt("\nDigite as suas horas extras do mes: ", {limitMessage:'Digite as suas horas extras do mes'});
descontos = leia.questionInt("\nDigite o seu desconto mensal: ", {limitMessage:'Digite o seu desconto mensal'});

salarioliquido = salariobruto + adnoturno + (horaextra * 5) - descontos;

console.log("O seu salario liquido será de: R$ " + salarioliquido);

