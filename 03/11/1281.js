/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let nums = [];
  for (let i = n; i >= 1; i = Math.floor(i / 10)) {
    let digit = i % 10;
    nums.push(digit);
  }
  let product = (sum = 0);
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      product += nums[i];
    } else {
      product *= nums[i];
    }
    sum += nums[i];
  }
  return product - sum;
};
