// Example for space complexity --- same as time
// ### What Causes Space Complexity?  
// 1. **Variables**: Memory needed for integers, arrays, objects, etc.  
// 2. **Data Structures**: Storing intermediate data like hashmaps, stacks, or queues.  
// 3. **Recursion**: Extra memory for function calls stored in the call stack.  
// 4. **Input Size**: Larger inputs may require proportionally larger memory.  

function spaceComplex1(array) {
    for(let i=0; i< array.length; i++){ //O(1) -- One time variable assigned - The algorithm takes constant time or space, regardless of the input size.
        console.log(array[i]);
    }
}

function spaceComplexity2(array) {
    let anotherArray = []; 
    for(let i=0; i< array.length; i++){ //O(1) -- One time variable assigned
        anotherArray[i] = "hi" //Another variable assigned O(n) - dynamically grows based on input
    }
}

// spaceComplex1 - O(1)
// spaceComplexity2 - O(2)