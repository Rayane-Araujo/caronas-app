document.querySelector('.content-button button').addEventListener('click', function (){

    navigate('ride_create');
})

const url = "http://localhost:3333/ride"
// const newList = {
//     name: "Rayane",
//     time: "13:00",
//     date: "20/01/1999"
// }

function getRideList(){
    axios.get(url)
    .then(response =>{
       const data = response.data
       rideList.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getRideList()

// "Cadastrando nova lista na API"
// function addNewList(){
//     axios.post(url, newList)
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => console.log(error))
// }
// addNewList()




