document.querySelector("button").addEventListener("click", function() {
    let valueInputOrigin = document.querySelector("#origin").value;
    let valueInputDestiny = document.querySelector("#destiny").value;
    let valueInputhour = document.querySelector("#hour").value;
    let valueInputvalue = document.querySelector("#value").value;
    let valueInputDate = document.querySelector("#date").value;
    let valueInputCheckbox1 = document.querySelector("#checkbox1").value;
    let valueInputCheckbox2 = document.querySelector("#checkbox2").value;
    let valueInputNumber = document.querySelector("#number").value;

    console.log(valueInputOrigin);
    console.log(valueInputDestiny);
    console.log(valueInputHour);
    console.log(valueInputvalue);
    console.log(valueInputDate);
    console.log(valueInputCheckbox1);
    console.log(valueInputCheckbox2);
    console.log(valueInputNumber);

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
