document.querySelector("button").addEventListener("click", () => {
    const valueInputName = document.querySelector('#name').value;
    const valueInputEmail = document.querySelector("#email").value;
    const valueInputPhone = document.querySelector('#tel').value;
    const valueInputDate = document.querySelector('#date').value;
    const valueInputPassword = document.querySelector("#password").value;
    const valueInputPasswordConfirm = document.querySelector("#password_confirm").value;
    

    if (valueInputName === "") {
        alert("Favor informe o nome")
        return
    }
    if (valueInputEmail === "") {
        alert("Favor informe o email")
        return
    }
    if (valueInputPhone === "") {
        alert("Favor informe o numero de telefone")
        return
    }
    if (valueInputDate === "") {
        alert("Favor informe a data de nascimento")
        return
    }
    if (valueInputPassword === "") {
        alert("Favor informe a senha")
        return
    }
    if (valueInputPasswordConfirm === "") {
        alert("Favor informe a confirmação de senha")
        return
    }

    const formData = {
        valueInputName: valueInputName,
        valueInputEmail: valueInputEmail,
        valueInputPhone: valueInputPhone,
        valueInputDate: valueInputDate,
        valueInputPassword: valueInputPassword
    }

    axios.post("http://localhost:3333/users", formData)
    .then(function (response) {
        // Lida com a resposta do servidor
        console.log(response.data);
      })
      .catch(function (error) {
        // Lida com erros de requisição
        console.error(error);
      });

    navigate('../login');
})

