function findFactorialIterative(number) {
    let answer = 1;
    // you actually no longer need the if statement because of the for loop
    // if (number === 2) {
    //   answer = 2;
    // }
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
    return answer;
  }
  
  function findFactorialRecursive(number) {
    if(number === 2) { //when it reached 2 it will return 2 and from then the previous callstack when fuctions
        // call will called in reverse one by one like 2 * 6 * 12 * 20 like this
      return 2;
    }
    return number * findFactorialRecursive(number - 1)
  }
  
  findFactorialIterative(5);
  findFactorialRecursive(5);
  
  //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2