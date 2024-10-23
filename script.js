// script.js
const form = document.getElementById('form');
const tbody = document.getElementById('tbody');
const cadastros = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validação básica
  if (!form.checkValidity()) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  cadastros.push({ nome, email });

  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${email}</td>
  `;
  tbody.appendChild(novaLinha);

  // Mensagem de sucesso
  alert('Cadastro realizado com sucesso!');

  form.reset();
});