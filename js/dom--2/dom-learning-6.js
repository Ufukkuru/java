//multi-condition structure

//driver license
let userName = prompt("Enter User Name: ")
let old = prompt("enter your age: ")
let info = document.querySelector("#sample")

if (userName && old >= 18){
    info.innerHTML="The user is old enough to get a driver's license."
}
else if (!userName){
info.innerHTML="You don't have a username"
}
else if (!old){
info.innerHTML="You are not old"
}
else if (!(old >=18)){
info.innerHTML="The user is not old enough to get a driver's license"
}


//used ternary ||| short if else commat 
let userTag = prompt("Enter User Tag:")
let sample2 = document.querySelector("#samplee")

sample2.innerHTML = `${userTag.length > 0 ? userTag : "user not found"} `