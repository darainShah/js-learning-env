const AccountId = 55432
let accountemail = "darainshahedi1729@gmail.com"
var accountpassword = "12345"
accountcity = "surat"

// Not allowed as const cannot be changed
//AccountId = 12345

console.log(AccountId);

accountemail = "shahedi1729@gmai.com"
accountcity = "New Delhi"
accountpassword = "12121"

let accountState  // take undefined value 


/*
Donot use var because of functional scope and block scope 
*/

console.table([AccountId, accountemail, accountcity, accountpassword, accountState]);




