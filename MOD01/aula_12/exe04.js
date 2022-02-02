// Criar uma função que junte dois arrays e retorno o resultado como um novo array

function juntarArray (array1, array2){
    const array = [];

    for(let elemento of array1){
        array.push(elemento);
    }

    for(let elemento of array2){
        array.push(elemento);
    }    
    return array;
}

const lista1 = [1,2,3];
const lista2= [4,5,6];

const listasJuntas = juntarArray(lista1, lista2);

console.log(listasJuntas);
