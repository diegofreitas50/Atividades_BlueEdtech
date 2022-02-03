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
    altura: 1.6,
    envelhecer: function(){
        this.idade++;
        if(this.idade < 21){
            this.altura += 0.5
            this.peso++
        };
    },
    bio: function(){
        return (`${this.nome}, com ${this.idade} de idade, tem ${this.peso} Kg, e mede ${this.altura} de altura`);
    }

};


pessoa.envelhecer();
console.log(pessoa.bio());