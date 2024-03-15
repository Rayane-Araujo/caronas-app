document
  .querySelector(".content-button button")
  .addEventListener("click", function () {
    navigate("ride_create");
  });

const url = "http://localhost:3333/ride";


function getRideList() {
  axios.get(url)
    .then(response => {
      const data = response.data;
      rideList.textContent = JSON.stringify(data)
      console.log(response.data)

    })
    .catch(error => console.log(error))
}
getRideList()

