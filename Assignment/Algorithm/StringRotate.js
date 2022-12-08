/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    var len = str.length;
    amnt %= len;
    strArr = str.split("");
    var tempStr = "";
    for (var i = 1; i <= amnt; i++) {
        tempStr = strArr.pop() + tempStr;
    }
    return tempStr + strArr.join("");
}

console.log(rotateStr(str, rotateAmnt1)); // expected: "Hello World"
console.log(rotateStr(str, rotateAmnt2)); // expected: "dHello Worl"
console.log(rotateStr(str, rotateAmnt3)); // expected: "ldHello Wor"
console.log(rotateStr(str, rotateAmnt4)); // expected: "orldHello W"
console.log(rotateStr(str, rotateAmnt5)); // expected: "ldHello Wor"


/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strA2 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expectedA = true;

const strB1 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expectedB = false;

const strC1 = "ABCD";
const strC2 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expectedC = false;

const strD1 = "old orange";
const strD2 = "orangeold ";
const expectedD = true;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */

// Out of the box thinking solution from the instructor
// Add another copy of s1  to s1. For example ABCD becomes ABCDABCD
// Check if s2 is present somewhere in the new s1. Is DABC present in s1 
function isRotation1(s1, s2) {

    var len1 = s1.length;
    var len2 = s2.length;

    if (len1 != len2) {
        return false;
    }

    return (s1 + s1).includes(s2);

}

// For the length of the string rotate the second string x number of times and see if 
// any of the rotated value equals first string
function isRotation2(s1, s2) {
    
    var len1 = s1.length;
    var len2 = s2.length;
    
    if (len1 != len2) {
        return false;
    }
    
    for (var i = 1; i < len1; i++) {
        // console.log(rotateStr(s2, i));
        if (s1 == rotateStr(s2, i)) {
            return true;
        }
    }
    return false;
}

// Optimized version of isRotation2() method
// For the length of the second string, check if the first char in string 1 equals char at current index of s2
//  Call the rotate string function, only if above condition is met
// For example s1=ABCDE s2 = CDEAB
// Compare A and C, <>, so continue
// Compare A and D, <>, so continue
// Compare A and E, <>, so continue
// Compare A and A, ==, so rotate s2 and compare it with s1
function isRotation3(s1, s2) {
    var len1 = s1.length;
    var len2 = s2.length;

    if (len1 != len2) {
        return false;
    }

    for (var i = 0; i < len2; i++) {
        if (s1[0] == s2[i]) {
            if (s1 == rotateStr(s2, len2 - i)) {
                return true;
            }
        }
    }
    return false;
}

console.log(isRotation1(strA1, strA2)); // expected: true
console.log(isRotation1(strB1, strB2)); // expected: false
console.log(isRotation1(strC1, strC2)); // expected: false
console.log(isRotation1(strD1, strD2)); // expected: true

console.log(isRotation2(strA1, strA2)); // expected: true
console.log(isRotation2(strB1, strB2)); // expected: false
console.log(isRotation2(strC1, strC2)); // expected: false
console.log(isRotation2(strD1, strD2)); // expected: true

console.log(isRotation3(strA1, strA2)); // expected: true
console.log(isRotation3(strB1, strB2)); // expected: false
console.log(isRotation3(strC1, strC2)); // expected: false
console.log(isRotation3(strD1, strD2)); // expected: true
