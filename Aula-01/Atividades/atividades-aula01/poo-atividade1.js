class Pessoa {
  constructor(nome, anoNascimento, cidade) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.cidade = cidade;
  }

  // Método para verificar se um ano é bissexto
  static isBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  }

  // Método para calcular a idade da pessoa considerando anos bissextos
  calcularIdadeBissextos(ano) {
    let idade = ano - this.anoNascimento;

    // Verifica se o ano de nascimento é bissexto
    if (Pessoa.isBissexto(this.anoNascimento)) {
      // Verifica se o ano atual é bissexto e se já passou o aniversário da pessoa
      if (Pessoa.isBissexto(ano) && new Date().getTime() >= new Date(ano, 0, 1).getTime()) {
        idade++;
      }
    }

    return idade;
  }
}

// Exemplo de uso da classe Pessoa
const pessoa1 = new Pessoa('Ana', 1990, 'Aracaju');
const pessoa2 = new Pessoa('José', 1985, 'Pernambuco');

// Teste o método calcularIdadeBissextos para anos específicos
const anoAtual = new Date().getFullYear();
console.log(`${pessoa1.nome} tem ${pessoa1.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual}`);
console.log(`${pessoa2.nome} tem ${pessoa2.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual}`);