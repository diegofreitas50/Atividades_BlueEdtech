//Faça um programa que tenha uma função chamada voto() que vai receber 
//como parâmetro o ano de nascimento de uma pessoa, 
//retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
var prompt = require("prompt-sync")();

function voto (ano){
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;

    if(idade < 16){
        console.log(`sua idade é ${idade}. Voto NEGADO!`);
    }else if (idade >= 18 && idade < 65){
        console.log(`sua idade é ${idade}. Voto OBRIGATÓRIO!`);
    }else{
        console.log(`sua idade é ${idade}. Voto OPCIONAL`);
    }
}

let nascimento = prompt("qual ano voce nasceu? ");

voto (nascimento);

