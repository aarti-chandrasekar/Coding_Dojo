/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const str3 = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expectedD = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    var caps = true;
    var acrStr = "";
    for (let char of str){
        // console.log(char + " " + caps);
        if (char == " "){ //Turn the switch ON to capitalize the next non-space character and add to acrStr
            caps = true;
        } else{
            if (caps){
                // acrStr += char;
                acrStr += char.toUpperCase();
                caps = false;
            }
        }
    }
    return acrStr;
}



console.log(acronymize(str1)); // Expected: "OOP"
console.log(acronymize(str2)); // Expected: "APIE"
console.log(acronymize(str3)); // Expected: "SDLC"
console.log(acronymize(str4)); // Expected: "GIT"
console.log("Output -" + acronymize("    abc def ghi       "));
console.log("Output -" + acronymize(""));
console.log("Output -" + acronymize("@   #   "));
