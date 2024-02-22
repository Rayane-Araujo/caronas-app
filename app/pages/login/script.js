document.querySelector("button").addEventListener("click", function() {
    const valueInputEmail = document.querySelector("#email").value;
    const valueInputPassword = document.querySelector("#password").value;

    console.log({
        email: valueInputEmail,
        password: valueInputPassword,
    })

    if (valueInputEmail === "") {
        alert("Favor informar o email")
        return
    }
    if (valueInputPassword === "") {
        alert("favor informar a senha")
        return
    }

    const formData = {
        valueInputEmail: valueInputEmail,
        valueInputPassword: valueInputPassword,
    }
        
    axios.post("http://localhost:3333/login", formData)
        
    .then(function (response) {
        // Lida com a resposta do servidor
        console.log(response.data);
      })
      .catch(function (error) {
        // Lida com erros de requisição
        console.error(error);
      });

    navigate('../option');
})

