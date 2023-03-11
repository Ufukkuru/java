// let tax calculation
let price = 100;
let tax = 0.18;
let priceTax = price * tax ;
let totalprice = price + priceTax;
console.log("price: ",price ,"Total tax: ",priceTax,"Total price: ",totalprice);

//let increase the number hand made with long method
let counter=118
counter = counter + 1 
console.log(counter)

//increase, multiply, divide and subtract

counter ++;
console.log(counter)

counter *= 12
console.log(counter)

counter /= 3
console.log(counter)

counter --
console.log(counter)

// let process priority
console.log(2 + 3 * 10) //32
console.log((2 + 3) * 10) //50 first brackets are added then multiplied

//single or couple
let number = 12;
if (number % 2==0){
    let even="Even number"
    console.log(even)
}
else{
    let odd="Odd number"
    console.log(odd)
}
//exponentiation
console.log(2 ** 12)

//rounding down the number
console.log("rounding down the number: ", Math.floor(1.9))

//round the number up
console.log("round the number up: ", Math.ceil(1.1))

//round the number closer
console.log("round the number closer: ", Math.round(1.6))
