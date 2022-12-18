/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true; //1 for bonus

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true; //1 for bonus

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

const nums5 = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9];
const searchNum5 = 3;
const expected5 = 3;



/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
 function binarySearch(sortedNums, searchNum) {
    var startIndex = 0;
    var endIndex = sortedNums.length - 1;
    var midIndex = 0;

    // const nums2 = [4, 5, 6, 8, 12];
    // const nums1 = [1, 3, 5, 6];


    while (startIndex <= endIndex){
        midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        // console.log("** "+ startIndex)
        if (searchNum == sortedNums[midIndex]) {
            console.log("No of times : " + countOccurrences(sortedNums, midIndex));
            return true;
        }else if (searchNum > sortedNums[midIndex]){
            startIndex = midIndex +1;
        } else if (searchNum < sortedNums[midIndex]) {
            endIndex = midIndex - 1;
        } 
    }

    return false;
}

function countOccurrences(sortedNums, index){
    var cnt = 1;
    var searchNum = sortedNums[index];
    var flag = false;

    for (var i=1; i <sortedNums.length/2; i++){
        flag = false;
        if (sortedNums[index + i] == searchNum){
            cnt++;
            flag = true;
        }
        if (sortedNums[index - i] == searchNum){
            cnt++;
            flag = true;
        }

        if (!flag) {
            return cnt;
        }
    }
}


console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true (1 for bonus)
console.log(binarySearch(nums3, searchNum3)); // true (1 for bonus)

// bonus, how many times does the search num appear?
console.log(binarySearch(nums4, searchNum4)); // 4
console.log(binarySearch(nums5, searchNum5)); // 3
