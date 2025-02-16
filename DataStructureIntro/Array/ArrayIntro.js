// Introduction to Array

const array = ['a','b','c','d','f'];
const array2 = [];

// Basic operations in Array Datasrcuture and it's BigO Notation

// Adding or removing elements
array.push('g'); //Added element at the end of the array - O(1) - Bcz no index shifting and traversing happens

array.pop(); //Delet the last element of the array - O(1) - Bcz no index shifting and traversing happens

array.unshift('Sharan'); // Add elements to starting of the array - O(n) - hifting of indexes happen like a - index will be looped
//from 0 to 1 like that for every elements - Shifting and traversing happends based on the number of elements in array so O(n);

array.shift(); //Removes first element of the array - O(n);

array.splice(5,0,"5"); //remove element to the array in particular position - O(n)
// splice(start, deleteCount, item1, ...)
const arr = [1, 2, 3, 4, 5];

// Remove the element at index 2
arr.splice(2, 1); // Removes one element at index 2

console.log(arr); // Output: [1, 2, 4, 5]

// Accesing elements
array[0]; //Direct Access to element - O(1);

//Searching

console.log(array.indexOf(2)); //Find the Index of element - O(n) - All searching is O(n)- Because going through each elements
console.log(array.find((item) => item == 'b')); //Find the first element in the array matching the condition

// lastIndexOf(element): Finds the last index
// includes(element): Checks if an element exists
// findIndex(callback): Finds the index of the first element satisfying a condition

// Iterating - O(n) - Iterating through all the elements one by one
array.forEach((item)=> { //Iterates over elements
    console.log(item);
})

//map(callback): Creates a new array by transforming elements(All the elements)
//filter(callback): Creates a new array with elements that pass a condition
// reduce(callback, initialValue): Reduces the array to a single value
// every(callback): Checks if all elements satisfy a condition 
// some(callback): Checks if any element satisfies a condition 

// Sorting 
// sort(compareFunction): Sorts the array O(n(log n)) -- will see what is that 

array.reverse(); // reverse the array
array.concat(array2); //Concat two arrays
array.slice(0,2); //Extract the portion of array - Start position and end position to extract

// Utility

array.length -  // length: Returns the number of elements - O(1)

//join(separator): Joins elements into a string -O(n)

console.log(array.toString()); // Converts array to string

// Set like operators

array.includes('a') // Check the existence of the element O(n);
const ArraySet = new Set(array); // O(n) - Create new set with the array elements to avoid duplicate elements
console.log(ArraySet);



console.log(array);
