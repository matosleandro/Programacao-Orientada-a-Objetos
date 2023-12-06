// Função para formatar um valor como moeda (Real brasileiro)
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

// Definição da classe Produto
class Produto {
    constructor(nome, preco, estoque, desconto = 0) {
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
        this._desconto = desconto;
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

    get desconto() {
        return this._desconto;
    }

    calcularDesconto() {
        return this._preco * this._desconto / 100;
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
    constructor(nome, preco, estoque, garantia, desconto = 0) {
        super(nome, preco, estoque, desconto);
        this._garantia = garantia;
    }

    get garantia() {
        return this._garantia;
    }

    calcularDesconto() {
        // Sobrescrevendo o método calcularDesconto para produtos eletrônicos
        return super.calcularDesconto() + 50; // Adicionando um desconto adicional de R$ 50, por exemplo
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

    // O método calcularDesconto não é necessário para produtos alimentícios
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
            const precoComDesconto = item.produto.preco - item.produto.calcularDesconto();
            total += precoComDesconto * item.quantidade;
        }
        return formatarMoeda(total);
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
const produtoEletronico = new ProdutoEletronico('Smartphone', 1500, 10, '1 ano', 5); // 5% de desconto
const produtoAlimenticio = new ProdutoAlimenticio('Chocolate', 5, 50, '30/12/2023'); // Sem desconto

const cliente = new Cliente('Alice');

cliente.carrinho.adicionarItem(produtoEletronico, 2);
cliente.carrinho.adicionarItem(produtoAlimenticio, 5);

console.log(`Total no carrinho: ${cliente.carrinho.calcularTotal()}`);