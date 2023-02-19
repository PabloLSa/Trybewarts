// Variáveis globais

const entrar = document.getElementById('botaoEntrar');
const email = document.getElementById('e-mail');
const senha = document.getElementById('senha');
const checkbox = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
const comentario = document.getElementById('textarea');
const contador = document.getElementById('counter');
const formulário = document.getElementById('evaluation-form');
const dados = document.getElementById('form-data');
const observacoes = document.getElementById('observacoes');
const notas = document.getElementById('nota');
const familias = document.getElementById('familia');
const casa = document.getElementById('casa');
const correio = document.getElementById('correio');
const nome = document.getElementById('nome');
const materia = document.getElementById('materia');

// Função botão login

function entrada() {
  entrar.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
// Função botão enviar formulário
function enviar() {
  botaoEnviar.disabled = true;
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.disabled = true;
    }
  });
}
// Função Contador comentário
comentario.addEventListener('input', (event) => {
  const { target } = event;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  contador.innerHTML = `${maxLength - currentLength}/${maxLength}`;
  console.log(target);
});

// Função verificar checkboxes marcados
function verificaCheckbox() {
  const materiaInserida = document.getElementsByClassName('subject');
  const arrayCheckbox = [];
  for (let index = 0; index < materiaInserida.length; index += 1) {
    if (materiaInserida[index].checked === true) {
      materia.innerHTML = arrayCheckbox.push(` ${materiaInserida[index].value}`);
    }
  }
  materia.innerHTML = `Matérias: ${arrayCheckbox}`;
}
// Função mostrar dados
const perfil = (event) => {
  verificaCheckbox();
  event.preventDefault();
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  formulário.style.display = 'none';
  dados.style.display = 'block';
  nome.innerHTML = `Nome: ${name} ${lastname}`;
  correio.innerHTML = `Email: ${document.getElementById('input-email').value}`;
  casa.innerHTML = `Casa: ${document.getElementById('house').value}`;
  familias.innerHTML = `Família: ${document.querySelector('input[name=family]:checked').value}`;
  notas.innerHTML = `Avaliação: ${document.querySelector('input[name=rate]:checked').value}`;
  observacoes.innerHTML = `Observações: ${document.getElementById('textarea').value}`;
};
botaoEnviar.addEventListener('click', perfil);
// Chamar funções
entrada();
enviar();
