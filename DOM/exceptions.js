

function divide(numerator,denominator){
    // if(denominator===0){
    //     throw new Error("Error : division by zero") //is used to define a custom error message.
    // }
return numerator/denominator
}

try{
    const result = divide(10,0)
    console.log(result)
}
catch (error){
    console.log(error.message) //division by zero //infinity si if is commented
}
finally {
    console.log("This will always run, regardless of success or failure.");
}
