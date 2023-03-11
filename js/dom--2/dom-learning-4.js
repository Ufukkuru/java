//comparison operators and logical operators

let price  = "100"
let user = "quest"
// == equal
console.log(price==1)//false
console.log(price==100)//true

// === if the type is equal
console.log(price===1)//false
console.log(price===100)//false

//if not equal
console.log(user != "quest")

//if small
console.log(price<10)
console.log(price<110)

//if big 
console.log(price>10)
console.log(price>110)

//if small or equal
console.log(price<=10)
console.log(price<=100)
//if big or equal
console.log(price>=10)
console.log(price>=100)

//&& and 
console.log(price && user != "quest")

//|| or 
console.log(price || user != "quest")

//!
console.log(!(price<110)) //false 