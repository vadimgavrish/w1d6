/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  
  var max = 1;
  var current = 1;
  var result;

  arr.sort();

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      current++;
      if (current > max) {
        max = current;
        result = arr[i];
      }
    } else {
      current = 1;
    }
  }
  return result;
}

// Don't change below:

module.exports = { mode: mode };
