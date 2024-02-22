document.querySelector("button").addEventListener("click", function() {
    let valueInputOrigin = document.querySelector("#origin").value;
    let valueInputDestiny = document.querySelector("#destiny").value;
    let valueInputHour = document.querySelector("#hour").value;
    let valueInputDate = document.querySelector("#date").value;
    let valueInputDesiredValue = document.querySelector("#value").value;
    let valueCheckBoxBaggage = document.querySelector("#checkbox1").checked;
    let valueCheckBoxAnimals = document.querySelector("#checkbox2").checked;
    let valueInputNumberContact = document.querySelector("#number").value;
    let valueTextFieldDescribe = document.querySelector("#textFieldDescribe").value;

    console.log({
        origin: valueInputOrigin,
        destiny: valueInputDestiny,
        hour: valueInputHour,
        date: valueInputDate,
        value: valueInputDesiredValue,
        baggage: valueCheckBoxBaggage,
        animals: valueCheckBoxAnimals,
        numberContact: valueInputNumberContact,
        textField: valueTextFieldDescribe,
    })

    if (valueInputOrigin ==""){
        return alert("Informe sua origem de destino");
    }

    if (valueInputDestiny ==""){
        return alert("Informe o destino desejado");
    }

    if (valueInputNumberContact ==""){
        return alert("Informe numero para contato");
    }
 

    // navigate("look_for_a_ride");

})
