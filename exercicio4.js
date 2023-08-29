"use strict";
class Funcionário {
    constructor(nome, cargo, salariobruto) {
        this.INSS = (11 / 100);
        this.Ir = (7.5 / 100);
        this.porcentual = (10 / 100);
        this.nome = nome;
        this.cargo = cargo;
        this.salarioBruto = salariobruto;
    }
    detalheFuncionario() {
        return " Olá sou a " + this.nome + " Meu cargo é " + this.cargo + " salário atual de: " + this.salarioBruto;
    }
    exibirINSSeIr() {
        let valorInss = (this.INSS * this.salarioBruto);
        let valorIr = (this.Ir * this.salarioBruto);
        let totaldeimpostos = (valorInss + valorIr);
        return " O valor do INSS será R$: " + valorInss + " O valor do Imposto de renda será R$: " + valorIr + " O total de impostos será R$: " + totaldeimpostos;
    }
    aplicarAumento(porcentual) {
        let valorporcentual = (this.porcentual * this.salarioBruto);
        return "Aplicando o porcentual o valor será de R$ :" + (valorporcentual + this.salarioBruto);
    }
}
let novosalario = new Funcionário("Ana Silva, ", " Analista de Sistemas", 3000);
console.log(novosalario.detalheFuncionario());
console.log(novosalario.exibirINSSeIr());
console.log("");
console.log(novosalario.aplicarAumento(10));
console.log("");
let salario2 = new Funcionário("gabi, ", " psicóloga", 4000);
console.log(salario2.detalheFuncionario());
console.log(salario2.exibirINSSeIr());
console.log("");
console.log(salario2.aplicarAumento(10));
