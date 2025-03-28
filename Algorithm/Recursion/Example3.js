// Factorial of a number 
// n = 5 5*4*3*2*1

function factorialRecursive(n){
    if(n==0){
        return 1
    }
    return n * factorialRecursive(n-1);
}

console.log(factorialRecursive(5))

// Done it in one go -> easy one
// factorialRecursive(5)  
// = 5 * factorialRecursive(4)  
// = 5 * (4 * factorialRecursive(3))  
// = 5 * (4 * (3 * factorialRecursive(2)))  
// = 5 * (4 * (3 * (2 * factorialRecursive(1))))  
// = 5 * (4 * (3 * (2 * (1 * factorialRecursive(0)))))  
// = 5 * (4 * (3 * (2 * (1 * 1))))   // Base case: factorialRecursive(0) returns 1  
// = 5 * (4 * (3 * (2 * 1)))  
// = 5 * (4 * (3 * 2))  
// = 5 * (4 * 6)  
// = 5 * 24  
// = 120  
