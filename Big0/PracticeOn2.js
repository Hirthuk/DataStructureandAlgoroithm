// Log all pairs of aray
const pairLog  = [1,2,3,4,5];

function PairLogs(array) {
for(let i=0; i< array.length; i++){ //O(n)
    for(let x=0; x< array.length; x++){ //0(n)

        console.log(array[i] , array[x]);
    }
}
}

//O(n2) -- Since it have same input
PairLogs(pairLog);