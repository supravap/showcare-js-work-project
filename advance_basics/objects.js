// singlton : object created using constructor (Object.create)
// object created using object literals are not singleton.

const mySym = Symbol("key1")

const JsUser = {
    name: "suprava",
    "full name": "suprava p",
    [mySym]: "myKey1",
    age: 18,
    location: "Fremont",
    email: "suprava@gmail.com",
    isLoggedIn: true,
    lastLoggedinDates: ["Monday", "Thursday"]
} // using object literals


console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // to access symbol datatype we need to use [] notation instead of . opertator

//Object.freeze(JsUser)

JsUser.email = "suprava.p@microsoft.com"
console.log(JsUser.email)

// we can add function inside Objects

JsUser.greetings = function () {
    console.log("Hello JS User " + this.name)
    console.log(`Hello JS User ${this.name}`)
}
JsUser.greetings()

// merge 2 objects

obj1 = {name: "abc", age: 18}
obj2 = {fullName: "def", repoCount: 28}

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2} // spread operator
console.log(obj3)
console.log(obj4)

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

//destructure Objects
const course = {
    courseName: "JS Fundamentals",
    price: 999,
    instructor: "chai aur code"
}

const {instructor: i} = course
console.log(i)

//APIs returns  - javascript object notation

