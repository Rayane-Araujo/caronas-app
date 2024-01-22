

document.querySelector("#sendCode").addEventListener("click", function () {
    let valueInputEmail = document.querySelector("#email").value;


    if (valueInputEmail === "") {
        alert("Favor informar o email")
        return
    }
})

document.querySelector("#redefine").addEventListener("click", function () {
    let valueInputEmailCode = document.querySelector("#emailCode").value;
    let valueInputPassword = document.querySelector("#password").value;
    let valueInputPasswordConfirm = document.querySelector("#passwordConfirm").value;

    if (valueInputEmailCode === "") {
        alert("Favor informar o código")
        return
    }
    if (valueInputPassword === "") {
        alert("Favor informar nova senha")
        return
    }
    if (valueInputPasswordConfirm === "") {
        alert("Favor confirmar nova senha")
        return
    }

    navigate('../login');
})

