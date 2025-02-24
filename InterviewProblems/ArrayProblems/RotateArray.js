// https://leetcode.com/problems/rotate-array/
const nums = [1,2];
//  Brute force - One test case failing -O(n) - O(1) space complexity --> Required
//  Brute force
var rotate = function(nums, k) {
    k = k % nums.length; // Like when k = nums.length reversing will make the array to same array. So
    // Wejust doing reversing which is just above the value while k value above nums.length
    // if k is less than nums.length we can't fo reminder so k will be same
    let remaincount = nums.length-k;
    let copyArray = nums.splice(remaincount);
    const result = copyArray.concat(nums);
    nums.length =0; //To empty the array
    nums.push(...result);

};
// Another brute force approach by seeing you should understand what we doing
var rotate = function(nums, k) {
    k = k % nums.length;
   nums.reverse();
   let copyArray = nums.splice(0,k);
   const result = copyArray.reverse().concat(nums.reverse());
   nums.length = 0;
   nums.push(...result);
   console.log(nums)
};
// Time complexity intensive still runtime and memory more only
var rotate = function(nums, k) {
    k = k % nums.length;
   var reverse = function(nums,left,right){
    while(left < right){
        [nums[left],nums[right]] = [nums[right],nums[left]]; // Will swap element left=1 right 2 means
        //  [2,1,0] = [2,0,1] this is called Array destructuring element - chatgpt to understand better
        left ++
        right --
    }
   }
   reverse(nums,0,nums.length-1);
   reverse(nums,0,k-1);
   reverse(nums,k,nums.length-1);
};

rotate(nums,5);
console.log(nums);