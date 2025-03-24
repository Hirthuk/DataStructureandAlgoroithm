// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let first = 0;
  let second = 1;
  let i = 0;
  let temp;
  while (i < n - 1) {
    let temp = first + second;
    first = second;
    second = temp;
    i++;
  }
  return second;
}

function fibonacciRecursive(n) {
    //Base case
if(n < 2){
    return n;
}
  //Recursive case
  return fibonacciRecursive(n-1)+fibonacciRecursive(n-2);
  
}

const answer = fibonacciRecursive(4);
console.log(answer);
