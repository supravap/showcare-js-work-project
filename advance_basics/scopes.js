
let a = 100
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a)
    //console.log(b)
}

console.log(a)
//console.log(c)

function one() {
    const username = "suprava"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) // this will give error as website is available iside function two.

    two()
}

one()

console.log(addOne(5))
function addOne(value) {
    return value + 1

}
// console.log(addTwo(1)) cannot call it
const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(1))