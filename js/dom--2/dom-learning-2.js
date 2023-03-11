//reach or include item to list

//child - last -end
let item = document.querySelector('ul#apps>li:last-child')
console.log(item)
// child - first -first
let items = document.querySelector('ul#apps>li:first-child')
console.log(items)

//lorem first different
let ite = document.querySelector('ul#apps>li:first-child')
ite.innerHTML = "lorem different"

//new add item -use append
let ulItem = document.querySelector("ul#apps")
let addItem = document.createElement('li')
addItem.innerHTML = "new end text"
ulItem.append(addItem)

//new add item -use append
let ulItems = document.querySelector("ul#apps")
let addItems = document.createElement('li')
addItems.innerHTML = "new first text "
ulItems.prepend(addItems)