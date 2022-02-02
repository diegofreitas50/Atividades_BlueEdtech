var prompt = require("prompt-sync")();

const opcao1 = "bife com batata frita";
const opcao2 = "lasanha a bolonhesa";
const opcao3 = "sushi e sashimi";
let escolhaop = "Nenhuma";

console.log(
  `As opções do buffet são: \n 1- ${opcao1} \n 2- ${opcao2} \n 3- ${opcao3} \n`
);

let escolhanum = +prompt("Qual opção você prefere?");

if (escolhanum == 1) {
  escolhaop = `${opcao1}`
} else if (escolhanum == 2) {
  escolhaop = `${opcao2}`
} else if (escolhanum == 3) {
  escolhaop = `${opcao3}`
}

console.log(`\nVocê escolheu: ${escolhaop}`);
