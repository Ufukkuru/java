//first function
function helloworld(){
    console.log("hellow world")
}
function hello(){
    console.log("hello")
    helloworld()
}

hello()

//params and return
let firstName = "lorem"

function greetings(number1= prompt("Enter value: "), number2= prompt("Enter value2: "), sonuc=number1 * number2){
    console.log(`hi ${firstName ? firstName : "No name"} ${sonuc}`)
}

greetings()

//2 params
function greetings2(firName , lastName){
    let info = ` Hello  ${firName} ${lastName}`
    return info
}

let greetingsinfo = greetings2("name , lastname")
console.log(greetingsinfo)

//2 params functions attach sample-2
function domidWrite (functionid, infor){
let domobject = document.querySelector(`#${functionid}`)
domobject.innerHTML = infor
}

domidWrite("function" , greetings2("lorem" ,"ipsum"))
