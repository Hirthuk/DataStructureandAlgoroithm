// Show user true or false when the give two array contain common elements

// Brute fore -- Worst case --- Not better approach
// Difference between O(a*b) and O(a+b) below

const array1 = [1, 2, 3, 4];
const arrary2 = [5];

function worstAlgorithm(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        console.log(`Pair found ${array1[i]}`);
        return true;
      }
    }
  }
  console.log("No Pair found");
  return false;
}

// This is using nested loop so O(a*b)

// Includes can be used instead of nested loop still it would be O(a*b);
// a+b a and b are different sizes
function usingInclude(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      console.log("Pair found");
      return true;
      break;
    }
  }
  console.log("Pair not found");
  return false;
}

function UsingHash(array1, arrary2) {
  const HashSet = new Set(arrary2);
  for (const values of array1) {
    // for( values of array1) -- only take indexes not the actual elements of for( value of array) shld use for check elements
    if (HashSet.has(values)) {
      console.log("Pair found");
      return true;
    }
  }
  console.log("No pair found");
  return false;
}

// This is using hash map so O(a+b )-- linear complexity -- Better way

// worstAlgorithm(array1,arrary2);
usingInclude(array1, arrary2);
// UsingHash(array1, arrary2);


// ### **1. \( O(a + b) \): Linear Complexity**
// - Represents sequential operations on two inputs, where you process one input after the other.  
// - Growth is linear and more efficient for larger inputs compared to \( O(a \times b) \).  

// ---

// ### **2. \( O(a \times b) \): Quadratic/Multiplicative Complexity**
// - Represents nested operations where every element of one input is paired with every element of the other.  
// - Growth is significantly faster, making it less efficient for large inputs. 

// If the loop is not nested but one after another mostly a+b

// All code in Github repo
// https://github.com/aneagoie/ztm-master-the-coding-interview-ds-algo

// Angelo course implementation things instead of hash using object to store and retrive


function containsCommonItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
      for ( let j=0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
          return true;
        }
      }
    }
    return false
  }
  
  //O(a*b)
  //O(1) - Space Complexity
  
//   const array1 = ['a', 'b', 'c', 'x'];
//   const array2 = ['z', 'y', 'a'];
  
  function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?
  
    let map = {};
    for (let i=0; i < arr1.length; i++) {
      if(!map[arr1[i]]) {
        const item = arr1[i];
        map[item] = true;
      }
    }
    // loop through second array and check if item in second array exists on created object. 
    for (let j=0; j < arr2.length; j++) {
      if (map[arr2[j]]) {
        return true;
      }
    }
    return false
  }
  
  //O(a + b) Time Complexity
  //O(a) Space Complexity
  
  // containsCommonItem2(array1, array2)
//    For more readable and simple things we can show this later
  function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  }
  
  containsCommonItem(array1, array2)
  containsCommonItem2(array1, array2)
  containsCommonItem3(array1, array2)