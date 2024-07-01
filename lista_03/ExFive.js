let leia = require("readline-sync");

let notas = [];
let medias = [];

console.log("\n||||||||||||| Vamos calcular as medias |||||||||||||");

for (let i = 0; i < 10; i++) {
    let notasParticipante = [];
    console.log(`\nDigite as notas do(a) aluno(a) ${i + 1}:`);
    for (let j = 0; j < 4; j++) {
        let nota = leia.questionFloat(`Nota do ${j + 1} bimestre: `);
        notasParticipante.push(nota);
    }
    notas.push(notasParticipante);
}

for (let i = 0; i < 10; i++) {
     let soma = 0;
    for (let j = 0; j < 4; j++) {
        soma += notas[i][j];
    }
    media = soma / 4;
    medias.push(media);
}

for (let i = 0; i < 10; i++) {
    console.log(`\n\nA media do(a) aluno(a) ${i + 1} e: ${medias[i].toFixed(2)}`);
};
console.log("\n||||||||||||| ||||||||||||| |||||||||||||");

