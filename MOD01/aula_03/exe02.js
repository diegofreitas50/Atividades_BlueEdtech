/*
Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a 
média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Em recuperação", se a média for entre cinco e sete;
A mensagem "Reprovado", se a média for menor que cinco.
*/


var prompt = require("prompt-sync")();

const nota1 = +prompt("Digite a primeira nota: ");
const nota2 = +prompt("Digite a segunda nota: ");
const nota3 = +prompt("Digite a terceira nota: ");
const nota4 = +prompt("Digite a quarta nota: ");

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7){
    console.log(`Sua média foi ${media}, você foi APROVADO`);
}else if(media >= 5){
    console.log(`Sua média foi ${media}, ficou em RECUPERAÇÃO`);
}else if(media < 5){
    console.log(`Sua média foi ${media}, você foi REPROVADO`);
}