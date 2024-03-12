document.querySelector("button").addEventListener("click", function () {
  const valueInputOrigin = document.querySelector("#origin").value;
  const valueInputDestiny = document.querySelector("#destiny").value;
  const valueInputHour = document.querySelector("#hour").value;
  const valueInputDate = document.querySelector("#date").value;
  const valueTextFieldDescribe = document.querySelector("#textFieldDescribe").value;
  // const checkbox = document.querySelectorAll('input[type="checkbox"]');
  const valueCheckBoxRequest = document.querySelector("#checkbox2");
  const valueCheckBoxOffer = document.querySelector("#checkbox1").value;

  console.log("eeee", {
    valueInputOrigin,
    valueInputDestiny,
    valueInputHour,
    valueInputDate,
    valueTextFieldDescribe,

  });

  const checkbox = (valueCheckBoxRequest.checked) ? "request" : "offer"


  console.log("aaaaab", checkbox);

 

  if (valueInputOrigin === "") {
    alert("Informe sua origem");
    return;
  }
  if (valueInputDestiny === "") {
    alert("Informe o destino desejado");
    return;
  }


  const formData = {
    origin: valueInputOrigin,
    destiny: valueInputDestiny,
    date: valueInputDate,
    time: valueInputHour,
    observation: valueTextFieldDescribe,
    type: checkbox,
  };

  axios
    .post("http://localhost:3333/ride", formData)

    .then(function (response) {
      //Lida com a resposta do servidor
      console.log(response.data);
    })
    .catch(function (error) {
      //Lida com erros da requisição
      console.error(error);
    });
  /* navigate("look_for_a_ride"); */
});
