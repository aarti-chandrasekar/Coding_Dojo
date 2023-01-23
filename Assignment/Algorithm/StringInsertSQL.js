/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
  
  // Bonus:
  const insertData2 = {
      first_name: "John",
      last_name: "Doe",
      age: 30,
      is_admin: false,
    };
    const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
    // Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
    
    /**
     * Generates a SQL insert statement from the inputs
     * - Time: O(?).
     * - Space: O(?).
     * @param {string} tableName
     * @param {Object} columnValuePairs
     * @returns {string} A string formatted as a SQL insert statement where the
     *    columns and values are extracted from columnValuePairs.
    */

    // Without using any built-in functions
   function insert(tableName, columnValuePairs) {
    let sqlStr = "";
    let len = 0;
    for (const key in columnValuePairs){
        len++;
    }
    if (!tableName || len != 0) {
        sqlStr = `INSERT INTO ${tableName} `;
        let [colStr, valStr] = ["(", "("];
        
        let i = 0;
        for (const key in columnValuePairs){
            colStr += `${key}${i !== len-1 ? "," : ")"} `;
            const val = columnValuePairs[key];
            valStr += `${typeof val === "string" ? "'" : ""}${val}${typeof val === "string" ? "'" : ""}${i !== len-1 ? "," : ")"} `;
            i++;
        }
        
        // console.log("colStr - " + colStr + " valStr - " + valStr);
        
        sqlStr += `${colStr} VALUES ${valStr}`;
    } 
    
    return sqlStr;
}

console.log(insert(table, insertData2));

/**
 * - Time: O(5n) -> O(n) linear,
 *    .keys .join .values .map .join = 5 non-nested loops
 * - Space: O(n) linear.
*/
function insertFunctional(tableName, columnValuePairs) {
    let sqlStr = "";
    let col = Object.keys(columnValuePairs);
    const len = col.length; 
    
    if (!tableName || len != 0) {
        let valStr = Object.values(columnValuePairs).reduce((prev, curr, i) => {
            return prev += `${typeof curr === "string" ? "'" : ""}${curr}${typeof curr === "string" ? "'" : ""}${i !== len-1 ? "," : ")"} `;
        }, "(") ;
        // console.log(col.toString());
        // console.log(valStr);
        sqlStr = `INSERT INTO ${tableName} (${col.toString()}) VALUES ${valStr}`
    }


    return sqlStr;

}

console.log(insertFunctional(table, insertData2));


/*****************************************************************************/


module.exports = {
  insert,
  insertFunctional,
};