// Max Sum Array - We have to use Kaden's algorithm which is more suitable

// Let's usual make brute force function

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  let maxSum = nums[0]; //Even the first element can be the largest element in the array.
  //  Beacuse even one element is sub array. We gonna verify with that first
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    
    for (let j = i; j < nums.length; j++) {
      //From every ith element it will start adding every next
      // element consecutively till last and pass that to maxSum. At last loop over maxSum will have
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        startIndex = i;
        endIndex = j;
        maxSum = currentSum;
      }
    }
  }
  return {
    maximumValue: maxSum,
    MaxString: nums.splice(startIndex,endIndex)
  };
};

console.log(maxSubArray(input));

//Just put chatgpt kaden's algorithm for maxsub array
var maxSubArray2 = function (nums) {
    let maxSum = nums[0]; //Even the first element can be the largest element in the array. Beacuse even one element is sub array. We gonna verify with that first
    let currentsum =0;
    for (let i = 0; i < nums.length; i++) {
        currentsum = currentsum + maxSum
        if(maxSum < 0){
            currentsum = 0;
        }
        if(currentsum > maxSum){
            maxSum = currentsum;
        }
        
        
    }
    return maxSum;
};
