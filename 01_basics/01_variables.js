const accountId = 112345 // you cannot change the vlue once assigned
let accountEmail = "billyq@gmail.com" //
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate;

//accountId = 2 //not allowed
accountEmail = "hc@gmail.com"
accountPassword = "123443332"
accountCity = "Jhelum"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])


/*
 Perfer not to use var, becuaee of issue in block scope and functional scope 
*/ 