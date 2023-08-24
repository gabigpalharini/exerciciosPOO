"use strict";
class Pessoa {
    constructor(nome, idade, comidafavorita) {
        this.nome = nome;
        this.idade = idade;
        this.comidafavorita = comidafavorita;
    }
    cumprimentar() {
        let msgHabilitacao = "já posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = "Não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos " + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("minha(s) comidas (s) favorita(s)");
        for (let i = 0; i <= this.comidasFavoritas.length; i++)
            console.log(this.comidafavorita[i]);
    }
}
let pessoa1 = new Pessoa("João", 21, ["macarrão, açaí, batata frita"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
