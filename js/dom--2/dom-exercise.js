//exam result calculation
let stVisa= prompt("Enter Your Visa Score: ");
let stFinal = prompt("Enter Your Fisnal Score: ");

let stAverage = (stVisa * 0.3) + (stFinal * 0.7);

if(stAverage > 0 && stAverage < 30) {
  console.log("Your Grade Point Average:" +stAverage + " You stayed(FF).");
}

else if(stAverage > 31 && stAverage < 49) {
  console.log("Your Grade Point Average: " +stAverage + " DC - Conditional ");
}

else if(stAverage > 50 && stAverage < 84) {
  console.log("Your Grade Point Average:" +stAverage + " CC - You Passed ");
}

else if(stAverage > 85 && stAverage <= 100) {
  console.log("Your Grade Point Average:" +stAverage + " AA - You have a degree");
}

//Student Average
let examgrade  = prompt("Enter you are score: ")
let infoText = document.querySelector("#exercise")

if (examgrade >= 90){
    infoText.innerHTML = "Your grade: AA"
}
else if (examgrade >= 85){
    infoText.innerHTML = "Your grade: BA"
}
else if (examgrade >= 80){
    infoText.innerHTML = "Your grade: BB"
}
else if (examgrade >= 75){
    infoText.innerHTML = "Your grade: CB"
}
else if (examgrade >= 70){
    infoText.innerHTML = "Your grade: CC"
}
else if (examgrade >= 65){
    infoText.innerHTML = "Your grade: DC"
}else if (examgrade >= 60){
    infoText.innerHTML = "Your grade: DD"
}
else if (examgrade >= 50){
    infoText.innerHTML = "Your grade: FD"
}
else if (examgrade >= 0){
    infoText.innerHTML = "Your grade: FF"
}
