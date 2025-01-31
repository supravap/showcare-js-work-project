//if
const isUserLoggedIn = true;

if(isUserLoggedIn){

}
const month = "jan";

switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;

    default:
        console.log("No Month Available!")
        break;
}

//Nullish coalescing operator (??) : null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10 ?? 20
console.log(val1)

// ternary operator

const price = 100

price > 80 ? console.log("less than 80") : console.log("greater than 80")