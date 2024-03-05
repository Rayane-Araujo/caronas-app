const button = document.querySelector("#button_interest")
const modal = document.querySelector("dialog")

button.onclick = function(){
    modal.showModal()
}

document.querySelector(".button-close").addEventListener('click',function(){
    document.querySelector('#overlay').style.display = 'none';
  })