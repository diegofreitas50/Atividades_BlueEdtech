//Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

var prompt = require('prompt-sync')();

let number = 1;

do{
    number = +prompt("Digite um número par: ");
    if (number % 2 != 0){
        console.log(`${number} não é par!`);
    }else{
        console.log(`${number} é par!`);
    }
}while (number % 2 != 0);