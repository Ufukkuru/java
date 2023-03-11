//dom url
console.log(document.URL)
//dom location
console.log(document.location)
//host name
console.log(document.location.hostname)
//file name
console.log(document.location.pathname)

//user take informations sample-1
let fullName = prompt("Lutfen adinizi giriniz: ")
let greeting = document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <i style="color:red">${fullName}</i>`


// dom elementbyid sample-2
let app = document.getElementById('app')
console.log(app.innerHTML)

//dom querySelector sample-3
let appo = document.querySelector("#appo")
appo.innerHTML += " verildi"
appo.style.color = "red"
