/**
 * @param {number[]} nums
 * @return {number}
 */
var isEvenDigits = function(n) {
    let numDigits = 0;
    do {
        numDigits++;
        n = Math.floor(n / 10);
    } while (n >= 1);
    if (numDigits % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

var findNumbers = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isEvenDigits(nums[i])) {
            count++;
        }
    };
    return count;
};

var input = [12, 345, 2, 6, 7896];
console.log(findNumbers(input));