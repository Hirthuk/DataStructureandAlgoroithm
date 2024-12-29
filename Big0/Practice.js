// Example of how Big0 notation works
// Lets calcuate how much time it takes to provide output when the input increases
// Certainingly it would increase

const Nemo = ["nemo"];
// Lets create a large array with multiple inputs. We can create this in one go as well
const largearray = new Array(100000);
largearray.fill('nemo');
// Lets calculate the time it take to run the code
let time0 = performance.now();

const findNemo = (array) => {
   for(let i=0; i < array.length; i++){
    if(array[i]=== "nemo"){
        console.log("foundNemo")
    }
   }

}

let time1 = performance.now();


console.log(largearray.length);
console.log(`Time took to run this function ${time1-time0}`);

findNemo(largearray);

// Single input array Time took to run this function 0.015447999999992135
// If having inputs more the function takes long time to run 

// So the above function code is using BigO notation of O(n) - Linear time
// The time takes(number of operations) is linear proportion to the number of inputs here 
// O(n) - n denotes the number of inputs 
// As the number of inputs in array increases the number of operations increase then the time takes to run
// the code increase
