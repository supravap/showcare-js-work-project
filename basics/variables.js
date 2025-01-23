const accountId = 1237 // cannot change the value
let accountEmail = "suprava27@gmail.com" 
var accountPassword = "123740"
accountCity = "Fremont"
let accountState // if not declaired, the value is 'undefined'

//accountId = 2720
accountEmail = "supravap27@gmail.com"
accountPassword = "123712"
accountCity = "Cupertino"

/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])