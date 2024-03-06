const button = document.querySelector("#button_interest")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector(".button-close")

button.onclick = function(){
    modal.showModal()
}

buttonClose.onclick = function(){
    modal.close()
}