var input = [8,1,2,2,3];

var smallerNumbersThanCurrent = function(nums) {
  let numsSmaller = [];
  for (let i=0; i < nums.length; i++) {
      let count = 0;
      for (let j=0; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
              count++;
          }
      }
      numsSmaller.push(count);
  }
  return numsSmaller;  
};

console.log(smallerNumbersThanCurrent(input));