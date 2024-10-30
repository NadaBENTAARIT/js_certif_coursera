// let weather="sunny";

// if (weather==="sunny"){
//     console.log("let's go outside");
// }

// else{
//     console.log("let's stay inside");
// }
const dishNumber=2;
switch(dishNumber){
    case 1:
        console.log("you ordered a burger"); // Code à exécuter si expression vaut valeur1
       // break;
    case 2:
        console.log("you ordered a pizza");
       // break; // without break, console.log 2,3 et default
    case 3:
        console.log("you ordered a pasta");
        // break;
    default :
        console.log("sorry !  that dish is not avai")
}
// Si on enlève les break, tous les blocs qui suivent le premier case correspondant seront exécutés jusqu'à ce qu'il rencontre un break ou atteigne la fin du switch.