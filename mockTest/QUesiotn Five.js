/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {
  
  // get average value of set
  var sum = arr.reduce((a, b) => a + b, 0);
  var avg = sum / arr.length;

  // get difference between data and average
  var diff = [];

  arr.forEach(function(x) {
    diff.push(x - avg);
  });

  // square each difference
  for (var i = 0; i < diff.length; i++) {

    var num = diff[i];
    var square = num * num;

    diff[i] = square;
  }

  // get average of squared differences
  var diffSum = diff.reduce((a, b) => a + b, 0);
  var diffAvg = diffSum / diff.length;

  var result = Math.sqrt(diffAvg);

  return round(result);
}

// Don't change below:

module.exports = { stdev: stdev };
