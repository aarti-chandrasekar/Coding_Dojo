/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const numsA = [1];
const expectedA = 1;

const numsB = [5, 4, 5];
const expectedB = 4;

const numsC = [5, 4, 3, 4, 3, 4, 5];
const expectedC = 4; // there is a pair of 4s but one 4 has no pair.

const numsD = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedD = 1;

function oddOccurrencesInArray(nums) {
    var result = new Map();
    var len = nums.length;
    
    
    // For each element in the array, a key is added to a Map if not already present
    // and remove the key if present, because if the key is already present, 
    // it means we have found a match. By the end, the map will only contain
    // the numbers that do not have a pair
    for (var i =0; i < len; i++) {
        if (result.get(nums[i]) == undefined) {
            result.set(nums[i], 1);
        } else {
            result.delete(nums[i]);
        }
    }

    return result.keys();
}


console.log(oddOccurrencesInArray(numsA), "should equal", expectedA);
console.log(oddOccurrencesInArray(numsB), "should equal", expectedB);
console.log(oddOccurrencesInArray(numsC), "should equal", expectedC);
console.log(oddOccurrencesInArray(numsD), "should equal", expectedD);
