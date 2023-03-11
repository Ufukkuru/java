// for loop
for (let index = 0; index<10; index++){
    console.log(index)
}


let users = ["lorem", "ipsum", "dolor", ]
let userListDom = document.querySelector("#userList")
for(let index = 0; index < users.length; index++){
    const liDom = document.createElement('li')
    liDom.innerHTML=users[index]
    userListDom.appendChild(liDom)
}

//i loop 2,4,6
for (let i = 0; i<40; i++){
    if(i % 2 ==0){
        console.log(i)
    }
}

//i loop --
for (let loop=10; loop >= 0; loop--){
    console.log(loop)
}
