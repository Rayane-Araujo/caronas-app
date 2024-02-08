document.querySelector("button").addEventListener("click", function() {
    let valueInputName = document.querySelector('#name').value;
    let valueInputEmail = document.querySelector("#email").value;
    let valueInputPhone = document.querySelector('#tel').value;
    let valueInputDate = document.querySelector('#date').value;
    let valueInputPassword = document.querySelector("#password").value;
    let valueInputPasswordConfirm = document.querySelector("#password_confirm").value;
    
    console.log({
        name: valueInputName,
        email: valueInputEmail,
        phone: valueInputPhone,
        date: valueInputDate,
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
    if (valueInputDate === "") {
        alert("Favor informe a data de nascimento")
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

    if (valueInputPasswordConfirm != valueInputPassword) {
        alert('as senhas não coincidem');
        
        document.querySelector('#password').value ='';
        document.querySelector('#password_confirm').value ='';
        document.querySelector('#password').focus();
        return
    }

    navigate('../login');
    
    const formData = {
        valueInputName: valueInputName,
        valueInputEmail: valueInputEmail,
        valueInputPhone: valueInputPhone,
        valueInputDate: valueInputDate,
        valueInputPassword: valueInputPassword,
    }
    axios.post("http://localhost:3333/users", formData)
    
    .then(function (response){
        console.log(response.data);
    })
    
    .catch(function (error) {
        console.log(error);
    });
})

