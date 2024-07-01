const readline = require('readline-sync');

let menoresDe21 = 0;
let maioresDe50 = 0;
let idade;

while (true) {
    idade = readline.questionInt("Digite a idade (ou um numero negativo para sair): ");

    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        menoresDe21++;
    } else if (idade > 50) {
        maioresDe50++;
    }
}

console.log("Total de pessoas com menos de 21 anos: " + menoresDe21);
console.log("Total de pessoas com mais de 50 anos:  "  + maioresDe50);