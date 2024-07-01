const leia = require("readline-sync");

let vetor;
let numero;
let posicao;

    vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

function pesquisarNumero(numero, vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            return i;
        }
    }
    return -1;}


    numero = leia.questionInt("Digite um numero para pesquisar no vetor: ");


    posicao = pesquisarNumero(numero, vetor);

if (posicao !== -1) {
    console.log("O numero " + numero + " esta na posicao " + posicao + " do vetor.");
} else {
    console.log("Nao consegui localizar esse numero no vetor :( ");
}
