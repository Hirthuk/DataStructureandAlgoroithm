
//  Brute force - Time exceeded error
var containsDuplicate = function(nums) {
    for(let i=0; i< nums.length; i++){
        for(let j=0; j < nums.length; j++){
            if(nums[i] == nums[j] && i != j  ){
                return true;
            }
        }
       
    }
         return false;
    };

    // Best one we already did it before so this one
    var containsDuplicate = function(nums) {
        const numSet = new Set();
    
        for (let num of nums) {
            if (numSet.has(num)) {
                return true;
            }
            numSet.add(num);
        }
    
        return false;
    };

    // The Best one - Using Set instead of hash is best here because we want to check the duplicate value
// And set allow only unique elements and also O(1) for searchig. by this we might get less runtime
// bcz we won't get to check the same elements two time if present

var multiDuplication = function(nums){
    let MySet = new Set();
    for(let i=0;i<nums.length;i++){
        if(MySet.has(nums[i])){
            return true;
        }
        else{
            MySet.add(nums[i])
        }
    }
    return false;
}