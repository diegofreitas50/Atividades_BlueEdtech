// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar 
// descobrir qual foi o número escolhido pelo computador. 
// O programa deverá escrever na tela se o usuário venceu ou perdeu.

var prompt = require("prompt-sync")();

let numSorteado = Math.floor(Math.random() * 10); //Math.floor arredonda pra cima e o math.random sorteia um numero quebrado
let tentativas = 1;
let aposta = +prompt("Tente adivinhar o número sorteado de 0 a 10, Você tem 5 tentativas: ");

do {
    if (tentativas == 5){
        console.log (`Número limite de tentativas atingido. O número era ${numSorteado}. Você perdeu!`);
        break;
    }else if(aposta < 0 || aposta > 10){
        aposta = +prompt("Número inválido, tente inserir um número de 0 a 10: ");    
    }else if (aposta != numSorteado){
        aposta = +prompt("Você errou Tente novamente: ");
        tentativas++
    }
}while(aposta != numSorteado);

if (aposta == numSorteado) {
    console.log ("parabéns, você acertou");
}

