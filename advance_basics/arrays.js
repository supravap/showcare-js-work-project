// arrays can accept all types of datatypes

const arr = [1, 'suprava', {a: 1, b: 2}, isLoggedin = true, [1, 2, 3, 4]]
const myArr = [1, 2, 3, 4, 5, 6]

// array makes shallow copy 
// so if you assign one array to another and make changes to any of these 2 arrays it will change both.

let myHeros = ['batman', 'superman']
let heros = myHeros

heros = ['ironman', 'thor']

//console.log(myHeros)

myHeros.push('hulk')
// console.log(myHeros)
// console.log(heros)

let myArr2 = new Array (1,2,3);
//console.log(myArr2)

let myArr3 = myArr2;

myArr2.push(6)
myArr3.push(7)
// console.log(myArr2)
// console.log(myArr3)

//tryout includes, indexOf
//console.log(myArr2.join(9))

//slice and splice
//console.log(myArr)
const myArr5 = myArr.slice(1,4)
//console.log(myArr5)
//console.log(myArr)
const myArr6 = myArr.splice(1,4)
//console.log(myArr6)
//console.log(myArr)

//add two arrays

let allHeros = myHeros.concat(heros)
//spread operator
let allHeros2 = [...myHeros, ...heros]
console.log(allHeros)
console.log(allHeros2)

const myArr7 = [1,2,3, [4,5,6, [7,8]]]
console.log(myArr7.flat(3))

console.log(Array.isArray(myArr7))
console.log(Array.from("suprava"))
console.log(Array.of("suprava", 1, 2))