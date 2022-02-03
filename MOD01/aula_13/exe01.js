// Crie um objeto pessoa com os atributos: nome, idade,
//  peso e altura. Além disso ela deve ter os métodos: 
//  Envelhecer, engordar, emagrecer, crescer. Por padrão,
//   a cada ano que nossa pessoa envelhece até os 21 anos, 
//   ela deve crescer 0,5 cm. Crie um método bio que retorna 
//   uma string com todas as informações da pessoa.

const pessoa = {
    nome: "diego",
    idade: 15,
    peso: 50,
    altura: 160,
    envelhecer: function(){
        this.idade++;
        if(this.idade < 22){
            this.altura += 0.5;        
        };
    },
    bio: function(){
        return (`${this.nome}, com ${this.idade} de idade, tem ${this.peso} Kg, e mede ${this.altura} de altura`);
    }

};


pessoa.envelhecer();
console.log(pessoa.bio());

///////////////////////////////

const pessoa = {
    nome: "Leonardo",
    idade: 20,
    peso: 100,
    altura: 188,
    envelhecer: envelhecer = (x) => {
        for (let i = 0; i < x; i++) {
            pessoa.idade++;
            if(pessoa.idade < 22){
                pessoa.crescer(0.5);  
            }
        }
    }, 
    engordar: engordar = (x) => {
        pessoa.peso += x;
    }, 
    emagrecer: emagrecer = (x) => {
        pessoa.peso -= x;
    }, 
    crescer: crescer = (x) => {
        pessoa.altura += x;
    },
    bio: bio = () => {
        return `${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.peso} Kg, ${pessoa.altura} cm`;
    }
}

console.log(pessoa.bio());
pessoa.envelhecer(4);
console.log(pessoa.bio());