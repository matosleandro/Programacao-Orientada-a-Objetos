function mediaNumerosImpares(lista) {
    // Filtra os números ímpares da lista usando programação funcional
    const numerosImpares = lista.filter(numero => numero % 2 !== 0);
  
    // Verifica se há números ímpares na lista
    if (numerosImpares.length === 0) {
      return 0; // Retorna 0 se não houver números ímpares
    }
  
    // Calcula a média dos números ímpares usando programação funcional
    const soma = numerosImpares.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = soma / numerosImpares.length;
  
    return media;
  }
  
  // Exemplo de uso:
  const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = mediaNumerosImpares(listaDeNumeros);
  
  // Deve imprimir a média dos números ímpares: (1 + 3 + 5 + 7 + 9) / 5 = 5
    console.log(resultado); 