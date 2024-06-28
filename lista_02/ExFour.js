const leia = require('readline-sync');

let nome;
let codigo;
let salario;
let salarioatualizado;

console.log("\n\nOlá, vamos consultar a sua atulização salarial para o segundo semestre.");

nome = leia.question("\n\nPara comecar, preciso que me informe o seu nome:  ");

console.log("\n 1 -- Gerente ");
console.log("\n 2 -- Vendedor ");
console.log("\n 3 -- Supervisor ");
console.log("\n 4 -- Motorista ");
console.log("\n 5 -- Estoquista ");
console.log("\n 6 -- Técnico de TI");

codigo = leia.questionInt("\nObrigado " + nome + "! Agora preciso que voce selecione o seu cargo (Escolha um codigo de acordo com a tabela acima): ");

switch(codigo) {
    case 1:
    console.log("\nO seu reajuste salarial sera de 10%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 10/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
   case 2:
    console.log("\nO seu reajuste salarial sera de 7%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 7/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
   case 3:
    console.log("\nO seu reajuste salarial sera de 9%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 9/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
   case 4:
    console.log("\nO seu reajuste salarial sera de 6%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 6/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
   case 5:
    console.log("\nO seu reajuste salarial sera de 5%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 5/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
   case 6:
    console.log("\nO seu reajuste salarial sera de 8%");
    salario = leia.questionInt("\nQual o seu salario atual?");
    salarioatualizado = salario + (salario * 8/100);
    console.log("\nNo segundo semestre o seu salario sera atualizado para R$ " + salarioatualizado.toFixed(2));
      break;
}


