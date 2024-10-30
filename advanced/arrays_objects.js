// // Arrays
// let fruits=["banana","apple","orange"]
// console.log(fruits);


// fruits[1]="grape"
// console.log(fruits);
// console.log(fruits.length)


// fruits.push("mango");
// console.log(fruits);

// fruits.pop();
// console.log(fruits)

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// //Objects :key/value
let person={
    name:"nada",
    age:25,
    isStatement:true

}
console.log(person)
console.log(person.name)
console.log(person["name"])

person.city="new york"
console.log(person)
for(let key in person){
    console.log(key +":"+person[key])
}