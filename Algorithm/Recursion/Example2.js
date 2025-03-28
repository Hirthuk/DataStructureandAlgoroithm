// Multiply each element in the array

function MultiplyRaw(arr){
 let product = 1;
 for(let i=0; i< arr.length; i++){
    product = product * arr[i]
 }
 return product;
}

// console.log(MultiplyRaw([1,2,3,4,5,6]));
// Mostly in recursion we won't have global state to monitor the flow  
// Let's try to achieve this using recursion
// 5*4*3*2*1 if array is [5,4,3,2,1]
function MultiplyRecursion(arr){
    if(arr.length == 0){
        return 1;
    }
    return arr[0] * MultiplyRecursion(arr.slice(1));
}

console.log(MultiplyRecursion([1,2,3,4,5]));
// I couldn't find in one go
// How this works
// Multiply([1,2,3,4,5]) -> length != 0 -> 1*MuMultiply([2,3,4,5])
// Multiply(2,3,4,5]) -> length != 0 -> 2*Multiply([3,4,5)
// Multiply([3,4,5]) -> length != 0 -> 3*MuMultiply([4,5])
// Multiply([4,5]) -> length != 0 -> 4*MuMultiply([5])
// Multiply([5]) -> length != 0 -> 5*MuMultiply([])
// Multiply([]) -> length = 0 -> return 1

// Poping out the called function one by one
// See from top to bottom
// Multiply([1,2,3,4,5]) -> length != 0 -> 1*MuMultiply([2,3,4,5]) 1*2*3*4*5
// Multiply(2,3,4,5]) -> length != 0 -> 2*Multiply([3,4,5)2 * 3*4 *5
// Multiply([3,4,5]) -> length != 0 -> 3*MuMultiply([4,5]) 3*4*5
// Multiply([4,5]) -> length != 0 -> 4*MuMultiply([5]) 4 *5
// Multiply([5]) -> length != 0 -> 5*MuMultiply([]) --> 5 * 1
// Multiply([]) -> length = 0 -> return 1



