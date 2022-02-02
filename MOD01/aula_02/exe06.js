// Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) 
// e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados,
//  exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).

var prompt = require('prompt-sync')();

const vidas = +prompt('Quantas vidas tem o monstro? ');

const ataque = +prompt('Qual o valor do ataque/turno? ');

console.log(`O jogador irá derrotar o monstro em ${Math.ceil(vidas/ataque)} turnos`);

// Math.ceil arredonda para cima
// Math.floor arredonda para baixo