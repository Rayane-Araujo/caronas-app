document.querySelector("button").addEventListener("click", function () {
  const origin = document.querySelector("#origin").value;
  const destiny = document.querySelector("#destiny").value;
  const time = document.querySelector("#hour").value;
  const date = document.querySelector("#date").value;
  const observation = document.querySelector("#textFieldDescribe").value;
  const checkBoxRequest = document.querySelector("#checkbox2");
  const checkBoxOffer = document.querySelector("#checkbox1").value;

  const checkbox = checkBoxRequest.checked ? "request" : "offer";

  if (!origin) {
    alert("Informe sua origem");
    return;
  }
  if (!destiny) {
    alert("Informe o destino desejado");
    return;
  }
  if (!date) {
    alert("Informe a Data");
    return;
  }
  if (!time) {
    alert("Informe o horario");
    return;
  }

  const formData = {
    origin,
    destiny,
    date,
    time,
    observation,
    type: checkbox,
    user_id: 1,
  };

  // alert("Carona criada com sucesso!");

  axios
    .post("http://localhost:3333/ride", formData)

    .then(function (response) {
      //Lida com a resposta do servidor
      console.log(response.data);

      if (checkbox === "request") {
        alert("Pedido de Carona criado com sucesso!");
      } else {
        alert("Carona Criado com sucesso!");
      }
    })
    .catch(function (error) {
      //Lida com erros da requisição
      console.error(error);
      alert(JSON.stringify(error.response.data.msg));
    });
  /* navigate("look_for_a_ride"); */
});
