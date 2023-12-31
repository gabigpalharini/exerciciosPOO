class Produtoloja {
    nome: string;
    valor: number;


    constructor(nome: string, valor: number) {
        this.nome = nome
        this.valor = valor
    }
}

class Carrinhodecompra {
    produtos: Produtoloja[] = [];


    adicionarnocarrinho(produto: Produtoloja) {
        this.produtos.push(produto);

    }
    remover(produto: Produtoloja) {
        this.produtos = this.produtos.filter((item) => item.nome !== produto.nome);
    }

    exibirCarrinho() {
        if (this.produtos.length > 0) {
            for (let i = 0; i < this.produtos.length; i++) {
                console.log("Produto: " + this.produtos[i].nome + ' de R$:'
                    + this.produtos[i].valor + ",00 adicionado com sucesso");
            }

        }
        else {
            return "nenhum produto adicionado ao carrinho";
        }

    }

    SomaDosProdutos() {
        let soma = 0
        for (let i = 0; i < this.produtos.length; i++) {

            soma = this.produtos[i].valor + soma;


        }
        return soma;

    }

}

class Loja {
    estoque: Produtoloja[] = [];
    carrinho = new Carrinhodecompra;

    AdicionarProdutosCarrinho(produto: Produtoloja){

        const produtoEncontrado = this.estoque.find(
         item => item.nome == produto.nome
        );
       
       
     if(produtoEncontrado){
         this.carrinho.adicionarnocarrinho(produto);
         return "Produto adicionado ao carrinho de compras"
     }
     else{
         return "Produto não encontrado no estoque";
     }
     }


exibirEstoque(){
    if (this.estoque.length > 0) {
        for (let i = 0; i < this.estoque.length; i++) {
            console.log("Produto: " + this.estoque[i].nome + ' de R$:'
                + this.estoque[i].valor + ",00 adicionado ");
        }

    }
    else {
        return "nenhum produto adicionado ao carrinho";
    }

}

adicionarnoestoque(estoque: Produtoloja){
    this.estoque.push(estoque);

}
removerEstoque(estoque: Produtoloja) {
    this.estoque = this.estoque.filter((item) => item.nome !== estoque.nome);
}

}

const produtos1 = new Produtoloja("slide-on Vans", 170);
const produtos2 = new Produtoloja("garrafa", 280);
const produtos3 = new Produtoloja("tennis Vans", 550);
const produtos4 = new Produtoloja("moletom", 157);


const meuProduto = new Carrinhodecompra();
const loja = new Loja();


console.log(meuProduto.exibirCarrinho())
console.log(meuProduto.SomaDosProdutos())
console.log(loja.adicionarnoestoque(produtos1))
console.log(loja.exibirEstoque())
console.log(loja.removerEstoque(produtos1))
console.log(loja.exibirEstoque())

console.log(loja.adicionarnoestoque(produtos1));
console.log(loja.adicionarnoestoque(produtos2));
console.log(loja.adicionarnoestoque(produtos3));
console.log(loja.adicionarnoestoque(produtos4));

console.log(loja.AdicionarProdutosCarrinho(produtos1));
console.log(loja.AdicionarProdutosCarrinho(produtos2));
console.log(loja.AdicionarProdutosCarrinho(produtos3));
console.log(loja.AdicionarProdutosCarrinho(produtos4));
