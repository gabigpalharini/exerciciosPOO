"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.titular = titular;
    }
}
class ContaCorrente extends ContaBancaria2 {
    constructor(numeroConta, saldoInicial, titular, limiteChequeEspecial) {
        super(numeroConta, saldoInicial, titular);
        this.limiteChequeEspecial = 0;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
        return " deposito realizado " + deposito + " O saldo atual é  " + this.saldo;
    }
    sacar(saque) {
        let msgSacarsaldo = "saque aprovado ";
        if (saque > this.saldo) {
            msgSacarsaldo = "saque negado";
            return msgSacarsaldo;
        }
        else {
            this.saldo = this.saldo - saque;
            return msgSacarsaldo + saque + " O saldo atual é  " + this.saldo;
        }
    }
    consultarSaldo() {
        return +this.saldo;
    }
}
class ContaPoupanca extends ContaBancaria2 {
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
        return " deposito realizado " + deposito + " O saldo atual é  " + this.saldo;
    }
    sacar(saque) {
        let msgSacarsaldo = "saque aprovado ";
        if (saque > this.saldo) {
            msgSacarsaldo = "saque negado";
            return msgSacarsaldo;
        }
        else {
            this.saldo = this.saldo - saque;
            return msgSacarsaldo + saque + " O saldo atual é  " + this.saldo;
        }
    }
    consultarSaldo() {
        return +this.saldo;
    }
    calcularRendimentoAnual(taxa) {
        return (this.saldo * (taxa / 100) + this.saldo);
    }
}
class ContaInvestimento extends ContaBancaria2 {
    depositar(deposito) {
        this.saldo = this.saldo + deposito;
        return " deposito realizado " + deposito + " O saldo atual é  " + this.saldo;
    }
    sacar(saque) {
        let msgSacarsaldo = "saque aprovado ";
        if (saque > this.saldo) {
            msgSacarsaldo = "saque negado";
            return msgSacarsaldo;
        }
        else {
            this.saldo = this.saldo - saque;
            return msgSacarsaldo + saque + " O saldo atual é  " + this.saldo;
        }
    }
    consultarSaldo() {
        return +this.saldo;
    }
    investir(valor, prazoMeses, taxaJuros) {
        (valor * taxaJuros * prazoMeses);
    }
}
const contaCorrenteGabriela = new ContaCorrente("123", 4000, "Gabriela", 1000);
console.log(contaCorrenteGabriela.consultarSaldo());
console.log(contaCorrenteGabriela.depositar(200));
console.log(contaCorrenteGabriela.sacar(100));
const contaCorrenteAlex = new ContaCorrente("12345", 1000, "Alex", 500);
console.log(contaCorrenteAlex.consultarSaldo());
console.log(contaCorrenteAlex.depositar(200));
console.log(contaCorrenteAlex.sacar(100));
const contaPoupanca = new ContaPoupanca("123", 4000, "Gabriela");
console.log(contaPoupanca.consultarSaldo());
console.log(contaPoupanca.depositar(200));
console.log(contaPoupanca.sacar(100));
console.log(contaPoupanca.calcularRendimentoAnual(10));
const contaPoupanca2 = new ContaPoupanca("12345", 1000, "Alex");
console.log(contaPoupanca2.consultarSaldo());
console.log(contaPoupanca2.depositar(200));
console.log(contaPoupanca2.sacar(100));
console.log(contaPoupanca2.calcularRendimentoAnual(10));
const contaInvestimento = new ContaInvestimento("123", 4000, "Gabriela");
console.log(contaInvestimento.consultarSaldo());
console.log(contaInvestimento.depositar(200));
console.log(contaPoupanca.sacar(100));
console.log(contaInvestimento.investir(4000, 10, 5));
