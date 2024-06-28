const leia = require('readline-sync');

let nome;
let idade;

console.log("Olá, seja bem-vinde! Vamos consultar o melhor plano para voce.");

nome = leia.question("\nPara seguir, digite o seu nome: ");

idade = leia.questionInt("\nCerto " + nome + ", agora precisamos que voce digite a sua idade: ");

if (idade <= 10){
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$100,00"); }
    else if (idade <= 29){
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$200,00"); }
    else if (idade <= 45){
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$300,00"); }
    else if (idade <= 59){
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$500,00"); }
    else if (idade <= 65){
    console.log("\nTemos um plano de saude perfeito para voce no valor de R$600,00"); }
    else if (idade > 65){
    console.log("\nTemos um plano de saude perfeito para voce apartir de R$1000,00"); }


 
