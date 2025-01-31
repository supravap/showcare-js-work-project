//for of and for in - High order array loops

const myArr = [1, 2, 3, 4, 5, 6]

for (const i of myArr){
    console.log(i);
}
 // looping in String   
const greetings = "hello Suprava"
for (const j of greetings){
    console.log(j);
}
// looping in map
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('US', "USA")
map.set('UK', "United Kingdom")

console.log(map)
for (const [i,j] of map){
    console.log(i, ':-', j);
}
// looping in Object
const JsUser = {
    name: "suprava",
    "full name": "suprava p",
    age: 18,
    location: "Fremont",
    email: "suprava@gmail.com",
    isLoggedIn: true,
    lastLoggedinDates: ["Monday", "Thursday"]
} // using object literals

for (const i in JsUser){
    console.log(i);
}

for (const key in JsUser) {
    if (Object.prototype.hasOwnProperty.call(JsUser, key)) {
        const element = JsUser[key];
        console.log(element);
        
    }
}

const programmingLanguage = ["java", "javascript", "cpp"]
for (const i in programmingLanguage){
    console.log(programmingLanguage[i]);
}

// "for in" doesnt work on map 
// forEach
const coding = ["java", "javascript", "cpp", "python", "ruby"]
coding.forEach((item, index, array) => {
    console.log(array);
})


const myCoding = [
    {
        lang: "java",
        shortName: "J"
    },
    {
        lang: "javascript",
        shortName: "JS"
    }
]
myCoding.forEach((item) => {
    console.log(item.shortName);
})