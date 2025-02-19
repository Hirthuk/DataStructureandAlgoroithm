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

// Using HashMap - seen and did
// First storing all data to hashmap and making use of hashmap's has and get which is O(1)
var twoSum = function (nums, target) {
  const Hashmap = new Map();
  for (let i = 0; i < nums.length; i++) {
      Hashmap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
      const compliment = target - nums[i];
      if (Hashmap.has(compliment) && Hashmap.get(compliment) != i) {
          return [i, Hashmap.get(compliment)]
      }
  }
  return [];
};

// Better and final version
// Here in if we are not check Hashmap.get(compliment) != i condition because the i element is not getting
// Added if not there only it will add so no need. above we already added every key and values from array
var twoSum = function(nums, target) {
  const HashMap = new Map();
  for(let i=0; i < nums.length; i++){
      const compliment = target - nums[i];
      if(HashMap.has(compliment)){
          return [i, HashMap.get(compliment)]
      }
      HashMap.set(nums[i],i);
  }
  return []; //If Don't have choice
};

// Best Version with 0ms how it worked let's c
var twoSum = function (nums, target) {
  var object = {};

  for (let i = 0; i < nums.length; i++) {
      var compliment = target - nums[i];
      if (compliment in object) {
          return [object[compliment], i]
      }
      object[nums[i]] = i;

  }
};

// Object can be added and retrived like this part from . operation 
// Best use case in dynamic operation like getting from variable
// Here instead of hashmap object is used that's only difference