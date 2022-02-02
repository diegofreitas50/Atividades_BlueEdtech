// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. 
// Imprima a média de idade e de altura.

var prompt = require("prompt-sync")();

const idade = [];
const altura = [];
let controle = 0;
let mediaI = 0;
let mediaA = 0;

while(controle < 5){
    idade.push(+prompt(`${controle+1} - digite sua idade: `));
    altura.push(+prompt(`${controle+1} - digite sua altura: `));
    mediaI += idade[controle];
    mediaA += altura[controle];
    controle++
}

mediaI = mediaI/idade.length;
console.log(`A média de idade é ${parseInt(mediaI)} anos.`);

mediaA = mediaA/altura.length;
console.log(`A média de altura é ${mediaA.toFixed(2)} metros`);