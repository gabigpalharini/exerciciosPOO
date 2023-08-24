"use strict";
class Produto {
    constructor(nomeproduto, valor) {
        this.nomeproduto = nomeproduto;
        this.valor = valor;
    }
    apresentarProduto() {
        return "Produto:" + this.nomeproduto + " Valor: " + this.valor;
    }
    aplicarDesconto(desconto) {
        return "Desconto de " + desconto + "% aplicado. Novo preço: R$" + (this.valor - (this.valor * desconto) / 100);
    }
}
let produto1 = new Produto("tenis", 550);
let produto2 = new Produto("garrafa", 200);
let produto3 = new Produto("vestido", 170);
console.log(produto1.apresentarProduto());
console.log(produto2.apresentarProduto());
console.log(produto3.apresentarProduto());
console.log(produto1.aplicarDesconto(15));
console.log(produto2.aplicarDesconto(7));
console.log(produto3.aplicarDesconto(10));
