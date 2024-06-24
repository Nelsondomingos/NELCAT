// Array para armazenar os usuários cadastrados
function createUser() { 
  // Obter os valores dos formulários
  let email = document.getElementById('emailInput').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confimarPassword').value;
  
  // Verificar se as duas password são iguais
  if (password !== confirmarPassword) {
    alert('As senhas Não são iguais');
    return;
  } 
  else {
    //Criar o objecto de usuário 
    let usuario = {
      email:email,
      password:password
    }

    // Converter o objecto para uma string JSON
    let usuarioJSON = usuario.JSON.stringify(usuario);

    // Salvar no localStorage
    localStorage.setItem('usuario', usuarioJSON); 

    // Exibir a mensagem de confirmação
    alert('Conta criada com sucesso');

    // Limpar o formulário
    document.querySelector('form').reset();
  }
}