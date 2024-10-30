// // scope
// // function greet(){
// //    // message="hello"
// //     const message="hello"
// //     console.log(message)
// // }

// // greet()
// // console.log(message) //message is not defined ( with const)


// // closure

// function outer() {
//     console.log("before inner function");
//     const outerVariable = "I'm from outer";
    
//     function inner() {
//         console.log(outerVariable); // inner "se souvient" de outerVariable
//     }

//     console.log("after inner function and before return");
//     return inner; // outer renvoie la fonction inner
// }

// const closureFunction = outer(); // outer() s'exécute et renvoie la fonction inner, c'est-à-dire qu'elle la retourne sans l'exécuter.
// //Quand outer() retourne inner, ce n'est pas juste la fonction inner qui est retournée.
// // Ce qui est retourné, c'est inner + tout le contexte (scope) dans lequel elle a été créée. 
//  //Cela inclut la variable outerVariable.
// closureFunction(); // ici, on exécute la fonction inner
// //Même si outer() est terminé depuis longtemps, inner a toujours accès à outerVariable, 
// //car elle "se souvient" du scope dans lequel elle a été créée.
// //C'est pourquoi le message I'm from outer s'affiche.


// // scope chain
function outer() {
        console.log("before inner function");
        const outerVariable = "I'm from outer";
        
        function inner() {
            console.log("in inner")
            const innerVariable="I m from inner";
            console.log(innerVariable+"   "+outerVariable); // inner "se souvient" de outerVariable
        }
    
       inner()

     }
outer()