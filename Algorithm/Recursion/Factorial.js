// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer = 1
function findFactorialRecursive(number) {
 if(number == 0){
    return answer;
 }
answer = answer*number;
number--
return findFactorialRecursive(number);
}

// Check andrew method as well which is simple -> for 2 and 1 factorial it is same value. He used that 
// edge case also and use debug to find the flow.

function findFactorialIterative(number) {
  let answer = number;
  while (number > 1) {
    //5 //4 //3 //2 //1(Loop ends)
    answer = answer * (number - 1); //20 //60 //120 //120(120*(2-1))
    number--; //4 //3 //2 //1
  }
  return answer;
}

let findAnswer = findFactorialRecursive(5);
console.log(findAnswer);
