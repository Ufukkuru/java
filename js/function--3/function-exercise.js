//function exercise sample-1
let counter = 0
let counterDom = document.querySelector("#counter")
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")

counterDom.innerHTML = counter

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id)
    this.id == "increase" ? counter = counter +=1 : counter = counter -=1
    counterDom.innerHTML = counter

}