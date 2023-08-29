class Funcionário{
nome: string;
cargo: string;
salarioBruto: number;
INSS: number = (11/100);
Ir: number = (7.5/100);
porcentual: number = (10/100);


constructor(nome: string, cargo: string, salariobruto: number) {
      this.nome = nome;
      this.cargo = cargo;
      this.salarioBruto = salariobruto;
    }
    
detalheFuncionario(){
  return " Olá sou a " +this.nome + " Meu cargo é " +this.cargo+ " salário atual de: " +this.salarioBruto;
}

exibirINSSeIr(){
    let valorInss = (this.INSS*this.salarioBruto);
    let salarioLiquido = (this.salarioBruto - valorInss);    
    let valorIr = (this.Ir*salarioLiquido);
    let totaldeimpostos = (valorIr+valorInss);
     return " O valor do INSS será R$: " +valorInss+ " O valor do Imposto de renda será R$: " +valorIr+ " O total de impostos será R$: " +totaldeimpostos;
}
aplicarAumento(porcentual:number){
     let valorporcentual = (this.porcentual*this.salarioBruto)
     return "Aplicando o porcentual o valor será de R$ :"+ (valorporcentual+this.salarioBruto);
} 

}
let novosalario = new Funcionário("Ana Silva, "," Analista de Sistemas", 3000);
console.log(novosalario.detalheFuncionario());
console.log(novosalario.exibirINSSeIr());
console.log("")
console.log(novosalario.aplicarAumento(10));
console.log("")
let salario2 = new Funcionário("gabi, "," psicóloga, ", 4000);
console.log(salario2.detalheFuncionario());
console.log(salario2.exibirINSSeIr());
console.log("")
console.log(salario2.aplicarAumento(10));
