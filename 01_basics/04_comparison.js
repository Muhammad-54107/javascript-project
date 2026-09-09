//console.log(2 > 1); //ex comparison
//console.log(2 >= 1); //ex comparison
//console.log(2 < 1); //ex comparison
//console.log(2 == 1); //ex comparison
//console.log(2 != 1); //ex comparison


// the problem is when we dont comapre same datatypes
console.log("2" > 1);
console.log("02" > 1);
//Note: when comapring values make sutre their datatypes are same 
//in typescript it doesnt allow 2 different datatypes to cover 

//comparsion that gives problem
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //ture

//this means that vlues convertsd

console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false
// Note: Comparsion & equality check is 2 different things 

// === means "Strict Check -> 
console.log("2" === 2 )





