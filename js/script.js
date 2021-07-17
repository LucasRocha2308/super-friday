const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let content = document.getElementById("content");

  let carregando = ` <img src="./assets/loader.gif" alt="loader">`;

  let mensagem = `<p>Cadastro realizado com sucesso, você receberá em primeira mão as promoções da SUPER FRIDAY</p>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = mensagem;
  }, 2000);
});
