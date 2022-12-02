const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2cd3a3";
const expected1b = "a4bbcd3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "ccbb";
const expected4 = "ccbb";

const str5 = "abbbbbbbbbbbbbbbbb"
const expected5 = "ab17"

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
// RIOT  Read Input Output Talk

function encodeStr(str) {
    var repCnt = 1;
    var encStr = "";

    var len = str.length;

    if (len < 3) {
        return str;
    } else {
        for (var i = 0; i < len; i++) {
            if (str[i] == str[i + 1]) { //if current letter is same as next letter
                repCnt++;
            } else {
                if (repCnt > 2) {
                    encStr += str[i] + repCnt;
                    repCnt = 1;
                } else {
                    encStr += (repCnt == 2) ? str[i] + str[i] : str[i];
                    repCnt = 1;
                }
            }
        }
    }
    return encStr;
}

console.log(encodeStr(str1)) // Expected: a4bbcd3
console.log(encodeStr(str2)) // Expected: ""
console.log(encodeStr(str3)) // Expected: a
console.log(encodeStr(str4)) // Expected: ccbb
console.log(encodeStr(str5)) // Expected: ab17

const strA = "a3b2c1d3";
const expectedA = "aaabbcddd";

const strB = "a3b2c12d10";
const expectedB = "aaabbccccccccccccdddddddddd";