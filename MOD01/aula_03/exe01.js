/*
Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.
*/
var prompt = require("prompt-sync")();

const num1 = prompt("digite o primeiro numero: ");
const num2 = prompt("digite o segundo numero: ");

if(num1 > num2){
    console.log(`o maior é ${num1}`);
}else if(num1 == num2){
    console.log("são iguais");
}else{
    console.log(`o maior é ${num2}`);
}