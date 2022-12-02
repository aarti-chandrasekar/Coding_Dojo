/**
  * Decodes the given string by duplicating each character by the following int
  * amount if there is an int after the character.
  * - Time: O(?).
  * - Space: O(?).
  * @param {string} str An encoded string with characters that may have an int
  *    after indicating how many times the character occurs.
  * @returns {string} The given str decoded / expanded.
  */

function decodeStr(str) {
    var decStr="";
    var letter = "";
    var num = "";

    var len = str.length;

    //
    for (var i = 0; i <= len; i++) {
        if (!isNaN(str[i])) { //if number
            num += str[i];
        } else {
            decStr += letter.repeat(num == ""? 1 : parseInt(num));
            letter = str[i];
            num = "";
        }
    }

    return decStr;

}

const strA = "a3b2c1d3";
const expectedA = "aaabbcddd";

const strB = "a3b2c12d10";
const expectedB = "aaabbccccccccccccdddddddddd";

const strC = "9abc4d";
const expectedC = "abccccd";



console.log(decodeStr(strA)) // Expected: aaabbcddd
console.log(decodeStr(strB)) // Expected: aaabbccccccccccccdddddddddd
console.log(decodeStr(strC)) // Expected: abccccd