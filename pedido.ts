enum StatusPedido{
    AguardandoPreparo ="Aguardando Preparo", 
    EmPreparo ="Em Preparo",
    SaiuParaEntrega = "Saiu para Entrega", 
    Entregue = "Entregue"
}


class ProdutoPedido{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor
}
}

class Pedido{
    //private produtod:{nome: string, valor:number} [];
    private produtos:ProdutoPedido[];
    private status:StatusPedido;
    constructor(){
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }

adicionarProduto(produto: ProdutoPedido){
    this.produtos.push(produto);
   return "Produto adicionada com sucesso !!"
}

atualizarStatus(status: StatusPedido){
     this.status = status
}
exibirStatus(){
   return this.status
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
 
const produtoPedido =new ProdutoPedido("X- burguer", 15);
const outroProdutoPedido = new ProdutoPedido("X-Frango", 30);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log ("Status atual do Pedido" + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo)
console.log( "Status atual do Pedido" + novoPedido.exibirProdutosDoPedido());
console.log( "Produtos do pedido " + novoPedido.exibirProdutosDoPedido());