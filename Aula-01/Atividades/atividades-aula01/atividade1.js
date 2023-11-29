function somaQuadradosPares(lista) {
    // Filtra os números pares da lista
    const numerosPares = lista.filter(numero => numero % 2 === 0);
  
    // Eleva cada número par ao quadrado
    const quadrados = numerosPares.map(numero => numero ** 2);
  
    // Calcula a soma dos quadrados obtidos
    const soma = quadrados.reduce((acumulador, valor) => acumulador + valor, 0);
  
    return soma;
  }
  
  // Exemplo de uso:
  const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = somaQuadradosPares(listaDeNumeros);
  console.log(resultado); // Deve imprimir 220, que é 2^2 + 4^2 + 6^2 + 8^2 + 10^2