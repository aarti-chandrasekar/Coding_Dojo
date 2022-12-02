/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString1(str) {
    var len = str.length;
    var revStr = "";

    for (var i=len-1; i>=0; i--){
        revStr += str.charAt(i);
    }

    return revStr;
}

/*
    CHALLENGE - Reverse the string parsing from first to last
    Split the input string in to array of characters
    Pop the characters from the array and push it into a new array and return
*/
function reverseString2(str) {
    var len = str.length;
    var tempStr = str.split("");
    var revStr = [];
    
    for (var i=0; i<len; i++){
        revStr.push(tempStr.pop());
    }
    return revStr.join();
}

/*
    CHALLENGE - Reverse the string parsing from first to last
    *********** BEST SOLUTION *************
*/
function reverseString3(str) {
    var len = str.length;
    var revStr = "";

    for (var i=0; i<len; i++){
        revStr = str.charAt(i) + revStr;
    }

    return revStr;
}

//TEST CODE FOR REVERSE
console.log(reverseString1(str1)) // Expected: erutaerc
console.log(reverseString2(str2)) // Expected: god
console.log(reverseString3(str3)) // Expected: olleh
// console.log(reverseString2(str4)) // Expected: ""
