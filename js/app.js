//VARIABLE SCOPES IN JAVASCRIPT.........................
// with in a function all varables are local scope or block scope
// let and const are always block scope
// other than functions var is global scope

// var name = 'hello'; //global
// if(true) {
//     var name = 'boodi'; //local
    
// }
// if (true) {
//     let age = 24;  //block
    
// }
// console.log(age);


//VARIABLE HOISTING IN JAVASCRIPT.................................
//Javascript Engines moves the variable and function declarations to the top of our code.

// console.log(num); // undefined
// var num = 12;

// console.log(num); // error
// let num = 12;


//DIFFRENCE BETWEEN LET CONST VAR

//var declarations are globally scoped or function scoped while let and const are block scoped. 
//var variables can be updated and re-declared within its scope; 
//let variables can be updated but not re-declared; 
//const variables can neither be updated nor re-declared.They are all hoisted to the top of their scope.












