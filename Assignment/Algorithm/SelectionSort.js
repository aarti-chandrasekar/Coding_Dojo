/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

/*****************************************************************************/

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param   {Array<number>} nums
 * @return  {Array<number>} The given array after being sorted.
 */

/**
 * Without methods findSmallestIndex & swap
 */
const selectionSort1 = (nums = []) => {
    nums.forEach((current, index, arr) => {
        let small = index;
        for (let i=index+1; i < arr.length; i++){
            (arr[i] < arr[small]) ? small = i : null;
        }
        
        console.log("index -" + index + " small- " + small + " arr - " + arr);
        (small != index) ? [arr[index], arr[small]] = [arr[small], arr[index]] : null;
        
    });
    return nums;
}

/**
 * Using method findSmallestIndex & swap
 */
const selectionSort2 = (nums = []) => {
    nums.forEach((current, index, arr) => {
        let small = findSmallestIndex(arr, index);
        console.log("index -" + index + " small- " + small + " arr - " + arr);
        if (small != -1) {
            swap(arr, index, small);
        }
    });
    return nums;
}

/**
 * Finds the index of the smallest element in the array arr starting at start
 */
const findSmallestIndex = (arr, start) => {
    let small = start;
    for (let i=start+1; i < arr.length; i++){
        if (arr[i] < arr[small]){
            small = i;
        }
    }
    return (small == start) ? -1 : small;
}

/**
 * Swaps the elements of array arr at indexes index1 and index2
 */
const swap = (arr, index1, index2) => 
                [arr[index1], arr[index2]] = [arr[index2], arr[index1]];


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//                       0  1  2  3  4  5  6  7   8  9  
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(selectionSort1(numsRandomOrder));





