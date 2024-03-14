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
    email: valueInputEmail,
    pass: valueInputPassword,
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

   navigate('ride_list')
});

document.querySelector('#forgot-password').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#overlay').style.display = 'block';
  document.querySelector('#alert-text').innerHTML = '<h5>Informação</h5><p>Entre em contato via Whatsapp no número: 11942981822</p>';

  setTimeout(() => {
    document.querySelector('#overlay').style.display = 'none';
  }, 4000);  
});

document.querySelector(".button-close").addEventListener('click',function(){
  document.querySelector('#overlay').style.display = 'none';
})

