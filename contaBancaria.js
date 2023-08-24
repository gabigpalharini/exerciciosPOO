"use strict";
class ContaBancaria {
    constructor(nometitular, saldoatual) {
        this.nometitular = nometitular;
        this.saldoatual = saldoatual;
    }
    consultarSaldotitular() {
        return " Olá " + this.nometitular + " sua conta bancária atual:";
    }
    depositar(deposito) {
        this.saldoatual = this.saldoatual + deposito;
        return " deposito realizado " + deposito + " O saldo atual é  " + this.saldoatual;
    }
    sacar(saque) {
        let msgSacarsaldo = "saque aprovado ";
        if (saque > this.saldoatual) {
            msgSacarsaldo = "saque negado";
            return msgSacarsaldo;
        }
        else {
            this.saldoatual = this.saldoatual - saque;
            return msgSacarsaldo + saque + " O saldo atual é  " + this.saldoatual;
        }
    }
}
let minhaconta = new ContaBancaria("João", 1000);
console.log(minhaconta.consultarSaldotitular());
console.log(minhaconta.depositar(500));
console.log(minhaconta.sacar(200));
console.log(minhaconta.sacar(1500));
let minhacontadois = new ContaBancaria("gabi", 6000);
console.log(minhacontadois.consultarSaldotitular());
console.log(minhacontadois.depositar(500));
console.log(minhacontadois.sacar(300));
console.log(minhacontadois.sacar(7000));
let minhacontatres = new ContaBancaria("emilly", 2500);
console.log(minhacontatres.consultarSaldotitular());
console.log(minhacontatres.depositar(1000));
console.log(minhacontatres.sacar(150));
console.log(minhacontatres.sacar(4000));
