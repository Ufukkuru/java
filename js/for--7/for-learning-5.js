//Using array filter with for

//sample-1
const PRODUCTS =["xiaomi", "iphone", "huawei", "oppo", "samsung", "nokia"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length>5)
console.log(NEW_PRODUCTS)

//sample-2 active users
const USERS = [
    {FullName: "emel karasu" , isActive: false},
    {FullName: "ece karasu" , isActive: true},
    {FullName: "ecem karasu" , isActive: false},
    {FullName: "emrah karasu" , isActive: true},
    {FullName: "erhan karasu" , isActive: true},
    {FullName: "tuna karasu" , isActive: true},
    {FullName: "emrald :D karasu" , isActive: false},
    {FullName: "semira karasu" , isActive: true}
]

const ACTIVE_USERS = USERS.filter(active => active.isActive === true)
console.log(ACTIVE_USERS)
