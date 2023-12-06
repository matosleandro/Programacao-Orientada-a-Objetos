class SistemaDeLogin {
  constructor() {
    this.usuarios = [];
  }

  cadastrarUsuario(nome, senha) {
    // Verifica se o usuário já existe usando indexOf
    const usuarioExistenteIndex = this.usuarios.findIndex((usuario) => usuario.nome === nome);

    if (usuarioExistenteIndex !== -1) {
      console.log(`Usuário ${nome} já existe. Escolha outro nome de usuário.`);
      return;
    }

    // Verifica se a senha é válida (adicione suas próprias regras de validação)
    if (senha.length < 6) {
      console.log("A senha deve ter pelo menos 6 caracteres. Tente novamente.");
      return;
    }

    // Se passar nas verificações, cadastra o usuário
    this.usuarios.push({ nome, senha });
    console.log(`Usuário ${nome} cadastrado com sucesso.`);
  }

  realizarLogin(nome, senha) {
    try {
      const usuarioEncontrado = this.usuarios.find(
        (usuario) => usuario.nome === nome && usuario.senha === senha
      );

      if (!usuarioEncontrado) {
        throw new Error("Nome de usuário ou senha incorretos. Tente novamente.");
      }

      console.log(`Login bem-sucedido para ${nome}.`);
      return nome;
    } catch (error) {
      console.error(error.message);
      alert(error.message); // Exibe um alerta com a mensagem de erro
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
sistemaLogin.cadastrarUsuario("usuario1", "outrasenha"); // Tentativa de cadastro repetido

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
if (usuarioLogado) {
  console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
}