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
 

}

FindSumPair([1, 2], 3);

//Different better way to do this -
// https://www.youtube.com/watch?v=21pmwl0hrME - this one and this problem try to solve
