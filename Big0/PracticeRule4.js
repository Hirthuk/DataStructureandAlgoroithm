// I'm making one example for how drop non dominants works in BIGO notation

const input = [1,2,3,4,5];
function DropNonDominant(array) { //O(n)
    console.log("Each number in the array");
    array.forEach((elements) => {
        
        console.log(elements);
    })

    array.forEach((firstElement) => {
        array.forEach((SecondElement) => { //O(n^2)
            console.log(`addition of each pair ${firstElement+SecondElement}`)
        })
    })
}

//BigO --> O(n) + O(n^2)
// Here the most dominant one - n^2 it can increase so fast if the input increase and the value of it affects more 
// than O(n) below note check
DropNonDominant(input);

// The **Drop Non-Dominants** rule in Big-O focuses on keeping only the term that grows the fastest as 
//the input size \( n \) increases. Smaller or less significant terms are dropped because they have minimal impact on the algorithm's scalability for large inputs. 
//For example, in \( O(n^2 + n + 1) \), the \( n^2 \) term dominates, so we simplify it to \( O(n^2) \). This makes Big-O notation concise and focuses on the most critical aspect
// of an algorithm's growth. It's a way to generalize and ignore details that don't matter at scale.