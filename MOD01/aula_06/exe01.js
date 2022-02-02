// Faça um Programa que leia 20 números inteiros e armazene-os num array.
// Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.

var prompt = require("prompt-sync")();

const numeros = [];
const numPar = [];
const numImpar = [];
let controle = 0;

while(controle < 20){
    numeros.push(+prompt(`${controle+1} - Digite um número inteiro: `));
    if(numeros[controle]%2 == 0){
        numPar.push(numeros[controle]);
    }else{
        numImpar.push(numeros[controle]);
    }
    controle++
}

console.log("Original: ");
console.log(numeros);
console.log(`Pares - total: ${numPar.length}`);
console.log(numPar);
console.log(`Impares - total: ${numImpar.length}`);
console.log(numImpar);





