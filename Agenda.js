"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarLista(evento) {
        this.eventos.push(evento);
    }
    visualizar() {
        for (let i = 0; i < this.eventos.length; i++) {
            console.log("Evento: " + this.eventos[i].nome + " na data " + this.eventos[i].data + " no horário " + this.eventos[i].horario);
        }
    }
    remover(evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}
const evento1 = new Evento("Meu aniversário", "20/09", "20h");
const evento2 = new Evento("Acampamento Crisma", "17/11", "6h");
const evento3 = new Evento("Ano novo", "31/12", "00h");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarLista(evento1);
minhaAgenda.adicionarLista(evento2);
minhaAgenda.adicionarLista(evento3);
console.log(minhaAgenda.visualizar());
console.log(minhaAgenda.remover(evento2));
console.log(minhaAgenda.visualizar());
