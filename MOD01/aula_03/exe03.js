//Faça um programa que leia um número, e informe se ele é par ou impar

var prompt = require("prompt-sync")();

const num = +prompt("Digite a um número: ");

if(num%2 == 0){
    console.log('par')
}else{
    console.log('impar')
}