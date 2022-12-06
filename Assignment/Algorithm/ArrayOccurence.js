/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    Bob: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 *  Possible hint: .hasOwnProperty() <- Don't know it? Google it as a group!
 */
function makeFrequencyTable(arr) {
    var result = {};
    var len = arr.length;

    // for each element in the array, add key-value to result object 
    // key is the item and value is the number of occurrence
    // if the key is already present increment its value
    for (var i =0; i < len; i++) {
        // result[arr[i]] = result.hasOwnProperty([arr[i]]) ? result[arr[i]] + 1 : 1;
        result[arr[i]] = (result[arr[i]] == undefined) ? 1 : result[arr[i]] + 1;
    }
    return result;
}


console.log(makeFrequencyTable(arr1))
console.log("Expected: ", expected1);
console.log(makeFrequencyTable(arr2))
console.log("Expected: ", expected2);
console.log(makeFrequencyTable(arr3))
console.log("Expected: ", expected3);
