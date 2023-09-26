"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    apresentar() {
        console.log(" O " + this.nome + " possui salário de" + this.salario);
    }
}
class Gerente extends Funcionario {
    constructor() {
        super("gerente", 10000);
    }
    calcularSalarioMensal() {
        return (this.salario * 0.10 + this.salario);
        //console.log (" O salário do gerente é de :" +this.salario+ "com aumento de 10%:" +bônus);
    }
}
class Desenvolvedor extends Funcionario {
    constructor() {
        super("desenvolvedor", 5000);
    }
    calcularSalarioMensal() {
        return this.salario;
        // console.log("Este é o salário do desenvolvedor");
    }
}
const trabalhador = new Gerente();
console.log(" O salário do gerente é de :" + trabalhador.calcularSalarioMensal());
const trabalhador2 = new Desenvolvedor();
console.log(" O salário do desenvolvedor é de :" + trabalhador2.calcularSalarioMensal());
