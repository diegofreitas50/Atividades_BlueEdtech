//Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem
//"Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

var prompt = require("prompt-sync")();

let a = 0;

while (a < 1 || a > 5) {
  a = +prompt("Digite o primeiro número entre 1 e 5: ");
  if (a < 1 || a > 5) {
    console.log("número inválido");
  }
}

let b = 0;

while (b < 8 || b > 15) {
  b = +prompt("Digite o segundo número entre 8 e 15: ");
  if (b < 8 || b > 15) {
    console.log("número inválido");
  }
}

if (a % b == 0 || b % a == 0) {
  console.log("são múltiplos");
} else {
  console.log("não são múltiplos");
}
