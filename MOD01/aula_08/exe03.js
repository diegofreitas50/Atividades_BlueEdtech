//Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

var prompt = require("prompt-sync")();

const numero = +prompt("digite um numero para fazer a tabuada: ");

for(let i = 1; i < 11; i++){
    console.log(`${numero} x ${i} = ${numero*i}`);
}