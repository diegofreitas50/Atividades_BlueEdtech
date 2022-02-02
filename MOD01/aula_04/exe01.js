// As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa 
// que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério,
//  baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

var prompt = require("prompt-sync")();

const salario = +prompt('Digite o salário atual: ');
let taxaAumento = (0);

//definindo qual será a taxa de aumento
if(salario > 1500){
    taxaAumento = (0.10);
}else if (salario > 700){
    taxaAumento = (0.10);
}else if (salario > 280){
    taxaAumento = (0.15);
}else{
    taxaAumento = (0.20)
}


//mostrando as informações na tela
console.log(`O salário atual informado é: R$ ${salario.toFixed(2)}
O reajuste para essa faixa salarial é de: ${taxaAumento*100}%
O valor do aumento será de: R$ ${(salario*taxaAumento).toFixed(2)}
O novo salário será de: R$ ${((salario*taxaAumento) + salario).toFixed(2)}`);
