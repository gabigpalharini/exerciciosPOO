class ContaBancaria {
    nometitular: string;
    saldoatual: number;

    constructor(nometitular: string, saldoatual: number){
        this.nometitular = nometitular;
        this.saldoatual = saldoatual;
    }
    
consultarSaldotitular(){
     return " Olá " +this.nometitular+ " sua conta bancária atual:";
}
    

depositar(deposito: number){

  this.saldoatual = this.saldoatual + deposito;
    return " deposito realizado " + deposito + " O saldo atual é  " +this.saldoatual;
}

sacar(saque: number){
     let msgSacarsaldo = "saque aprovado ";
    if(saque > this.saldoatual ){
        msgSacarsaldo  = "saque negado";
        return msgSacarsaldo;
} else{
this.saldoatual = this.saldoatual - saque;
return msgSacarsaldo + saque + " O saldo atual é  " +this.saldoatual;
}

} 
}
let minhaconta = new ContaBancaria("João", 1000);
console.log(minhaconta.consultarSaldotitular())
console.log(minhaconta.consultarSaldotitular())
console.log(minhaconta.depositar(500));
console.log(minhaconta.sacar(200));
console.log(minhaconta.sacar(1500));

let minhaconta2 = new ContaBancaria("gabi", 6000);
console.log(minhaconta.consultarSaldotitular())
console.log(minhaconta.consultarSaldotitular())
console.log(minhaconta.depositar(500));
console.log(minhaconta.sacar(300));
console.log(minhaconta.sacar(7000));

let minhaconta3 = new ContaBancaria("emilly", 2500);
console.log(minhaconta3.consultarSaldotitular())
console.log(minhaconta3.consultarSaldotitular())
console.log(minhaconta3.depositar(1000));
console.log(minhaconta3.sacar(150));
console.log(minhaconta3.sacar(4000));

