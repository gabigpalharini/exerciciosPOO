const pessoa= new class{
    private primeiroNome = "José";
    private ultimoNome = " da Silva";
    getNomeCompleto(){
        return this.primeiroNome + "" + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());

const treinadorPessosal = new class{
    private rotina: {nome: string; duracao: number}[] = [];
    adicionarExercicios(nome:string, duracao: number): void{
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma +item.duracao);
        return soma;
    }
}

treinadorPessosal.adicionarExercicios("Corrida",30);
treinadorPessosal.adicionarExercicios("Flexões",15);
treinadorPessosal.adicionarExercicios("Agachamentos",20);
console.log("Tempo total necessário para a rotina:" +treinadorPessosal.calcularTempoTotal()+ " em minutos");