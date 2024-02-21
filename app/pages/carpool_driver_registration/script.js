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


    if (valueInputOrigin ===""){
        alert("Informe sua origem de destino");
        return 
    }

    if (valueInputDestiny ===""){
         alert("Informe o destino desejado");
         return
    }

    if (valueInputNumberContact ===""){
         alert("Informe numero para contato");
         return
    }
 
const formData = {
    valueInputOrigin,
    valueInputDestiny,
    valueInputDate,
    valueInputHour,
    valueInputDesiredValue,
    valueInputNumberContact,
	valueCheckBoxAnimals,
	valueCheckBoxBaggage,
	valueTextFieldDescribe,
}



axios.post("http://localhost:3333/offer", formData)

.then(function(response){
    //Lida com a resposta do servidor
    console.log(response.data);
})
.catch(function(error){
    //Lida com erros da requisição
    console.error(error);
})
    /* navigate("../look_for_a_ride"); */

})
