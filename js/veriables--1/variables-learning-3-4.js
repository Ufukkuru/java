//boolean treu or false

let isActive = false //0    
isActive = true //1
console.log(isActive);

let userName;
let hasuserName = Boolean(userName);
console.log(hasuserName);

let userNames = 1;
console.log("username: ",Boolean(userNames));

/*0 , -0, null, false, NaN, undefined, ("") ->
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c7 = Boolean(-0);
*/

let prices = 322
let stringprice = "111"
let haspassword = true

console.log(
"Prices: ",
typeof(price)
)
console.log(
"string price: ",
typeof(stringprice)
)
console.log(
"has password: ",
typeof(haspassword)
)

//Converting string text information to int and float
let number1 = "11"
number1= parseInt(number1)
console.log("number1: ", number1, typeof(number1))

let number2 ="11px"
number2= parseInt(number2)
console.log("number2: ", number2, typeof(number2))

let number3 ="11.2"
number3= Number(number3)
console.log("number3: ", number3, typeof(number3))

let number4 ="11.4px"
number4= parseFloat(number4)
console.log("number4: ", number4, typeof(number4))

//convert data type to string
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))