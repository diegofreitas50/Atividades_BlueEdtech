const prompt = require('prompt-sync')();

//aula sobre for, for in e for of
const nomes = ["Diego", "Freitas"]

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i].toUpperCase());  //transcreve todos os itens com letra maiúscula
//     console.log(nomes[i].toLowerCase());  //transcreve todos os itens com letra minuscula
    
// }

for (let i = nomes.length - 1; i >= 0; i--) {
    const nome = nomes[i];
    console.log(nome);
   
    
}

//for of

// for (const nome of nomes){
//     console.log("nome", nome);
// }

//for in
for (const i in nomes){
    const nome = nomes[i];
    console.log(nome, i);
}