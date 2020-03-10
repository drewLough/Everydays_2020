/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length / 2; i++) {
        let freq = nums[2 * i];
        let val = nums[2 * i + 1];
        for (let j = freq; j > 0; j--) {
            res.push(val);
        }
    }
    return res;
};