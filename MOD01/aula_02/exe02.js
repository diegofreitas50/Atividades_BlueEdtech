/*Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, 
o CEP na terceira e o telefone na quarta.*/

var prompt = require("prompt-sync")();

let nome = prompt('Digite seu nome: ');
let end = prompt('Seu endereço: ');
let cep = prompt('Seu CEP: ');
let tel = prompt('Seu telefone: ');

console.log(`\nNome: ${nome}\nEndereço: ${end}\nCEP: ${cep}\nTelefone: ${tel}`);