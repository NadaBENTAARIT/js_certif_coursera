
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;

// }

//check the condition after executing the loop block
let i=1;

do{
//console.log(i)
i++;
}
while(i>5);
//C’est pourquoi 6 n’est jamais affiché. La boucle se termine immédiatement après que i a été incrémenté à 6 et la condition échouée.




//The "break" statement terminates the loop entirely, not just the current iteration.

for(let i=1;i<=5;i++){
        //console.log(i);
        break;

     }



// continue  keyword is used to exit the current iteration and start the next iteration in a loop
 for (let i = 1; i <= 5; i++) {
        if (i === 3) {
          continue; // Skip the rest of this iteration when i is 3
        }
        console.log(i);
      }
      
   