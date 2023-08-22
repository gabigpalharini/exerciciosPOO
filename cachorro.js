"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentar() {
        return "oi, eu sou " + this.nome + "um "
            + this.raca + " de " + this.idade + "anos ";
    }
    apresentarPara(humano) {
        return "olá " + humano + " eu sou " + this.nome + "um "
            + this.raca + " de " + this.idade + "anos ";
    }
}
let rex = new Cachorro("Rex ", "Labrador", 3);
let thor = new Cachorro("Thor ", "Bulldog", 2);
console.log(rex.apresentar());
console.log(thor.apresentar());
console.log(rex.apresentarPara("Gabi,"));
