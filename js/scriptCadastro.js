//função start que puxa todas as outras ao clique do botão
function login() {
  recebeEmail();
  recebeNome();
  recebeSobrenome();
}

//função que recebe e verifica o email
function recebeEmail() {
  var inputEmail = document.querySelector('#email');
  var email = String(inputEmail.value);

  validarEmail(email);
}

//função que valida a formatação do email
function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;

  if (!re.test(email)) {
    alert('email invalido');
  }
  return re.test(email);
}

//funçao que recebe o nome e guarda no localStorage
function recebeNome() {
  var inputNome = document.querySelector('#nome');
  var nome = String(inputNome.value);

  if ((nome = null)) {
    console.log('nome');
  }
}

//funçao que recebe o sobrenome e guarda no localStorage
function recebeSobrenome() {
  var segundoNome = document.querySelector('#sobrenome');
}
