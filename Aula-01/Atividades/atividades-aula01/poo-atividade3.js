class Carro {
    constructor(modelo, ano) {
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.velocidade = 0;
    }
  
    ligar() {
      if (!this.ligado) {
        this.ligado = true;
        console.log(`${this.modelo} ligado.`);
      } else {
        console.log(`${this.modelo} já está ligado.`);
      }
    }
  
    desligar() {
      if (this.ligado) {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`${this.modelo} desligado.`);
      } else {
        console.log(`${this.modelo} já está desligado.`);
      }
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerando. Velocidade: ${this.velocidade} km/h.`);
      } else {
        console.log(`${this.modelo} está desligado. Não é possível acelerar.`);
      }
    }
  
    frear() {
      if (this.ligado && this.velocidade > 0) {
        this.velocidade -= 10;
        console.log(`${this.modelo} freando. Velocidade: ${this.velocidade} km/h.`);
      } else if (this.ligado && this.velocidade === 0) {
        console.log(`${this.modelo} está parado. Não é possível frear.`);
      } else {
        console.log(`${this.modelo} está desligado. Não é possível frear.`);
      }
    }
  
    status() {
      return this.ligado ? `${this.modelo} está ligado.` : `${this.modelo} está desligado.`;
    }
  }
  
  // Exemplo de uso:
  const carro1 = new Carro('Fusca', 1990);
  const carro2 = new Carro('Civic', 2022);
  
  console.log(carro1.status()); // Fusca está desligado.
  
  carro1.ligar();                // Fusca ligado.
  console.log(carro1.status()); // Fusca está ligado.
  
  carro1.acelerar();             // Fusca acelerando. Velocidade: 10 km/h.
  
  carro1.frear();                // Fusca freando. Velocidade: 0 km/h.
  
  carro1.desligar();             // Fusca desligado.
  console.log(carro1.status()); // Fusca está desligado.
  
  console.log(carro2.status()); // Civic está desligado.