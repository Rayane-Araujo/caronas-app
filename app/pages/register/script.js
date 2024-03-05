document.querySelector("button").addEventListener("click", () => {
    const valueInputName = document.querySelector('#name').value;
    const valueInputEmail = document.querySelector("#email").value;
    const valueInputPhone = document.querySelector('#tel').value;
    const valueInputVehicle = document.querySelector('#vehicle').value;
    const valueInputPassword = document.querySelector("#password").value;
    const valueInputPasswordConfirm = document.querySelector("#password_confirm").value;
    
    console.log({
        name: valueInputName,
        email: valueInputEmail,
        phone: valueInputPhone,
        vehicle: valueInputVehicle,
        password: valueInputPassword,
        PasswordConfirm: valueInputPasswordConfirm,
    })
    
    if (valueInputName === "") {
        alert("Favor informe o nome");
        return
    }
    if (valueInputEmail === "") {
        alert("Favor informe o email");
        return
    }
    if (valueInputPhone === "") {
        alert("Favor informe o numero de telefone");
        return
    }
    if (valueInputVehicle === "") {
        alert("Favor informe o modelo do veículo")
        return
    }

    if (valueInputPasswordConfirm != valueInputPassword ){
        alert("as senhas não coincidem")
        return
   
    }
    if (valueInputPassword === "") {
        alert("Favor informe a senha");
        return

        
    }
    if (valueInputPasswordConfirm === "") {
        alert("Favor informe a confirmação de senha");
        return

    
  
    }

  

    const formData = {
        valueInputName: valueInputName,
        valueInputEmail: valueInputEmail,
        valueInputPhone: valueInputPhone,
        valueInputVehicle: valueInputVehicle,
        valueInputPassword: valueInputPassword
    }
    alert("Cadastro Realizado com Sucesso!");

    axios.post("http://localhost:3333/users", formData)
    .then(function (response) {
        // Lida com a resposta do servidor
        console.log(response.data);
      })
      .catch(function (error) {
        // Lida com erros de requisição
        console.error(error);
      });

    navigate('login');
})

