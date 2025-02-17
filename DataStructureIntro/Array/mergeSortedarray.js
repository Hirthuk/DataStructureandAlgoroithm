// Given two sorted array merge it into one array

const array1 = [1, 5, 33, 75];
const array2 = [1, 67, 95, 113];

// Naive method
// Failed - const s check the correct way
// function mergeSortedArray(array1, array2) {
//   array2.forEach((element) => {
//     array1.push(element);
//   });
//   for (const i = 0; i < array1.length; i++) {
//     if (array1[i] > array1[i + 1]) {
//       const a = array1[i];
//       array1[i] = array1[i + 1];
//       array1[i + 1] = a;
//     }
//   }
// }
// Actaul implementation answer -->

function Answer(array1, array2) {
  let i = 0;
  let j = 0;
  const mergeAnswerArray = [];
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergeAnswerArray.push(array1[i]);
      i++;
    } else {
      mergeAnswerArray.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    mergeAnswerArray.push(array1[i]);
    i++
  }
  while (j < array2.length) {
    mergeAnswerArray.push(array2[j]);
    j++
  }
  console.log(mergeAnswerArray);
}

// Using in build methods
function mergeSortedArray2(array1, array2) {
  const mergedArray = array1.concat(array2);
  console.log(mergedArray.sort((a, b) => a - b));
}

// mergeSortedArray(array1, array2);
// mergeSortedArray2(array1, array2);
Answer(array1, array2);


// Explanation - Answer
// 1. **Initialization**: Start with two sorted arrays and initialize two pointers (`i` and `j`) at the beginning of each array. Create an empty array `mergeAnswerArray` to store the merged result.  

// 2. **Comparison**: Compare the current elements of both arrays (`array1[i]` and `array2[j]`).  

// 3. **Smaller Element**: Push the smaller element into `mergeAnswerArray` and move the pointer (`i` or `j`) of the array where the smaller element came from.  

// 4. **Repeat**: Continue comparing elements and adding the smaller one until one array is completely processed.  

// 5. **Remaining Elements**: Once one array is exhausted, add all remaining elements from the other array to `mergeAnswerArray`.  

// 6. **Result**: The final `mergeAnswerArray` is the merged and sorted array.