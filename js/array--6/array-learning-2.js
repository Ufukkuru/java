//
let items = [10, 20, 30, 40, 50]
console.log("items--First object: ", items)

//array end object/person push -- add
items.push(60)
console.log("60 : ", items) 

//add item to object start
items.unshift(5)
console.log("5 : ", items)

//array end item extraction
let lastItem = items.pop()
console.log(lastItem, items)

//array first item extraction
let firstItem = items.shift()
console.log(firstItem, items)

//Changing the information of an item in an Array

//first
items[0] = 12;
console.log(items)

//end
items[items.length - 1]= 55
console.log(items)