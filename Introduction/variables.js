// let count=0;   //blocked scope
// count=1;
// console.log(count);


// const PI=3.14;   //blocked scope
// console.log(PI);
// //PI=4;  TypeError: Assignment to constant variable.
// console.log(PI);


// if(true){
//     let count=0;

//      count=5;
//     console.log(count);
// }
// console.log(count); //ReferenceError: count is not defined


// let count=0;
// if(true){
//      count=5;
//     console.log(count);
// }
// console.log(count); // ca donne 5 ....



if(true){
   var count=0;

     count=5;
    console.log(count);
}
console.log(count); // ca donne 5....5

