// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias. 
// Também considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

let diasTotais = +prompt('Digite quantos dias de vida voçê tem: ');

const anos = parseInt(diasTotais / 365);
const restoMeses = parseInt(diasTotais % 365);
const meses = parseInt(restoMeses / 30);
const dias = parseInt(restoMeses % 30);

console.log(`você tem ${anos} anos, ${meses} meses e ${dias} dias`);