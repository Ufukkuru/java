//
let user = {userName: "Ufuk Kuru" , isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo)