// Definição da classe Funcionario
class Funcionario {
    constructor(nome, idade, salarioBase) {
        this._nome = nome;
        this._idade = idade;
        this._salarioBase = salarioBase;
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    calcularSalario() {
        return this._salarioBase;
    }
}

// Definição da classe Analista, que herda de Funcionario
class Analista extends Funcionario {
    calcularSalario() {
        // Adiciona um bônus de 10% ao salário base
        return super.calcularSalario() * 1.1;
    }
}

// Definição da classe Desenvolvedor, que herda de Funcionario
class Desenvolvedor extends Funcionario {
    calcularSalario() {
        // Adiciona um bônus de 20% ao salário base
        return super.calcularSalario() * 1.2;
    }
}

// Definição da classe Gerente, que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, salarioBase, bonus) {
        super(nome, idade, salarioBase);
        this._bonus = bonus;
    }

    get bonus() {
        return this._bonus;
    }

    calcularSalario() {
        // Adiciona o bônus ao salário base
        return super.calcularSalario() + this._bonus;
    }
}

// Definição da classe Departamento
class Departamento {
    constructor(nome, gerente) {
        this._nome = nome;
        this._gerente = gerente;
        this._funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this._funcionarios.push(funcionario);
    }

    listarFuncionarios() {
        console.log(`Funcionários do Departamento ${this._nome}:`);
        this._funcionarios.forEach(funcionario => {
            console.log(`${funcionario.nome} - Salário: ${funcionario.calcularSalario().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        });

        const totalSalarios = this._funcionarios.reduce((total, funcionario) => total + funcionario.calcularSalario(), 0);
        console.log(`Total de Salários: ${totalSalarios.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
}

// Exemplo de uso
const analista1 = new Analista('Ana', 25, 3000);
const desenvolvedor1 = new Desenvolvedor('Carlos', 30, 4000);
const gerente1 = new Gerente('Gustavo', 35, 6000, 1000);

const departamentoTI = new Departamento('TI', gerente1);

departamentoTI.adicionarFuncionario(analista1);
departamentoTI.adicionarFuncionario(desenvolvedor1);

departamentoTI.listarFuncionarios();