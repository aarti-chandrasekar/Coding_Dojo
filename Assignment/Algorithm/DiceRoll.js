//Simulate rolling a dice - Generate a number from 1 to 6

function d6() {
    return generateRandFromTo(1,6);
}

/*
*   Generic function to generate a random number between 2 numbers
*   Both start and end numbers are included
*/
function generateRandFromTo(startNum, endNum){
    // if startNum = 5 & endNum = 9
    // if Math.random() is 0, return value will be 5.
    // if Math.random() is 0.9, return value will be 9.

    return Math.floor(Math.random() * (endNum - startNum +1)) + startNum;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
