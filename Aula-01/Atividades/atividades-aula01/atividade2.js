function ordenarPorTamanho(listaPalavras) {
    // Utiliza o método sort para ordenar as palavras pelo seu comprimento
    return listaPalavras.sort((a, b) => a.length - b.length);
  }
  
  // Exemplo de uso:
  const listaOriginal = ["laranja", "banana", "uva", "abacaxi"];
  const listaOrdenada = ordenarPorTamanho(listaOriginal);

  // Deve imprimir: ["uva", "banana", "laranja", "abacaxi"]
  console.log(listaOrdenada);