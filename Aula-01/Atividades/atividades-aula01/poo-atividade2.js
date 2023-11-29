class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    emitirSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome) {
      super(nome, 'Mamífero');
    }
  
    amamentar() {
      console.log(`${this.nome} está amamentando.`);
    }
  }
  
  class Ave extends Animal {
    constructor(nome) {
      super(nome, 'Ave');
    }
  
    voar() {
      console.log(`${this.nome} está voando.`);
    }
  }
  
  // Exemplo de uso:
  const leao = new Mamifero('Leão');
  const passaro = new Ave('Pássaro');
  
  leao.emitirSom();   // Leão faz um som.
  leao.amamentar();    // Leão está amamentando.
  
  passaro.emitirSom(); // Pássaro faz um som.
  passaro.voar();       // Pássaro está voando.