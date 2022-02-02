// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido
// Todos os números ímpares do 0 ao número escolhido

var prompt = require("prompt-sync")();

const listaPares = [];
const listaImpares = [];
const numeros = [];
let cont = 0;

let num = +prompt('digite um numero inteiro: ');

while(cont <= num){
    numeros.push(cont);
    if(numeros[cont] % 2 == 0){
        listaPares.push(numeros[cont]);
    }else{
        listaImpares.push(numeros[cont]);
    }
    cont++
}

console.log(listaPares);
console.log(listaImpares);