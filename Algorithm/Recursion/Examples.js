function RecursionPerson(person) {
    if (person == 1) {
        return person;
    }
    return RecursionPerson(person - 1);
}

// Make it to return one by one
function RecursionReturn(person) {
    if (person < 1) {
        return [];
    }
    return [person, ...RecursionReturn(person - 1)];
}
// How this works
// R5 -> [5,R(4)]
// R4 -> [4,R(3)]
// R3 -> [3,R(2)]
// R2 -> [2,R(1)]
// R1 -> [1,R(0)]
// R0 -> [] --> Return empty array
// Now the returns will start adding.
//All the function call in the call stack which didn't return anything will start returning one by one
// R1 -> [1,R[0](which is empty array so ntg)] -> [1]
// R2 -> [2,R1(whic is [1])] --> [2,1]
// R3 -> [3,R2(whic is [2,1])] --> [3,2,1]
// R4 -> [4,R1(whic is [3,2,1])] --> [4,3,2,1]
// R5 -> [5,R1(whic is [[4,3,2,1]])] --> [5,4,3,2,1]]
// console.log(RecursionReturn(5));
let count = 0; // Putting this inside won't work bcz count will be 0 everytime
// Putting outside in a global variable but we are not updating the count--> RecursionStart(count+1) --> just passing as
// parameter with addition so this also won't work.
function RecursionStart(person) {
    // Base case

    if (count > person) {
        //first 5 elements
        return [];
    }
    return [count, ...RecursionStart(count)];
}
// Corrected version
function RecursionStartCorrect(person, count = 1) { // Start count from 1
    if (count > person) { // Base case: Stop when count exceeds person
        return [];
    }
    return [count, ...RecursionStart(person, count + 1)]; // Increase count
}

console.log(RecursionStart(5)); 
// Output: [1, 2, 3, 4, 5]

console.log(RecursionStart(5));
