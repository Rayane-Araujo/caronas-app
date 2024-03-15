axios
  .get("http://localhost:3333/ride/1")
  .then(function (response) {
    //Lida com a resposta do servidor
    console.log(response.data.dataRes);

    const data = response.data.dataRes;

    const content = `
      <div class="container-descricao-detalhes-carona">
        <span class="descricao-detalhe">Condutor: ${data.name}</span>
        <span class="descricao-detalhe">Veículo: ${data.vehicle}</span>
      </div>

      <h4>Observações</h4>
      <p class="descricao-detalhe" id="textFieldDescribe">${data.observation}</p>

      <h4>Oferecendo carona de:</h4>

      <div>
        <div class="line_content">
          <img src="../images/Line 12.png" />
        </div>

        <div class="locate_content">
          <div class="origin" id="origin">
            <span>${data.origin}</span>
          </div>

          <div class="destiny" id="destiny">
            <span><span>${data.destiny}</span></span>
            <span class="descricao-detalhe data">
              <span id="date">Data: ${data.date}</span
              ><span id="hour">ás ${data.time}</span>
            </span>
          </div>
        </div>
      </div>
      `;

    document.querySelector(".content_info").innerHTML = content;
  })
  .catch(function (error) {
    //Lida com erros da requisição
    console.error(error);
  });

const modal = document.querySelector("dialog");

document
  .querySelector("#button_interest")
  .addEventListener("click", () => modal.showModal());
document
  .querySelector(".button-close")
  .addEventListener("click", () => modal.close());
