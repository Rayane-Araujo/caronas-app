document.querySelector("#listRide").addEventListener("click", function() {
    let valueInputOrigin = document.querySelector("#origin").value;
    let valueInputDestiny = document.querySelector("#destiny").value;
    let valueInputHour = document.querySelector("#hour").value;
    let valueInputDate = document.querySelector("#date").value;
    let valueList = document.querySelector("#list").value;

   console.log({
    origin: valueInputOrigin,
    destiny: valueInputDestiny,
    hour: valueInputHour,
    date: valueInputDate,
    list: valueList,
   })
    
   
})


