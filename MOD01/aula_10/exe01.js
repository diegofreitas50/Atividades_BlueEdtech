// Faça um programa que peça um número inteiro e 
// determine se ele é ou não um número primo. Um 
// número primo é aquele que é divisível somente por ele mesmo e por 1.
const prompt = require('prompt-sync')();

const numero = prompt(`Digite um número inteiro: `);

let quantidadeDivisiveis = 0;

for (let i = 1; i <= numero; i++) {
    
    const resto = numero % i;

    if (resto === 0){
        quantidadeDivisiveis ++
    }

    if (quantidadeDivisiveis >= 2 && i < numero){
        quantidadeDivisiveis = -1;
        break;
    }

    //console.log({numero, i, resto, quantidadeDivisiveis});
    
}

if(quantidadeDivisiveis === 2){
    console.log(`o número ${numero} é primo.`);
}else {
    console.log(`o número ${numero} não é primo.`);
}