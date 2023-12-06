// Definição da classe Produto
class Produto {
    constructor(nome, preco, estoque) {
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    get nome() {
        return this._nome;
    }

    get preco() {
        return this._preco;
    }

    get estoque() {
        return this._estoque;
    }

    adicionarAoEstoque(quantidade) {
        if (quantidade > 0) {
            this._estoque += quantidade;
            console.log(`Adicionado ${quantidade} unidades de ${this._nome} ao estoque. Novo estoque: ${this._estoque}`);
        } else {
            console.error('Quantidade inválida para adicionar ao estoque.');
        }
    }

    removerDoEstoque(quantidade) {
        if (quantidade > 0 && quantidade <= this._estoque) {
            this._estoque -= quantidade;
            console.log(`Removido ${quantidade} unidades de ${this._nome} do estoque. Novo estoque: ${this._estoque}`);
        } else {
            console.error('Quantidade inválida para remover do estoque.');
        }
    }
}

// Definição da classe ProdutoEletronico, que herda de Produto
class ProdutoEletronico extends Produto {
    constructor(nome, preco, estoque, garantia) {
        super(nome, preco, estoque);
        this._garantia = garantia;
    }

    get garantia() {
        return this._garantia;
    }
}

// Definição da classe ProdutoAlimenticio, que herda de Produto
class ProdutoAlimenticio extends Produto {
    constructor(nome, preco, estoque, dataValidade) {
        super(nome, preco, estoque);
        this._dataValidade = dataValidade;
    }

    get dataValidade() {
        return this._dataValidade;
    }
}

// Definição da classe Carrinho
class Carrinho {
    constructor() {
        this._itens = [];
    }

    adicionarItem(produto, quantidade) {
        if (quantidade > 0 && produto.estoque >= quantidade) {
            this._itens.push({ produto, quantidade });
            console.log(`Adicionado ${quantidade} unidades de ${produto.nome} ao carrinho.`);
            produto.removerDoEstoque(quantidade);
        } else {
            console.error('Quantidade inválida para adicionar ao carrinho.');
        }
    }

    removerItem(produto, quantidade) {
        const index = this._itens.findIndex(item => item.produto === produto);

        if (index !== -1) {
            const item = this._itens[index];
            if (quantidade > 0 && quantidade <= item.quantidade) {
                this._itens.splice(index, 1);
                console.log(`Removido ${quantidade} unidades de ${produto.nome} do carrinho.`);
                produto.adicionarAoEstoque(quantidade);
            } else {
                console.error('Quantidade inválida para remover do carrinho.');
            }
        } else {
            console.error('Produto não encontrado no carrinho.');
        }
    }

    calcularTotal() {
        let total = 0;
        for (const item of this._itens) {
            total += item.produto.preco * item.quantidade;
        }
        return total;
    }
}

// Definição da classe Cliente
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.carrinho = new Carrinho();
    }
}

// Exemplo de uso
const produtoEletronico = new ProdutoEletronico('Smartphone', 1500, 10, '1 ano');
const produtoAlimenticio = new ProdutoAlimenticio('Chocolate', 5, 50, '30/12/2023');

const cliente = new Cliente('Alice');

cliente.carrinho.adicionarItem(produtoEletronico, 2);
cliente.carrinho.adicionarItem(produtoAlimenticio, 5);

console.log(`Total no carrinho: ${cliente.carrinho.calcularTotal()}`);