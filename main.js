const buttonRegister = document.getElementById('button-register');
const feedbackArea = document.getElementById('feedback-area');
const formDataArea = document.getElementById('form-data');
const formPageArea = document.getElementById('form-page');

const formData = [
  {
    question: 'Nome Completo',
    answer: 'Gru Segundo',
  },
  {
    question: 'E-mail',
    answer: 'teste@teste.com',
  },
  {
    question: 'Nivel de Malvadeza',
    answer: '10',
  },
  {
    question: 'Filme Favorito',
    answer: 'Minions 2',
  },
  {
    question: 'Descrição',
    answer: 'Donec turpis magna, vestibulum sed vehicula sed, congue in mi. Etiam rutrum nibh quis ex sagittis porttitor. Maecenas tempor lacus lacus, non venenatis tortor sodales in. Maecenas a dolor feugiat, condimentum diam sit amet, fermentum dui. Sed non augue nec velit ullamcorper vulputate ',
  },
];

function createListElement(question, answer) {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <strong>${question}</strong>
    <span>${answer}</span>
  `;
  return liElement;
}

function deleteMainPageContent() {
  feedbackArea.classList.remove('hidden');
  formPageArea.remove();
}

function renderFormData(event) {
  event.preventDefault();

  deleteMainPageContent();

  for (let i = 0; i < formData.length; i += 1) {
    const { question, answer } = formData[i];
    // const question = formData[i].question;
    // const answer = formData[i].answer;
    const newElement = createListElement(question, answer);
    formDataArea.appendChild(newElement);
  }
}

buttonRegister.addEventListener('click', renderFormData);
