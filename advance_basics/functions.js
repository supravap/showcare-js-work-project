//function

function greetings (num1, num2) {
    let result = num1 + num2
    console.log(`hello Suprava  ${result}` )
    return result
}

const functionResult = greetings (3, 5)

console.log(functionResult)

//rest operator
function calculateCartPrice (price1, price2,...price){
    return price
}
console.log(calculateCartPrice(100, 400, 500, 3))

const User = {
    name: "suprava",
    age: 18,
    location: "Fremont",
    email: "suprava@gmail.com",
    isLoggedIn: true,
    lastLoggedinDates: ["Monday", "Thursday"]
} 

// passing object inside function as parameter.
function handleObj (anyObject) {
    console.log(`My name is ${anyObject.name} and I\'m ${anyObject.age} old.`)

}

handleObj(User)

//similarly we can pass array to a function and use the array inside the function.