const leia = require('readline-sync');

let nome;
let idade;
let primeiravez;

console.log("Olá, primeiramente gostariamos de agradecer o seu interesse em realizar a doacao!");

nome = leia.question("\nQue tal comercarmos com um match para ver se esta tudo okay? Me informe seu nome:");
idade = leia.questionInt("\nObrigado  " + nome + " ;)" + "\n\nAgora a sua idade: ");
primeiravez = leia.question("\nPor fim, essa e a sua primeira doacao? (sim/nao)");

console.log("\nHm... Certo, só um momento...");

if (idade >= 18 && idade <= 59) {
        console.log("\nPerfeito! Voce esta apto para doacao.");} 
else if (idade >= 60 && idade <= 69) {
    if (primeiravez === 'não') {
        console.log("\nPerfeito! Voce esta apto para doacao.");
    } else if (primeiravez === 'sim') {
        console.log("Infelizmente voce nao esta apto para seguir com a doacao, mas nao fique triste! \nVoce pode nos ajudar compartilhando para que nossa campanha alcance mais pessoas :)");
    } else {
        console.log("\nResposta invalida para a pergunta sobre a primeira doacao.");
    }
    } else {
        console.log("\nInfelizmente, devido aos requisitos de idade, voce nao esta apto para seguir com a doacao, mas nao fique triste! \nVoce pode nos ajudar compartilhando para que nossa campanha alcance mais pessoas :)");
}




