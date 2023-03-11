//object key value

let laptop1 = {
    brand: "apple",
    model_name: "Macbook pro",
    year: "2023",
    "2kg":2
}
console.log(laptop1.brand)
console.log(laptop1.year)
console.log(laptop1.model_name)
console.log(laptop1["2kg"])

//add new value in keyword
laptop1.brand = "Mac"
console.log(laptop1)

//new information add
laptop1.material ="iron-titanium"
console.log(laptop1)

//get the object key value
//step-1
key = Object.keys(laptop1)
console.log(key)
//step-2
console.log(Object.keys(laptop1))
//step-3
key.forEach (item => {
    console.log(item)
    console.log(laptop1[item])
});

//accessing value information
console.log(
    Object.values(laptop1)
)