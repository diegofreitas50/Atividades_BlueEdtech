// Faça um programa de cadastro de clientes que mostre um 
// menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

var prompt = require('prompt-sync')();

const nome = prompt("Digite seu nome: ");
console.log();
const op1 = "ovos com bacon";
const op2 = "omelete";
const op3 = "salada de frutas";
let escolha = 4

console.log (`Escolha uma opção\n1 - ${op1}\n2 - ${op2}\n3 - ${op3}\n`);

//validação da resposta

while (escolha > 3 || escolha < 0){
    escolha = +prompt("Qual a sua escolha? ");
    if (escolha > 3 || escolha < 0){
        console.log("Erro");
    }
}

if(escolha == 1){
    escolha = op1
}else if(escolha == 2){
    escolha = op2
}else if(escolha == 3){
    escolha = op3
}
console.log(`${nome}, sua escolha foi ${escolha}`);


