let str1="hello, world !";//double quote
let str2='this is a string'; //single quote
let str3=`123`; //  backticks

console.log(typeof(str1),typeof(str2),typeof(str3));
console.log(`1+2 = ${1 + 2}`);// il faut backticks

console.log(str1.length);

console.log(str1[0]); // square bracket notation[]
str1[0]='C';


console.log(str1[0]); // h, because strings are immutable

//cancat
res=str1+"   "+str2;
res2=str1.concat(str2);
console.log(res);
console.log(res2);


console.log(str1.slice(5,8));
console.log(str1.substring(5,8));


console.log(str1.length);
console.log(str1>str2);//The expression compares the strings lexicographically, and "apple" is not greater than "banana" in alphabetical order.

