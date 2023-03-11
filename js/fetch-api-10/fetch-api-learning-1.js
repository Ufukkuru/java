//fetch api used

fetch("data/settings.json").then(response => {
    return response.json()
}).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

//pull data via api
let usersList = document.querySelector("#users")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item =>{
        let liDom = document.createElement('li')
        liDom.innerHTML = item.title
        usersList.appendChild(liDom)
    })
})