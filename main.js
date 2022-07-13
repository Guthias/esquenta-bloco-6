const button = document.getElementById('button');

function pegarInfo (e) {
  e.preventDefault();
  //pegar inputs e tags form
  const name = document.getElementById('name');
  const lastname = document.getElementById('lastname');
  const email = document.getElementById('email');
  const movie = document.getElementById('movie');
  // const radio = document.getElementById('radio');
  const radio2 = document.querySelector('input[name = "evil-rate"]:checked');
  const about = document.getElementById('about');

  // criar objeto para guardar cada elemento -- chave/valor;
  const objeto = {
    nome: name.value,
    sobrenome: lastname.value,
    email: email.value,
    filme_favorito: movie.value,
    malvadeza: radio2.parentElement.innerText,
    sobre_mim: about.value,
  }
  return objeto;
}

button.addEventListener('click', pegarInfo);