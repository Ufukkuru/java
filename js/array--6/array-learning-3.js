//array inside array

let items = [1, 2, 3, 4, 5]

let femaleUsers =["merva", "meltem", "rüya"]
let maleUsers = ["ufuk", "batu", "bartın"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

//array separation inside object
let newItems = items.splice(2, 4)
console.log("newItems: " , newItems)
console.log("items: " , items)

//find index value of item in array
items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"))

//array copy
let copyItems = items
console.log(items)

copyItems.pop()
console.log(items)
console.log(copyItems)

console.log("slice try: ")
copyItems = items.slice()
copyItems.pop()
console.log(items)
console.log(copyItems)

//2 array informations to connect 
let allUsers = [...femaleUsers,...maleUsers]
console.log(allUsers)

//Converting information in array to string
console.log(allUsers.toString)
console.log(allUsers.join(" --- "))

//adding a value to the index we want
allUsers.splice(allUsers.length -1, 0, "melissa")
console.log(allUsers)