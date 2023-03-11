//How to use object and array destruction

let settings = {
    userName: "Ufuk",
    password: "Badpassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "wecode.org"
}

//one-shot removal of objects within the object
/*let userName = settings.userName
console.log(userName)*/

let {userName: user, password, isActive, ip: ipServer, serverName } = settings
console.log(user, password, isActive, ipServer, serverName)
console.log(user)

//removing some objects inside the object
let {userName: user2, password: password2, isActive: isActive2, ...newsettings} = settings
console.log(newsettings)

//copying with object destruction

/* error 
let settings2 = settings
settings2.userName = "Different information"
console.log(settings)
console.log(settings2)
*/ 

let settings2 = { ...settings}
settings2.userName = "different"
console.log(settings) 
console.log(settings2) //different name