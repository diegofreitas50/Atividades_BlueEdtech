//Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem
//"Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. 

var prompt = require("prompt-sync")();

const a = prompt("Digite o primeiro número: ");
const b = prompt("Digite o segundo número: ");

if (a%b == 0 || b%a == 0){
    console.log("são múltiplos")
}else{
    console.log("não são múltiplos")
}