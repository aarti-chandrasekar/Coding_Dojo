/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "abc1def2defabc"
const expected5 = "12defabc"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
 function stringDedupe(str, isLast) {
    // const str1 = "abcABCabcABCabcABC";
    var strSet  = new Set();
    var len = str.length;
    var result = "";

    // if print last occurrence flag is false
    // this returns the first occurrence of the given string
    if (!isLast) {
        // add each letter to a Set if not already present and  also add it to the result String
        // if the letter is already present in the Set, ignore and don't add it to the result String
        for (var i =0; i < len; i++) {
            if (!strSet.has(str[i])) {
                strSet.add(str[i]);
                result += str[i];
            }
        } 
        // if print last occurrence flag is true
        // this returns the last occurrence of the given string
    }else{
        // iterate the loop backwards
        // add each letter to a Set if not already present and  also add it to the result String in reverse order
        // if the letter is already present in the Set, ignore and don't add it to the result String
        for (var i =len-1; i >= 0; i--) {
            if (!strSet.has(str[i])) {
                strSet.add(str[i]);
                result = str[i] + result;
            }
        }
    }

    return result;
}

console.log(stringDedupe(str1, false));
console.log(stringDedupe(str2, false));
console.log(stringDedupe(str3, false));
console.log(stringDedupe(str4, false));
console.log(stringDedupe(str5, true));

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world"; 
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */

function reverseWords(str) {
    var len = str.length;
    var tempStr = "";
    var result = "";

    for (var i=0; i<len; i++) {
        if (str[i] != " "){
            tempStr = str[i] + tempStr + " ";
        } else {
            result += tempStr;
            tempStr = "";
        }
    }
    result += tempStr;
    return result;
}

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg