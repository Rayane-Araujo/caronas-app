document.querySelector("button").addEventListener("click", function () {
  const valueInputEmail = document.querySelector("#email").value;
  const valueInputPassword = document.querySelector("#password").value;

  console.log({
    email: valueInputEmail,
    password: valueInputPassword,
  });

  if (valueInputEmail === "") {
    alert("Favor informar o email");
    return;
  }
  if (valueInputPassword === "") {
    alert("favor informar a senha");
    return;
  }

  const formData = {
    valueInputEmail: valueInputEmail,
    valueInputPassword: valueInputPassword,
  };

  axios
    .post("http://localhost:3333/login", formData)

    .then(function (response) {
      // Lida com a resposta do servidor
      console.log(response.data);
    })
    .catch(function (error) {
      // Lida com erros de requisição
      console.error(error);
    });

});

document.querySelector('#forgot-password').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#overlay').style.display = 'block';
  document.querySelector('#alert-text').innerHTML = '<h2>Informação</h2><p>Entre em contato via Whatsapp no número: 11942981822</p>';
});

