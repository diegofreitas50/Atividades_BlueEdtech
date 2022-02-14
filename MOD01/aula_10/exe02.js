// Peça ao usuário para digitar vários nomes (a quantidade deve ser 
// escolhida por ele). Exiba na tela todos os nomes digitados, porém de 
// maneira invertida (do último para o primeiro), apresente 
// também o maior e o menor nome (caso haja empate, deve mostrar todos).

const prompt = require('prompt-sync')();

const nomes = [];

let maiorNome;
let maioresNomes = [];

let menorNome;
let menoresNomes = [];

const quantidadeNomes = +prompt (`Digite a quantodade de nomes que deseja informar: `);

for (let i = 1; i <= quantidadeNomes; i++){
    const nome = prompt(`digite o ${i}° nome: `);

    nomes.push(nome);

    if (maiorNome === undefined || maiorNome <= nome.length){
        if (maiorNome < nome.length){
            maioresNomes = [];
        }

        maiorNome = nome.length;

        maioresNomes.push(nome);
        
    }

    if (menorNome === undefined || menorNome >= nome.length){
        if (menorNome > nome.length){
            menoresNomes = [];
        }

        menorNome = nome.length;
        
        menoresNomes.push(nome);
    }
}

nomes.reverse();

console.log(nomes);;

console.log({ maiorNome, maioresNomes });
console.log({ menorNome, menoresNomes });