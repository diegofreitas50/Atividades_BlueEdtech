// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
//mostrando uma mensagem de erro e voltando a pedir as informações.

var prompt = require('prompt-sync')();

let nome = prompt("cadastre seu username: ");
let senha = prompt("cadastre sua senha: ");


while(nome == senha){
    console.log("Nome e senha devem ser diferentes");
    nome = prompt("cadastre seu username: ");
    senha = prompt("cadastre sua senha: ");

}

console.log("cadastro finalizado")