const coding = ["java", "javascript", "cpp", "python", "ruby"]

const val = coding.forEach((item, index, array) => {
    //console.log(array);
    return item
})

//console.log(val) // will print undefined because forEach doesn't return anything

const val2 = []
coding.forEach((item) => {
    val2.push(item);
})
//console.log(val2) //this way we can return values from forEach

const newVal = coding.filter((item)=>{
    return item.startsWith("j")
})
//console.log(newVal)

const students = [
    { name: "Alice", age: 20, major: "Computer Science" },
    { name: "Bob", age: 21, major: "Mathematics" },
    { name: "Charlie", age: 19, major: "History" }
]

const myArr = [1, 2, 3, 4, 5, 6]
const myArrDoubled = myArr.map((item) => {
    return item * 2;
})
//console.log(myArrDoubled)
const myNums = [1, 2, 3, 4, 5, 6]
const initialVal = 0;
const myTotal = myNums.reduce((acc, curVal) => {
    console.log(`${acc} ---> ${curVal}`)
    return acc + curVal
}, initialVal)
console.log(myTotal)