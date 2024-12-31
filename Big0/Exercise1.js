// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; //O(1) -- Assignment happens only once when the function called
    a = 50 + 3; //O(1) -- Assignment happens only once when the function called
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction(); //O(n) -- inside for loop- this will run based on the input everytime
      let stranger = true; //O(n) -- inside for loop- this will run based on the input everytime
      a++; //O(n) -- inside for loop- this will run based on the input everytime
    }
    return a; //O(1) - this return is for funChallenge function and return only once
  }

//   My Guess - Since it is using the for loop inside and mostly the number of operation increase based on the input.
// If the input is 10 time the number of operation this for loop do is 10 times and 10th time what is the
// Value of a will be returned

// Actual implementation
// O(1)+O(1)+O(1)+ n + n + n + n = O(3+4n) this is the BigO notation for this function
// But We don't need to do for every line and there is better way to calculate. In sum it would O(n) only but for now let's stick
// and learn in future
