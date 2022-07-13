const buttonRegister = document.getElementById('button-register');
const feedbackArea = document.getElementById('feedback-area');
const formDataArea = document.getElementById('form-data');
const formPageArea = document.getElementById('form-page');

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

function renderFormData(formData) {
  deleteMainPageContent();

  for (let i = 0; i < formData.length; i += 1) {
    const { question, answer } = formData[i];
    // const question = formData[i].question;
    // const answer = formData[i].answer;
    const newElement = createListElement(question, answer);
    formDataArea.appendChild(newElement);
  }
}

// Divisão

function pegarInfo(e) {
  e.preventDefault();
  // pegar inputs e tags form
  const name = document.getElementById('name');
  const lastname = document.getElementById('lastname');
  const email = document.getElementById('email');
  const movie = document.getElementById('movie');
  const radio2 = document.querySelector('input[name = "evil-rate"]:checked');
  const about = document.getElementById('about');

  const objeto = [
    {
      question: 'Nome Completo',
      answer: `${name.value} ${lastname.value}`,
    },
    {
      question: 'E-mail',
      answer: email.value,
    },
    {
      question: 'Nivel de Malvadeza',
      answer: radio2.parentElement.innerText,
    },
    {
      question: 'Filme Favorito',
      answer: movie.value,
    },
    {
      question: 'Descrição',
      answer: about.value,
    },
  ];
  renderFormData(objeto);
}

buttonRegister.addEventListener('click', pegarInfo);
