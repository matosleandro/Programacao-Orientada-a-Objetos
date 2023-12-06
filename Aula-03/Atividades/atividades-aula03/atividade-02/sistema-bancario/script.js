class Conta {
    constructor(saldo = 0) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        try {
            if (valor > 0) {
                this._saldo += valor;
                console.log(`Depósito de ${valor} realizado. Novo saldo: ${this._saldo}`);
            } else {
                throw new Error('Valor de depósito inválido.');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    sacar(valor) {
        try {
            if (valor > 0) {
                if (this._podeSacar(valor)) {
                    this._saldo -= valor;
                    console.log(`Saque de ${valor} realizado. Novo saldo: ${this._saldo}`);
                } else {
                    throw new Error('Saldo insuficiente para saque.');
                }
            } else {
                throw new Error('Valor de saque inválido.');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    consultarSaldo() {
        try {
            console.log(`Saldo atual: ${this._saldo}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    _podeSacar(valor) {
        return this._saldo >= valor;
    }
}

class ContaCorrente extends Conta {
    constructor(saldo = 0, limite = 1000) {
        super(saldo);
        this._limite = limite;
    }

    _podeSacar(valor) {
        return this._saldo + this._limite >= valor;
    }
}

class ContaPoupanca extends Conta {
}

class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.contas = [];
    }

    adicionarConta(conta) {
        this.contas.push(conta);
    }
}

// Exemplo de uso
const cliente1 = new Cliente('João', 30);
const contaCorrente1 = new ContaCorrente(500, 1000);
const contaPoupanca1 = new ContaPoupanca(1000);

cliente1.adicionarConta(contaCorrente1);
cliente1.adicionarConta(contaPoupanca1);

contaCorrente1.depositar(200);
contaCorrente1.sacar(700);
contaCorrente1.consultarSaldo();

contaPoupanca1.depositar(300);
contaPoupanca1.sacar(200);
contaPoupanca1.consultarSaldo();