//Function to reverse a given string
//Naive method

const String = "Sharan";
const reverseArray = [];
var reversedString = [];
function reverseString(String) {
  const StringtoArray = String.split(""); //Converts the String to array with each character as element
  console.log(StringtoArray);

  for (let i = StringtoArray.length - 1; i >= 0; i--) {
    //Big0 - O(n)
    reverseArray.push(StringtoArray[i]);
  }

  console.log(reverseArray.join("")); //Converts the array to String with each character from array element
}

//Using Inbuild method it's very simple
function inbuildreverse(String) {
  reversedString = String.split("").reverse().join(""); // This too O(n)
  console.log(reversedString);
}

//Final solution - Make sure to note the edge cases like - what if the string is empty or single character or it's not a string

function finalSolution(String) {
   if (typeof(String) != 'string') {
    console.log("Enter String");
}
else if(String.length < 2  ) {
    console.log(`String is single character no reversing neded ${String}`)
}
else{
    // String is an array of character only can be used with String[]
    for(let i = String.length -1; i >= 0; i--){
       (reverseArray.push(String[i])) ;
    }
    reversedString = reverseArray.join('');
    console.log(reversedString);
}
}
// reverseString(String);
// inbuildreverse(String);
finalSolution(String);