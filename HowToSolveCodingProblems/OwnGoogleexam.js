// You have an array of number and you will be given with sum number have to find out it has
// an pair in the array that sum is equal to sum number

// [1,2,3,4] -sum number - 7 / [3,4] this pair in the array matches the sum number

// Worst case scenario using nested loops - which is easy for me but not suitable O(n^2) - time complexity
// notation

const exampleArray = [1,2,3,4,5,6,7,8];
const sum = 11;
function FindSumPair(array, sumNumber) {
  array.forEach((item) => {
    array.forEach((item2) => {
      let addValue = item + item2;
      if (sumNumber == addValue) {
        console.log(`Pair is there ${addValue}`);
      }
      return true; // it returns function will stop
    });
  });
}

function Betterway(array, sum){
  // Array is sorted given instruct. So first element can't be greater than sum. if there pair wouldn't be 
  // there
 //Instead of two for loops one for loop and if statement still it is not best O(n^2) only - Same input array
//  is used twice
  for(let i =0; i<array.length; i++){
    // let value = array[i]-sum;
    if(array.includes(sum - array[i])){
        console.log("pair found")
    }
  }
 

}

// So Actual thing - Above both functions still use O(n2) array.includes() still go thorough elements
// ony by one
// There is a thing called HashMap(Set) - Where it have has method which is constant O(1) based on the in build method
// So we can use hash map even if not sorted
//  https://www.bigocheatsheet.com/ - Hash map search is O(1) - Constant
function UsingHashMap(array,sum) {
  const HashSet = new Set(); // Stores unique values of any type and prevent insertion order

  for(element in array){
    const deductor = sum - element;
    if(HashSet.has(deductor)){
      console.log("Pair found")
      return true;
    }
    HashSet.add(deductor);
  }
  console.log("No pair found");
  return false;
}

// FindSumPair([1, 2], 3);

Betterway([1, 2], 3);
//Different better way to do this -
// https://www.youtube.com/watch?v=21pmwl0hrME - this one and this problem try to solve
