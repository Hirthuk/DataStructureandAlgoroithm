// You have an array of number and you will be given with sum number have to find out it has
// an pair in the array that sum is equal to sum number

// [1,2,3,4] -sum number - 7 / [3,4] this pair in the array matches the sum number

// Worst case scenario using nested loops - which is easy for me but not suitable O(n^2) - time complexity
// notation

function FindSumPair(array, sumNumber) {
  array.forEach((item) => {
    array.forEach((item2) => {
      let addValue = item + item2;
      if (sumNumber == addValue) {
        console.log(`Pair is there ${addValue}`);

        return true; // it returns function will stop
      }
    });
  });
}

FindSumPair([1, 2], 3);
