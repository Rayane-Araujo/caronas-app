document.querySelector("button").addEventListener("click", function() {
    let valueInputOrigin = document.querySelector("#origin").value;
    let valueInputDestiny = document.querySelector("#destiny").value;
    let valueInputvalue = document.querySelector("#value").value;
    let valueInputDate = document.querySelector("#date").value;
    let valueInputNumber = document.querySelector("#number").value;

    if (valueInputOrigin === "") {
        alert("Favor informar a origem")
        return
    }
    if (valueInputDestiny === "") {
        alert("favor informar o destino desejado")
        return
    }
    if (valueInputvalue === "") {
        alert("favor informar o valor desejado")
        return
    }
    if (valueInputDate === "") {
        alert("favor informar a data desejada")
        return
    }
    if (valueInputNumber === "") {
        alert("favor informar o numero para contato")
        return
    }

    navigate('../look_for_a_ride')
})
