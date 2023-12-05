class SistemaDeLogin {
    constructor() {
      this.usuarios = [];
    }
  
    cadastrarUsuario(nome, senha) {
      this.usuarios.push({ nome, senha });
      console.log(`Usuário ${nome} cadastrado com sucesso.`);
    }
  
    realizarLogin(nome, senha) {
      const usuarioEncontrado = this.usuarios.find(
        (usuario) => usuario.nome === nome && usuario.senha === senha
      );
  
      if (usuarioEncontrado) {
        console.log(`Login bem-sucedido para ${nome}.`);
        return nome;
      } else {
        console.log("Nome de usuário ou senha incorretos. Tente novamente.");
        return null;
      }
    }
  
    exibirMensagemPersonalizada(nome) {
      return `Bem-vindo, ${nome}!`;
    }
  }
  
  // Exemplo de Uso:
  
  // Criando instância do sistema de login
  const sistemaLogin = new SistemaDeLogin();
  
  // Cadastrando usuários
  sistemaLogin.cadastrarUsuario("usuario1", "senha123");
  sistemaLogin.cadastrarUsuario("usuario2", "abc456");
  
  // Realizando login e exibindo mensagem personalizada
  const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
  if (usuarioLogado) {
    console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
  }