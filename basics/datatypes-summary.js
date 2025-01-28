//primitive datatypes, when defined we get a copy not the reference.

// String
// Number
// Boolean
// null
// undefined
// symbol
// BigInt

// Reference, when defined we get the refence of the datatypes
// Array
// Objects
// Functions

const arr = ["ironman", "superman", "spiderman", "batman"]

//console.log(typeof arr) // this prints object

// 2 types of memory in javascript
// stack and heap memory
// Stack stores premitive datatypes
// Heap gives reference so it stores non-premitive data types.

let myYoutubeName = "suprava27"

let anotherName = myYoutubeName

//console.log(anotherName)

anotherName = "supravap"

//console.log(anotherName)
//console.log(myYoutubeName)

let anotherArr = arr

console.log(arr)
console.log(anotherArr)

anotherArr.push("thor")

console.log(arr)
console.log(anotherArr)