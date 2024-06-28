const leia = require('readline-sync');

let nome;
let idade;

console.log("Olá, seja bem-vinde! Vamos consultar o melhor plano para voce.");

nome = leia.question("\nPara seguir, digite o seu nome: ");

console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

idade = leia.questionInt("\nCerto " + nome + ", agora precisamos que voce escolha a opção de acordo com a sua idade: ")

switch(idade){
   case 1:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$100,00");
      break;
   case 2:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$200,00");
      break;
   case 3:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$300,00");
      break;
   case 4:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$500,00");
      break;
   case 5:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$600,00");
      break;
   case 6:
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$1000,00");
      break;

   default:console.log("Opa! algo deu errado, vamos tentar denovo?");
}