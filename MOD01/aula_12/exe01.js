/*Exercicios:
# Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular 
(largura e comprimento) e mostre a área do terreno:
*/
var prompt = require("prompt-sync")();

function area (largura, comprimento){
    let calculo = largura * comprimento
    return calculo
}

let larg = +prompt(`Digite a largura do terreno: `);
let compr = +prompt(`Digite a comprimento do terreno: `);

let resultado = area(larg, compr);

console.log(resultado);