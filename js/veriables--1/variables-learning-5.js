//Tamplate literals
let usertag="Ufuk"
let domain="developerufuk.com"
console.log("Welcome our gmail address: ",usertag +"@"+ domain )

let info = `Welcome ${usertag} our web address ${domain} 
You have everything at this web address
your debt for everything at this website: ${(5+7)*6}
day hours informaitons: ${new Date().getHours()}
`
console.log(info)