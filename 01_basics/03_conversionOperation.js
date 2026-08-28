let score = null

//const {score} = req.body // this doesnt show whats the vlue is String or number 

// instead we'll use typeof 
console.log(typeof(score));

//typeof -> helps us find type of vlaue like String, number 

let valueInNumber = Number(score) // using Number will convert score in to number //output: number 

console.log(typeof valueInNumber); //converts any value into number 
console.log(valueInNumber); //null -> 0

//basic conversion
//"33" => 33
// "33abc" => NaN
// true => 1; false => 0
///undefined -> NaN
//if a String that cannot be converted into number: -> NaN

//convert value into boolean 
let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //ytrue 

//bool basic conversion: 
//"" -> empty string 
// 1 -> true
// 0 -> 
// "billy" -> true 

//-------------------------------------

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



