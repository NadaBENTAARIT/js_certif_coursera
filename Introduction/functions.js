
// function addNumbers(a,b){
//     return a+b;
// }
// console.log(addNumbers(5,10));

const globalVariable="i'm a global variable";
function logGlobal(){
    console.log(globalVariable);
}
logGlobal();
function logLocal(){
    const localVariable="i'm a local variable";

    console.log(localVariable);
}
logLocal();
//console.log(localVariable);//ReferenceError: localVariable is not defined

//Arrow functions

// assign function to variable

//the return type of a function that does not explicitly return a value : undefined
console.log(typeof(logGlobal()));


//The "return" statement is used to exit a function and optionally provide a return value.

