// Faça um programa que peça ao usuário digitar a população e a taxa de 
// crescimento populacional de 2 países A e B, sendo que a população do 
// país A deve ser menor que a de B, e a taxa de crescimento de A seja 
// maior. Faça um programa que calcule e escreva o número de anos 
// necessários para que a população do país A ultrapasse 
// ou iguale a população do país B, mantidas as taxas de crescimento.
const prompt = require('prompt-sync')();

let populacaoA = +prompt (`Digite a populaçao do país A: `);
const taxaCrescimentoA = +prompt (`Digite a taxa de crescimento do país A: `);


let populacaoB = +prompt (`Digite a populaçao do país B: `);
const taxaCrescimentoB = +prompt (`Digite a taxa de crescimento do país B: `);


let anos = 0;

while (populacaoA < populacaoB){
    populacaoA *= 1 + (taxaCrescimentoA / 100);
    populacaoB *= 1 + (taxaCrescimentoB / 100);


    anos++
}

console.log(`Levará ${anos} anos para a popupalao A ser maior que B`);