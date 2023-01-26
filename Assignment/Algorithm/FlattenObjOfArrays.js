/* 
  * Takes an object containing arrays of objects and places all the nested objects into a new one-dim array that only contains id & type.
  * Bonus: Write a 2nd solution focusing on functional programming using built in methods.
*/

const object1 = {
    closedCreditMemos: [
        { id: 106, type: "credited" },
        { id: 108, type: "credited" },
    ],

    closedDeliveryOrders: [
        { id: 110, type: "delivered" },
        { id: 115, type: "delivered" },
    ],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],

    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(obj) {
    const resultArr = [];
    for (const key in obj) {
        // console.log(key)
        const valArr = obj[key]
        for (const {id, type} of valArr){
            resultArr.push({id, type})
        }
    }

    return resultArr
}

console.log(flattenObjectOfArrays(object1))

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(n + (n * m) + (n * m)) -> O(n + 2(n * m)) -> O(n + (n * m)).
 *    n = num of keys on object, m = longest length of.
 *    The first n is from Object.values looping over all keys to make an array.
 *    Then n * m b/c flat loops over a 2d array to flatten it,
 *    then n * m again b/c .map has to loop over the n * m amount of items that
 *    are now in a flattened array.
 *    nested array.
 * - Space: O(n * m).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */


function functionalFlattenObjectOfArrays(obj) {
    return result = Object.values(obj).flat().map(({id, type}) => ({id, type}))
}

// console.log(functionalFlattenObjectOfArrays(object1))

/*****************************************************************************/
