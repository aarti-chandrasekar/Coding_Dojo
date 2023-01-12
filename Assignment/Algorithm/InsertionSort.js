/* 
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp variable (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

/**
 * Using a second array to store the sorted values
 */

const insertionSort1 = (nums) => {
    let sortedNums = [];
    
    nums.forEach((num) => {
        let index = 0;
        while (index < sortedNums.length) {
            console.log("index -" + index + " num- " + num + " sortedNums - " + sortedNums);
            if (num <= sortedNums[index]) {
                break;
            }
            index++;
        }
        sortedNums.splice(index, 0, num);
    });
    
    return sortedNums;
};

console.log(insertionSort1(numsRandomOrder));


/**
 * Sorting manipulating the same given array
 */
const insertionSort2 = (nums) => {
    // starting index of unsorted array. The assumption is the elements before this index in the array are sorted.
    let startUnsortIdx = 1; 

    while (startUnsortIdx < nums.length){
        let currIdxSorted = 0;
        while (currIdxSorted < startUnsortIdx){
            console.log("startUnsortIdx -" + startUnsortIdx + " currIdxSorted- " + currIdxSorted + " nums - " + nums);
            if (nums[currIdxSorted] > nums[startUnsortIdx]){
                break;
            }
            currIdxSorted++;
        }
        // Insert the first element from the unsorted part of the array 
        // in to its right spot in the sorted part of the array
        nums.splice(currIdxSorted, 0, nums[startUnsortIdx]);
        // Delete the element that was just inserted in to the sorted array from the unsorted part of the array
        nums.splice(startUnsortIdx + 1, 1);
        startUnsortIdx++;
    }

    return nums;
};

console.log(insertionSort2(numsRandomOrder));

/*****************************************************************************/


