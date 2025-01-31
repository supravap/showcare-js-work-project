// js is single threaded
// in browser this has window object
// node this is undefined.
// contect in JS
// Global execution context
// Function execution context
// Eval execution contect
// Memory creation phase, execution phase

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1)
console.log(result2)