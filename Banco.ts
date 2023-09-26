abstract class ContaBancaria2{
    private titular: string;
    private numeroConta: string;
     protected saldo: number;

    constructor(numeroConta: string, saldoInicial: number, titular: string){
        this.numeroConta = numeroConta
        this.saldo = saldoInicial
        this.titular = titular
    }

    abstract depositar(valordeposito: number): void;

   abstract sacar(valor: number): void;
        

   abstract consultarSaldo(): number;
       
}

class ContaCorrente extends ContaBancaria2{
    protected limiteChequeEspecial:number = 0;
    constructor(numeroConta: string, saldoInicial: number, titular: string, limiteChequeEspecial:number){
        super(numeroConta, saldoInicial, titular);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }


    depositar(deposito: number){

        this.saldo = this.saldo + deposito;
          return " deposito realizado " + deposito + " O saldo atual é  " +this.saldo;
        }

          sacar(saque: number){
            let msgSacarsaldo = "saque aprovado ";
           if(saque > this.saldo ){
               msgSacarsaldo  = "saque negado";
               return msgSacarsaldo;
       } else{
       this.saldo = this.saldo - saque;
       return msgSacarsaldo + saque + " O saldo atual é  " +this.saldo;
       }
}

        consultarSaldo():number{
        return +this.saldo ;
}
   
}

class ContaPoupanca extends ContaBancaria2{

    
    depositar(deposito: number){

        this.saldo = this.saldo + deposito;
          return " deposito realizado " + deposito + " O saldo atual é  " +this.saldo;
        }

          sacar(saque: number){
            let msgSacarsaldo = "saque aprovado ";
           if(saque > this.saldo ){
               msgSacarsaldo  = "saque negado";
               return msgSacarsaldo;
       } else{
       this.saldo = this.saldo - saque;
       return msgSacarsaldo + saque + " O saldo atual é  " +this.saldo;
       }
}

        consultarSaldo():number{
        return +this.saldo;
}
   
       calcularRendimentoAnual(taxa:number){
        return (this.saldo* (taxa/100) + this.saldo );
    }
}

    class ContaInvestimento extends ContaBancaria2{


        depositar(deposito: number){

            this.saldo = this.saldo + deposito;
              return " deposito realizado " + deposito + " O saldo atual é  " +this.saldo;
            }
    
              sacar(saque: number){
                let msgSacarsaldo = "saque aprovado ";
               if(saque > this.saldo ){
                   msgSacarsaldo  = "saque negado";
                   return msgSacarsaldo;
           } else{
           this.saldo = this.saldo - saque;
           return msgSacarsaldo + saque + " O saldo atual é  " +this.saldo;
           }
    }
    
            consultarSaldo():number{
            return +this.saldo;
}
          investir(valor: number, prazoMeses:number, taxaJuros: number): void{
            (valor * taxaJuros * prazoMeses)
          }
    }

    const contaCorrenteGabriela = new ContaCorrente("123",4000,"Gabriela",1000);

    console.log(contaCorrenteGabriela.consultarSaldo());
    console.log(contaCorrenteGabriela.depositar(200));
    console.log(contaCorrenteGabriela.sacar(100));

    const contaCorrenteAlex = new ContaCorrente("12345",1000,"Alex",500);

    console.log(contaCorrenteAlex.consultarSaldo());
    console.log(contaCorrenteAlex.depositar(200));
    console.log(contaCorrenteAlex.sacar(100));

    const contaPoupanca = new ContaPoupanca("123",4000, "Gabriela");

    console.log(contaPoupanca.consultarSaldo());
    console.log(contaPoupanca.depositar(200));
    console.log(contaPoupanca.sacar(100));
    console.log(contaPoupanca.calcularRendimentoAnual( 10));

    const contaPoupanca2 = new ContaPoupanca("12345",1000, "Alex");

    console.log(contaPoupanca2.consultarSaldo());
    console.log(contaPoupanca2.depositar(200));
    console.log(contaPoupanca2.sacar(100));
    console.log(contaPoupanca2.calcularRendimentoAnual( 10));


    const contaInvestimento = new ContaInvestimento("123",4000, "Gabriela");
    console.log(contaInvestimento.consultarSaldo());
    console.log(contaInvestimento.depositar(200));
    console.log(contaPoupanca.sacar(100));
    console.log(contaInvestimento.investir(4000,10,5));