//Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

var prompt = require("prompt-sync")();

const numero = +prompt("escolha um numero: ");

for(let i = numero-1; i > 0; i--){
    console.log(numero*i)
}