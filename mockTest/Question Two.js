/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  
  arr.sort(function sortNumber(a, b){
    return a - b;
  });
  
  return arr[0];
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  
  arr.sort(function sortNumber(a, b){
    return a - b;
  });

  arr.reverse();
  return arr[0];

}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  
  let min = 0;
  let max = 0;

  arr.sort(function sortNumber(a, b){
    return a - b;
  });

  min = arr[0];

  arr.reverse();
  max = arr[0];

  return max - min;
  

}

// Don't change below:

module.exports = { min: min, max: max, range: range };
