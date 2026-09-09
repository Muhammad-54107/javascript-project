// #Primitive

// Non-primitives or refrence type
//primitives basics 7 types: 
// String,
//  Number,
//  Boolean - Treu / False
//  null- Empty (not just empty string, just empty)
//  undefined- values hasnt been assigned yet
//  Symbol - to make any value unqiue we use sybmol
//BigInt - like big values

//Reference type: (Non-primitive)
//Array, 
// Objects, (master JS object you are good.)
// Functions 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail; //you can leave value undefined & it will display undefiend 

const id = Symbol('123')//symbol
const anotherId = Symbol('123')

console.log(id == anotherId); //flase

//using Symbol, even if you add the same value in there value or anything, the output will be very different 


//JS is dynamic language EX/; you dont have to define 
//JS custon langue (type-script)

//bigInt 
//add n at end to use bingInt large number 
const bigNumber = 1234455678876654433334455666655n

//array
const heros = ["safegaurd", "Iron-man", "spiderman"] 

//objects: we write objects in curly brackets key&Value

let myObj = { //you can also sore object in variables
    name: "Biily",
    age: 32,
}

//Function: 
//you can also treat function as variable

const myFunction = function(){
    console.log("Hellow World")
}

//how to find any type of Datatype: -> typeof
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof myFunction);







