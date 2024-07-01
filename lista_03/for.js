const leia = require('readline-sync');

let numero;
let contador;

numero = leia.questionInt("Faca a tabuada do: ");

for(contador = 1; contador<=10;contador++){
    multiplicacao = numero*contador
    console.log(`${contador} x ${numero} = ${multiplicacao}`)
}


// for(contador = 1; contador<=4;contador++){
//    numero1 = leia.questionInt("Calcule a multiplicação de: ");
//    numero2 = leia.questionInt("Vezes dp mumero: ");
//    console.log(numero + "x" + numero2 + "=" + numero1 * numero2);
//    id (numero % == 0) {
//          cont++ }