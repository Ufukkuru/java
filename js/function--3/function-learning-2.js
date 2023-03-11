//Used Arrow Function
function hello(firstName){
    console.log(`Hello ${firstName}`)
}
hello('Javascript')

const helloFunc = (firstName) => { console.log(`Hello ${firstName}`) }
helloFunc("Func")

const helloFunc2 = firstName => console.log(`Hello ${firstName}`)
helloFunc2("Func2")

const helloFunc3 = (firstName, lastName) =>  console.log(`Hello ${firstName} ${lastName}`)
helloFunc3("Ufuk","Kuru")

const helloFunc4 = (firstName, lastName) =>  { let info = `Hello ${firstName} ${lastName}`
console.log(info)
return }
helloFunc4("Ufuk","Kuru")
