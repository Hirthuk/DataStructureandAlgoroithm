// https://leetcode.com/problems/move-zeroes/description/

// My Brute for approach

var moveZeroes = function(nums) {
    let ZeroIndexes = 0;
    for(let i=0;i< nums.length; i++){
        if(nums[i] ==0){
            ZeroIndexes++
            nums.splice(i,1);
            i--; //Incase the second number is 0 in array after splicing it will be first number but
            // We will be leaving first number and checking 2nd one bcz of i will be 1(2nd element in array)
            // So i-- to start from leaving point
        } 
        }
        for(let i=0;i< ZeroIndexes; i++){
            nums.push(0);
        }
  
    return nums;
};

// Different approca same o(n) and runtime no chnges
// These are good only still run time is high
var moveZeroes = function (nums) {
    let count = 0;
    nums.forEach((value, index, nums) => {
        if (value == 0) {
            nums.splice(index,1);
            count++
        }
    }
    );
    nums.push(...new Array(count).fill(0));
    
    return nums;
};

// Actual Better implementation
// Explain to yoursefl by putting inputs one by one into it
const values = [0,1,0,3,12];
var moveZeroes = function(nums) {
    let index = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++
        }}
        for(let i=index; i< nums.length; i++){
            nums[i] = 0;
        }
    
    return nums;
};

