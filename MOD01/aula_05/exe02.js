// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

var prompt = require('prompt-sync')();

let nome = "nome"
let idade = 0
let salario = 0
let estadoCivil = "c"

// while (nome.length < 4){
//     console.log('nome deve ter mais que 3 caracteres');
//     nome = prompt("digite seu nome: ");
// }

// while (idade < 0 || idade > 150){
//     console.log('idade deve ser entre 0 e 150');
//     idade = +prompt("Digite sua idade: ");
// }

// while (salario < 0){
//     console.log('salário deve ser maior que zero');
//     salario = +prompt("Digite seu salário: ");
// }

// while (estadoCivil != s || estadoCivil != c || estadoCivil != v || estadoCivil != d){
//     console.log('escolha uma opção válida');
//     estadoCivil = prompt(`escolha "s" para Solteiro \n"c" para casado \n"v" para viuvo \n"d" para divorciado`);
// }
//console.log ("cadastro realizado")




do{
    if(nome.length < 4){
        console.log("nome deve ter maior que 3 caracteres");
    }
    nome = prompt ("digite seu nome: ");

}while(nome.length < 4);

do{
    if(idade < 0 || idade > 150){
        console.log("idade deve ser entre 0 e 150 ");
    }
    idade = prompt ("Digite sua idade: ");

}while(idade < 0 || idade > 150);

do{
    if(salario < 0){
        console.log("salário deve ser maior que zero");
    }
    salario = prompt ("Digite seu salário: ");

}while(salario < 0);

do{
    if(estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v" && estadoCivil != "d"){
        console.log("\nescolha uma opção válida\n");
    }
    console.log("Selecione seu estado civil: \n\ns para Solteiro \nc para casado \nv para viuvo \nd para divorciado\n");
    estadoCivil = prompt ("digite uma opção: ");

}while(estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v" && estadoCivil != "d");