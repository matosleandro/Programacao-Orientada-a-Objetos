class ContadorDePalavras {
    constructor(texto) {
        this.texto = texto;
    }

    contarPalavras() {
        if (!this.texto || typeof this.texto !== 'string') {
            console.error('Texto inválido.');
            return 0;
        }

        const textoSemEspacos = this.texto.trim();

        const palavras = textoSemEspacos.split(/\s+/);

        return palavras.length;
    }
}

// Exemplo de uso
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);