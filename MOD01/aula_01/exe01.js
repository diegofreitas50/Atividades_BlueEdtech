/*Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.*/
var prompt = require("prompt-sync")();

const notaA = +prompt("Digite a primeira nota: ");
const notaB = +prompt("Digite a segunda nota: ");

const calcule = (notaA*4)+(notaB*6)

const resultado = calcule / 10;
console.log(`A média é`, resultado);
