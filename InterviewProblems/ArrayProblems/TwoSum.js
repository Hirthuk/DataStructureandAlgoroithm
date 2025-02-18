/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute force approach
const nums = [3,4,2];
const target = 6;
// Brute force approach
// All test cases passed but it's O(n^2) Worst case
var twoSum = function (nums, target) {
    ReturnArray = [];
  
    if (nums.length == 0) {
      return ReturnArray;
    } else if (nums.length >= 2) {
      for (let i = 0; i <= nums.length; i++) {
        for (let j = i+1; j <= nums.length; j++) {
          if (nums[i] + nums[j] == target) {
            ReturnArray.push(i);
            ReturnArray.push(j);
            console.log(ReturnArray);
            return ReturnArray;
          }
        }
      }
    }
  };

twoSum(nums, target);

// Working on another worst case using includes 
// Using hashmap would be the best option since finding number is O(1)
// Or any other innovative which can lessen the things
var remain = 0;
var twoSum1 = function (nums, target) {

    const ReturnArray = [];
    for (let i = 0; i <= nums.length; i++) {
        remain = target - nums[0]
        if (nums.includes(remain)) {
            ReturnArray.push(i);
            const numRemain = nums.indexOf(remain);
            ReturnArray.push(numRemain);
            return ReturnArray;
        }
    }
};

// Even worst case this is
// Time complexity atleast is O(n) - bcz we have multiple O(n) and haven't used nested loop
var twoSum = function (nums, target) {
  var remain = 0;
  const ReturnArray = [];
  for (let i = 0; i <= nums.length; i++) {
      remain = target - nums[i]
      const check = nums.includes(remain)
      const index = nums.indexOf(remain)
      if (check && index != i) {
          console.log(nums.includes(remain))
          ReturnArray.push(i);
          const numRemain = nums.indexOf(remain);
          ReturnArray.push(numRemain);
          return ReturnArray;
      }
      
  }
};