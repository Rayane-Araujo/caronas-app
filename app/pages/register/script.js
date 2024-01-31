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

    navigate('../login');
})

