var prompt = require("prompt-sync")();

const nome = prompt("digite seu nome: ");
const idade = prompt("digite sua idade: ");

if(idade >= 18){
    console.log(`${nome} pode beber`);
    
}else{
    console.log("não pode");

}

