/*Faça um programa, com uma função que necessite de um argumento.
 A função retorna o valor de caractere ‘P’, se seu argumento for positivo, 
 e ‘N’, se seu argumento for zero ou negativo.
*/

var prompt = require("prompt-sync")();

function positivoNegativo (numero){
    if(numero < 0){
        console.log("N");
    }else{
        console.log("P");
    }
}

let numero = prompt(`Digite um número: `);

positivoNegativo (numero);