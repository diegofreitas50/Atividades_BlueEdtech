// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer,
//  o valor unitário de cada peça1, o nome de uma peça2, 
// o número de peças2 e o valor unitário de cada peça2. Após, calcule e mostre o valor a ser pago.

var prompt = require("prompt-sync")();

let nomeP1 = prompt('Digite o nome da peça 1: ');
let valorP1 = +prompt('Digite o valor da peça 1: ');
let quantP1 = +prompt(`Digite a quantidade de ${nomeP1}: `);
const resultado1 = valorP1 * quantP1;

let nomeP2 = prompt('Digite o nome da peça 2: ');
let valorP2 = +prompt('Digite o valor da peça 2: ');
let quantP2 = +prompt(`Digite a quantidade de ${nomeP2}: `);
const resultado2 = valorP2 * quantP2;

const resultadoFinal = resultado1 + resultado2;

console.log(`Foram vendidas as peças ${nomeP1} e ${nomeP2}, sendo ${quantP1} de ${nomeP1} e ${quantP2} de ${nomeP2}\nO valor a ser pago é de ${resultadoFinal} R$`);