//Working with arrays


//Array building

let domain = "we code"
isActive = false
let items = [1,2,3,4,5,isActive,domain]
console.log(items)

//items = [1, 2, 3]
//console.log(items) new items create 

//Getting the number of elements and elements in an array
console.log(items.length)


//reach the first element
console.log(items[0])

//reach the end element
console.log(items[items.length - 1])

//Checking if an array exists in a variable

console.log(
    typeof(items)
)

console.log(
    Array.isArray(items)
)

//which is array information
console.log("[] : ",
    Array.isArray([])
)

console.log( "1 : ",
    Array.isArray(1)
)

console.log( "True : ",
    Array.isArray(true)
)