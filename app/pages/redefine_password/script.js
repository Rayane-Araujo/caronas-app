
document.querySelector("#sendCode").addEventListener("click",function() {
    let valueInputEmail = document.querySelector("#email").value;
   
   console.log({
    email: valueInputEmail,
});

 if (valueInputEmail =="") {
    return alert("Informe o email para envio do código");
 }
})

document.querySelector("#redefine").addEventListener("click",function() {
    let valueInputemailCode = document.querySelector("#emailCode").value;
    let valueInputPassword = document.querySelector("#password").value;
    let valueInputPasswordConfirm = document.querySelector("#passwordConfirm").value;
   
   console.log({
    emailCode: valueInputemailCode,
    password: valueInputPassword,
    passwordConfirm: valueInputPasswordConfirm,
});

 if (valueInputemailCode =="") {
    return alert("Informe o código enviado por email");
 }
 if (valueInputPassword =="") {
    return alert("Informe nova senha");
 }
 if (valueInputPasswordConfirm =="") {
    return alert("confirme a nova senha");
 }

 navigate('login');
})




