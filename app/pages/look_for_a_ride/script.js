document.querySelector("button").addEventListener("click", function() {
    let valueInputOrigin = document.querySelector("#origin").value;
    let valueInputDestiny = document.querySelector("#destiny").value;
    let valueInputHour = document.querySelector("#hour").value;
    let valueInputDate = document.querySelector("#date").value;

    if (valueInputOrigin === "") {
        alert("Favor informar a origem")
        return
    }
    if (valueInputDestiny === "") {
        alert("favor informar o destino desejado")
        return
    }
    if (valueInputDate === "") {
        alert("favor informar a data desejada")
        return
    }
   
})
