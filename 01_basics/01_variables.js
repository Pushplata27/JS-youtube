const accountId = 729039434
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Bangalore";


accountEmail = "bcd@xyz.com"
accountPassword = "123456"
accountCity = "Ranchi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])