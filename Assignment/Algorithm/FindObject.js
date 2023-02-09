/* 
  Given a search criteria object, whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  
  Bonus: write a 2nd solution using built in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFunctional(criteria, collection) {
    
    let condition = Object.keys(criteria);
    console.log("condition --> " + condition);
    const result = collection.filter((item) => {
        let matchCnt = 0;

        for (critKey of condition) {
            matchCnt = item[critKey] === criteria[critKey] ? matchCnt + 1 : matchCnt;
            console.log(critKey + " - " + item[critKey] + " - " + criteria[critKey] + " - " + matchCnt);
        }

        return (matchCnt === condition.length);
    })

    return result;

}

console.log(findObjectsFunctional(searchCriteria1, items));
console.log(findObjectsFunctional(searchCriteria2, items));

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) { }

