//String data type operations
let email = "ufuk@gmail.com"
let firstName= "Ufuk"
let lastName= "Kuru"

//Replace informations
newEmail = email.replace('ufuk@gmail.com','ufuk@github.com')
console.log(newEmail)

//slice
let dommain = newEmail.slice(newEmail.search("@") + 1)
console.log(dommain)

//includes
email=email.includes('sadsadsa') //false
console.log(email)

//string length 
console.log(newEmail.length)

//find the first character
console.log(firstName[0])
console.log(firstName.charAt(0))//same

//uppercase and lowercase letters
firstName = firstName.toUpperCase()
console.log(firstName)

lastName = lastName.toLowerCase()
console.log(lastName)

//String search
newEmail = newEmail.search("@")
console.log(newEmail)

//capitalize first letters
let fullnames=`Name ${firstName[0].toUpperCase()}${firstName.slice(1)} lastname ${lastName[0].toUpperCase()}${lastName.slice(1)} `
console.log(fullnames)