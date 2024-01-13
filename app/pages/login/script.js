


document.querySelector("button").addEventListener("click", function() {
    let valueInputEmail = document.querySelector("#email").value;
    let valueInputPassword = document.querySelector("#password").value;

    console.log(
        valueInputEmail,
        valueInputPassword,
    )

    if (valueInputEmail === "") {
        alert("Campo Input Email está vazio")
        return
    }
    if (valueInputPassword === "") {
        alert("Campo Input Senha está vazio")
        return
    }

    navigate('../option');
})

// onclick="navigate('../option')"