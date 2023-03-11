//user Form
let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit' , formSubmit)

function formSubmit(event){
    event.preventDefault()
    console.log("işlem tamam")
    let scoreFrom = document.querySelector("#score")
    console.log(scoreFrom.value)
    localStorage.setItem('score', scoreFrom.value)
}