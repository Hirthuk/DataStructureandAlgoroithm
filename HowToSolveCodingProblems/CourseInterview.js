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