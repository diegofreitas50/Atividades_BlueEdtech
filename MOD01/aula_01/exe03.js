/*Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
Calcule e exiba o total de dias que essa pessoa já viveu. 
Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.*/

var prompt = require("prompt-sync")();

let dias = +prompt("Digite quantos dias você tem: ");
let meses = +prompt("Digite quantos meses você tem: ");
let anos = +prompt("Digite quantos anos você tem: ");

const calculo = (anos * 365) + (meses * 30) + dias;
console.log(`Você tem ${calculo} dias de vida`);

