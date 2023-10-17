"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["EmPreparo"] = "Em Preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para Entrega";
    StatusPedido["Entregue"] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        return "Produto adicionada com sucesso !!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedido() {
        if (this.produtos.length > 0) {
            for (let index = 0; index < this.produtos.length; index++) {
                console.log("Produto: " + this.produtos[index].nome + ' de R$:'
                    + this.produtos[index].valor.toFixed(2));
            }
        }
    }
}
const produtoPedido = new ProdutoPedido("X- burguer", 15);
const outroProdutoPedido = new ProdutoPedido("X-Frango", 30);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Status atual do Pedido" + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo);
console.log("Status atual do Pedido" + novoPedido.exibirProdutosDoPedido());
console.log("Produtos do pedido " + novoPedido.exibirProdutosDoPedido());
