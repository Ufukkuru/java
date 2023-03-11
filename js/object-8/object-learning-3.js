//how to add method in object

let user1 = {
    firstName: "bilgin",
    lastName: "uzman",
    score: [1, 2, 3, 4, 5],
    isActive : true,
    shortName: function(){
        return `${this.firstName[0].toUpperCase()} ${this.lastName}`
    }
}
console.log(user1)
console.log(user1.shortName())
