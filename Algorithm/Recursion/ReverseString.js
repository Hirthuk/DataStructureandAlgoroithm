function reverseString(str) {
  let array = [];
  for (let i = str.length; i > 0; i--) {
    array.push(str.charAt(i - 1));
  }
  return array.join("");
}

// console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
  // Base case
  if(str.length <=1){
    return str
  }
  return reverseStringRecursive(str.slice(1)) + str[0]
}

console.log(reverseStringRecursive("yoyo master"));


// ---

// ## **💡 Correct Recursive Approach**
// To **reverse a string using recursion**, we need:
// 1. **Base case** – Stop recursion when the string is empty (`""`) or has only one character.
// 2. **Recursive case** – Take the **first character**, move it to the **end**, and recursively reverse the rest of the string.

// ### **✅ Correct Recursive Function**
// ```js
// function reverseStringRecursive(str) {
//   // Base case: If the string is empty or has one character, return it as it is.
//   if (str.length <= 1) {
//     return str;
//   }

//   // Recursive case: Reverse the substring from index 1 onwards and add the first character at the end.
//   return reverseStringRecursive(str.slice(1)) + str[0];
// }

// // Test the function
// console.log(reverseStringRecursive("hello")); // Output: "olleh"
// ```

// ---

// ## **🔍 Step-by-Step Execution (Call Stack Visualization)**
// Let's analyze **`reverseStringRecursive("hello")`**.

// ### **📌 Step 1: Function Calls (Expanding the Recursion)**
// | Call | `str` Value | What Happens? | Returns |
// |------|------------|---------------|---------|
// | `reverseStringRecursive("hello")` | `"hello"` | Calls `reverseStringRecursive("ello")` | - |
// | `reverseStringRecursive("ello")` | `"ello"` | Calls `reverseStringRecursive("llo")` | - |
// | `reverseStringRecursive("llo")` | `"llo"` | Calls `reverseStringRecursive("lo")` | - |
// | `reverseStringRecursive("lo")` | `"lo"` | Calls `reverseStringRecursive("o")` | - |
// | `reverseStringRecursive("o")` | `"o"` | **Base Case Reached** (returns `"o"`) | `"o"` |

// ---

// ### **📌 Step 2: Call Stack (Returning from Recursion)**
// Now, we **pop** each function from the call stack and build the result:

// | Call | `str` Value | What Happens? | Returns |
// |------|------------|---------------|---------|
// | `reverseStringRecursive("o")` | `"o"` | Base case hit, return `"o"` | `"o"` |
// | `reverseStringRecursive("lo")` | `"lo"` | `"o" + "l"` | `"ol"` |
// | `reverseStringRecursive("llo")` | `"llo"` | `"ol" + "l"` | `"oll"` |
// | `reverseStringRecursive("ello")` | `"ello"` | `"oll" + "e"` | `"olle"` |
// | `reverseStringRecursive("hello")` | `"hello"` | `"olle" + "h"` | `"olleh"` |

// ---

// ## **💡 How Recursion Works in This Example**
// 1. Each function call **reduces the problem** by taking a **smaller part of the string** (`str.slice(1)`).
// 2. The **base case** stops recursion when we reach a **single character**.
// 3. As the recursion **unwinds**, we **add the first character of each call to the end** of the result.

// ---

// ## **🛠️ Key Recursive Concepts**
// ✅ **Base Case** → When `str.length <= 1`, return the string.  
// ✅ **Recursive Case** → Reduce problem size (`str.slice(1)`) and call function again.  
// ✅ **Call Stack** → Each function call waits for the next one to finish.  
// ✅ **Returning Values** → As functions return, they **concatenate characters in reverse order**.

// ---

// ## **📝 Summary**
// | **Concept** | **Explanation** |
// |------------|----------------|
// | **Recursion Definition** | A function that calls itself to break a problem into smaller parts. |
// | **Base Case** | When `str.length <= 1`, return the string. |
// | **Recursive Case** | `reverseStringRecursive(str.slice(1)) + str[0]` |
// | **How It Works** | The first character moves to the end as we return back up the call stack. |

// ---

// ### **🚀 Final Thoughts**
// - Recursion is useful when the problem can be **divided into smaller subproblems**.
// - The **call stack** keeps track of function calls until the base case is reached.
// - **For large strings**, recursion **may cause stack overflow**, so an **iterative approach (loop)** is sometimes better.
