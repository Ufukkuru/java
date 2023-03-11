//Event

let events  = document.querySelector("#event")
events.addEventListener("click", OpenClick)

function OpenClick (){
    console.log("Clicked")
    console.log(this.innerHTML = "Different informations")
}