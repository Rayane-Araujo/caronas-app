document.querySelector("button").addEventListener("click", () => {
    const valueInputOrigin = document.querySelector("#origin").value;
    const valueInputDestiny = document.querySelector("#destiny").value;
    const valueInputHour = document.querySelector("#hour").value;
    const valueInputDate = document.querySelector("#date").value;

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

    const formData = {
        valueInputOrigin: valueInputOrigin,
        valueInputDestiny: valueInputDestiny,
        valueInputHour: valueInputHour,
        valueInputDate: valueInputDate
    }

    axios.post("http://localhost:3333/search", formData)
    .then(function (response) {
        // Lida com a resposta do servidor
        console.log(response.data);
      })
      .catch(function (error) {
        // Lida com erros de requisição
        console.error(error);
      });
   
      
})


