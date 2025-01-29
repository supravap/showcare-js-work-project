const user = {
    username: "suprava",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        //console.log(this)
    }
}
user.welcomeMessage()
user.username = "suprava27"
user.welcomeMessage()
console.log(this)

function thisLog() {
    let username = "supravap"
    //console.log(this.username) // this keywork can be used for objects not for functions

}
thisLog()

//arrow functions

const chai = () => 10

const add = (num1, num2) => {
    return num1 + num2
}

const addTwoNums = (num1, num2) => num1 + num2

const getFullName = (firstName, LastName) => ({Fullname: firstName + LastName})

console.log(getFullName("su", "prava"))