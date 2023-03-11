//break & contiune
//break
for(conunter = 0; conunter<10; conunter++){
    console.log(conunter)
    if(conunter === 5 ){
        break
    }
}
//continue
for(numbers = 0; numbers<10; numbers++){ 
    if(numbers === 5 ){
        continue
    }
    console.log(numbers)
}

//sample
const UL_DOM = document.querySelector("#useList")
const LOREM_LIST = ["lorem", "door", "back", "get", "elit"]
let index = 0;
for(; index<LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor"){
        break
    }
    let LI_DOM =document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}