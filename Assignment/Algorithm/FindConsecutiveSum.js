// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 0, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 0, 3, 6],
  [0, 3, 6, 7],
  [0, 3, 6, 7, 0],
  [0, 3, 6, 7, 0, 0],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0]
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

const nums6 = [10, 15, 20, 35, 0, 30, 5, 10, 15, 20, 35, 0, 30, 5, 10, 15, 20, 35, 0, 30, 5, 10, 15, 20, 35, 0, 30,
];
const sum6 = 35;

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) {
  const start = performance.now();

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let tot = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (tot === targetSum) {
        result = [...result, nums.slice(i, j)];
      }
      tot += nums[j];

    }
  }
  console.log(`This took ${performance.now() - start} milliseconds to run`);


  return result;
}
// console.log(findConsqSums(nums1, sum1))
// console.log(findConsqSums(nums2, sum2))
// console.log(findConsqSums(nums3, sum3))
// console.log(findConsqSums(nums4, sum4))
// console.log(findConsqSums(nums5, sum5))
// console.log(findConsqSums(nums6, sum6))


/**
 * Solving without nested for-loops. Without O(N^2) time complexity
 * Build a map/dict with key as the sum up to the current index value 
 * and the value an array of indexes that result in that sum
 * For a given array  [2, 5, 0, 3, 6, 7, 0, 0, 23, 12]
 * the map will look like this {
  '0': [ 0 ],  --> This is added by default 
  '2': [ 1 ],  --> Sum of values up to (1-1)th index is 2 
  '7': [ 2, 3 ],  --> Sum of values up to (2-1)th index and (3-1)th index is 7 - 2+5, 2+5+0
  '10': [ 4 ], --> Sum of values up to (4-1)th index is 10 - 2+5+0+3
  '16': [ 5 ],
  '23': [ 6, 7, 8 ],
  '46': [ 9 ],
  '58': [ 10 ]
  }
* For each key in the map, if (key + targetSum) is present in the map then
* slice the array from value of key to value of (key + targetSum)-1, if present,  and add it to result array.
* For instance, key is 0 and  value is 0
* (key + targetSum) is 16 and value is 5. 
* Since the map has the key 16, slice the array from 0 to 4 - [2,5,0,3] and add it to result array.
* Next key is 2 and value is 1
* (key + targetSum) is 18, but the map does not have the key 18.
* if the value of a key has more than one element in the array, repeat the slicing for each of the element as index.
 */
function findConsqSums2(nums, targetSum) {
  const start = performance.now();

  let result = [];
  const sumMap = { '0': [0] };

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sumMap[sum] = [...(sumMap[sum] == undefined ? [] : sumMap[sum]), i + 1];
  }
  console.log(sumMap);

  for (key in sumMap) {
    const startArr = sumMap[key];
    const tsum = Number(key) + targetSum;
    const endArr = sumMap[tsum];
    // console.log(key + " - " + startArr + " - " + endArr + " - " + tsum);
    if (endArr != undefined) {
      for (let i = 0; i < startArr.length; i++) {
        for (let j = 0; j < endArr.length; j++) {
          result.push(nums.slice(startArr[i], endArr[j]));
        }
      }
    }
  }
  console.log(`This took ${performance.now() - start} milliseconds to run`);


  return result;
}
// console.log(findConsqSums2(nums1, sum1))
// console.log(findConsqSums2(nums2, sum2))
// console.log(findConsqSums2(nums3, sum3))
console.log(findConsqSums2(nums4, sum4))
// console.log(findConsqSums2(nums5, sum5))
// console.log(findConsqSums2(nums6, sum6))


/*****************************************************************************/

module.exports = { findConsqSums };