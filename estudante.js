"use strict";
class Estudante {
    constructor(nomeestudante, idadeestudante, notas) {
        this.nomeestudante = nomeestudante;
        this.idadeestudante = idadeestudante;
        this.notas = notas;
    }
    media() {
        let totalnotas = 0;
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            totalnotas = totalnotas + this.notas[i];
        }
        media = totalnotas / this.notas.length;
        let msgmedia = "Parabéns " + this.nomeestudante + "sua média é " + media + "e você está aprovado";
        if (media < 7) {
            msgmedia = " sua média  é " + media + "e você precisa estudar mais para melhorar seu desempenho";
        }
        return msgmedia;
    }
}
let minhamedia = new Estudante("Maria,", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(minhamedia.media());
