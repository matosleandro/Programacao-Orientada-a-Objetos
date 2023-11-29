class Pessoa {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  
    calcularIdadeBissextos(ano) {
      // Verifica se o ano é bissexto
      const isBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  
      // Se o ano é bissexto, incrementa a idade
      return isBissexto ? this.idade + 1 : this.idade;
    }
  }
  
  // Exemplo de uso:
  const pessoa1 = new Pessoa('Alice', 25, 'CidadeA');
  const pessoa2 = new Pessoa('Bob', 30, 'CidadeB');
  
  // Testando o método calcularIdadeBissextos para diferentes anos
  const anoAtual = new Date().getFullYear();
  console.log(`${pessoa1.nome} teria ${pessoa1.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual}.`);
  console.log(`${pessoa2.nome} teria ${pessoa2.calcularIdadeBissextos(anoAtual)} anos em ${anoAtual}.`);