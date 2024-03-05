document.querySelector("button").addEventListener("click", function () {
  const valueInputOrigin = document.querySelector("#origin").value;
  const valueInputDestiny = document.querySelector("#destiny").value;
  const valueInputHour = document.querySelector("#hour").value;
  const valueInputDate = document.querySelector("#date").value;
  const valueTextFieldDescribe = document.querySelector("#textFieldDescribe").value;

  console.log({
    origin: valueInputOrigin,
    destiny: valueInputDestiny,
    hour: valueInputHour,
    date: valueInputDate,
    textField: valueTextFieldDescribe,
  });

  if (valueInputOrigin === "") {
    alert("Informe sua origem");
    return;
  }

  if (valueInputDestiny === "") {
    alert("Informe o destino desejado");
    return;
  }


  const formData = {
    valueInputOrigin,
    valueInputDestiny,
    valueInputDate,
    valueInputHour,
    valueTextFieldDescribe,
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
