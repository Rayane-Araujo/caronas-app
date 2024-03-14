document
  .querySelector(".content-button button")
  .addEventListener("click", function () {
    navigate("ride_create");
  });

const url = "http://localhost:3333/ride";
// const newList = {
//     name: "Rayane",
//     time: "13:00",
//     date: "20/01/1999"
// }

function getRideList() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      // rideList.textContent = JSON.stringify(data)

      document.querySelector(".list_ride").innerHTML = `
       <div class="item_ride_available">
            <div class="item_ride_columm_picture">
                <img src="../images/foto_condut.png" alt="foto_condutor">
            </div>

            <div class="item_ride_columm_details">
                <div class="ajust_text">
                    <img src="../images/icon_car.png" alt="image_car">
                    <span id="rideList">Luiz Meccccira Santos</span>
                </div>

                <div class="details_hours_value">
                    <div class="ajust_text">
                        <img src="../images/icon_clock.png" alt="image_clock">
                        <span>13:00</span>
                    </div>
                    <div class="ajust_text">
                        <!-- <img src="../images/icon_dollar.png" alt="currency_icon" /> -->
                        <span>04/03/2024</span>
                    </div>
                </div>
            </div>

            <div class="item_ride_columm_arrow">
                <img src="../images/icon_arrow_right.png" alt="image_arrow_right">
            </div>

            <div class="item_ride_columm_show_hover">
                <div></div>
            </div>
        </div>`;
    })
    .catch((error) => console.log(error));
}

getRideList();

// "Cadastrando nova lista na API"
// function addNewList(){
//     axios.post(url, newList)
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => console.log(error))
// }
// addNewList()
