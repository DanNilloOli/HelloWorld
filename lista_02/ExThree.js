const leia = require('readline-sync');
 
let quantidade;
let cardapio;
let valortotal;

valortotal = (quantidade * cardapio);

console.log("Olá, seja bem-vinde a lanchonete PagueMais! posso anotar o seu pedido?");

console.log("\n\nNosso cardapio:");

console.log("\n 1 -- Cachorro Quente R$ 10.00");
console.log("\n 2 -- X-Salada R$ 15.00");
console.log("\n 3 -- X-Bacon R$ 18.00");
console.log("\n 4 -- Bauru R$ 12.00");
console.log("\n 5 -- Refrigerante R$ 8.00");
console.log("\n 6 -- Suco de laranja R$ 13.00");

cardapio = leia.questionInt("\nE entao, vai querer oque hoje? (Escolha um numero no cardapio)");

switch(cardapio){
    case 1:{
    console.log("\nO nosso Cachorro Quente tem 3 salsichas e é bem completo");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 10.00;
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;}
   case 2:
    console.log("\nEu amo esse X-salada...");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 15.00;
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;
   case 3:
    console.log("\nX-Bacon ne? Vou pedir para a cozinha caprichar");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 18.00
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;
   case 4:
    console.log("\nEsse Bauru é uma delicia");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 12.00
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;
   case 5:
    console.log("\nTemos refri de lata, 360ml");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 8.00
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;
   case 6:
    console.log("\nAs laranjas estao fresquinhas, o suco teve estar docinho");
    quantidade = leia.questionInt("\nSerao quantos?");
    valortotal = quantidade * 13.00
    console.log("\nCertinho, o total deu R$ " + valortotal.toFixed(2));
      break;
}
