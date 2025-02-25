//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
// Best practive focus on minimal steps sharan pls
function firstRecurringCharacter(input) {
  let map = new Map();
  for (let i=0; i< input.length; i++){
    if(map.has(input[i])){
        return input[i]
    }
    map.set(input[i]);
  }
  return undefined;
}

console.log(recuurenceMap([2,5,5,2,3,5,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
