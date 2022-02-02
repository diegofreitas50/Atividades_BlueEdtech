// Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual 
// foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o 
// número é maior ou menor que o palpite. 
// No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

var prompt = require("prompt-sync")();

let numSorteado = Math.floor(Math.random() * 10); //Math.floor arredonda pra cima e o math.random sorteia um numero quebrado
let palpites = 1;
let aposta = +prompt("Tente adivinhar o número sorteado de 0 a 10: ");

do {
    if (aposta < 0 || aposta > 10){
        aposta = +prompt("Número inválido, tente inserir um número de 0 a 10: ");    
    }else if (aposta < numSorteado){
        aposta = +prompt(`O número sorteado é maior que ${aposta}, tente novamente: `);
        palpites++
    }else if (aposta > numSorteado){
        aposta = +prompt(`O número sorteado é menor que ${aposta}, tente novamente: `);
        palpites++
    }
}while(aposta != numSorteado);

if (aposta == numSorteado) {
    console.log (`parabéns, você acertou em ${palpites} tentativas`);
}