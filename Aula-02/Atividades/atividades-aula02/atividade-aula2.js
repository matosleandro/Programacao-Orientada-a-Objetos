class Autor {
    constructor(nome, nacionalidade) {
      this._nome = nome; // Utilizamos underscore para indicar que o atributo é privado
      this._nacionalidade = nacionalidade;
    }
  
    // Getter para o nome do autor
    get nome() {
      return this._nome;
    }
  
    // Método para exibir detalhes do autor
    exibirDetalhes() {
      console.log(`Autor: ${this.nome}, Nacionalidade: ${this._nacionalidade}`);
    }
  }
  
  class Livro {
    constructor(titulo, anoPublicacao, autor) {
      this._titulo = titulo;
      this._anoPublicacao = anoPublicacao;
      this._autor = autor;
    }
  
    // Getter para o título do livro
    get titulo() {
      return this._titulo;
    }
  
    // Método para exibir detalhes do livro, incluindo detalhes do autor
    detalhesDoLivro() {
      console.log(`Livro: ${this.titulo}, Ano de Publicação: ${this._anoPublicacao}`);
      this._autor.exibirDetalhes();
    }
  }
  
  class Biblioteca {
    constructor() {
      this._livros = [];
    }
  
    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro) {
      this._livros.push(livro);
    }
  
    // Getter para obter a lista de livros da biblioteca
    get livros() {
      return this._livros;
    }
  
    // Método para listar todos os livros na biblioteca
    listarLivros() {
      console.log("Livros na Biblioteca:");
      this._livros.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro.titulo}`);
      });
    }
  
    // Método para buscar livros por autor
    buscarLivrosPorAutor(autor) {
      const livrosDoAutor = this._livros.filter((livro) => livro._autor === autor);
      if (livrosDoAutor.length === 0) {
        console.log(`Nenhum livro encontrado para o autor ${autor.nome}.`);
      } else {
        console.log(`Livros do autor ${autor.nome}:`);
        livrosDoAutor.forEach((livro, index) => {
          console.log(`${index + 1}. ${livro.titulo}`);
        });
      }
    }
  }
  
  // Teste do Sistema
  
  // Criando autores
  const autor1 = new Autor("Machado de Assis", "Brasileiro");
  const autor2 = new Autor("Gabriel García Márquez", "Colombiano");
  
  // Criando livros com os autores
  const livro1 = new Livro("Dom Casmurro", 1899, autor1);
  const livro2 = new Livro("Memórias de Minhas Putas Tristes", 2004, autor2);
  
  // Criando a biblioteca e adicionando livros
  const biblioteca = new Biblioteca();
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  
  // Listando todos os livros na biblioteca
  biblioteca.listarLivros();
  
  // Buscando livros por autor
  biblioteca.buscarLivrosPorAutor(autor1);
  
  // Exibindo detalhes de alguns livros
  livro1.detalhesDoLivro();
  livro2.detalhesDoLivro();  