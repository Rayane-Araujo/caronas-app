document.querySelector("button").addEventListener("click", function() {
    const valueInputEmail = document.querySelector("#email").value;
    const valueInputPassword = document.querySelector("#password").value;

    console.log({
        email: valueInputEmail,
        password: valueInputPassword,
    })

    if (valueInputEmail === "" ) {
        alert("Favor informar o email")
        return
    }
    if (valueInputPassword === "") {
        alert("favor informar a senha")
        return
    }

    const formData = {
        email: valueInputEmail,
        valueInputPassword: valueInputPassword
    }
    axios.post("http://localhost:3333/users", formData)
    
    .then(function (response){
        console.log(response.data);
    })
    
    .catch(function (error) {
        console.log(error);
    });

})

