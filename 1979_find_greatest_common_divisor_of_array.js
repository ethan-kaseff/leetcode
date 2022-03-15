/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let returnValue = 0;

  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      returnValue = i;
    }
  }

  return returnValue;
};