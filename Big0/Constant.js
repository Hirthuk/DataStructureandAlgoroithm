// O(1) - constant time

let movies = ["Kanguva","Goat","Amaran"]

function FirstMovie(params) {
    console.log(movies[0]); //Here one operation O(1)
    console.log(movies[1]); //Here another operation O(1)
}
// So this function would be using O(2) Event that would be constant since 2 input and operations
// So whatever the number we just call this constant type as O(1)

FirstMovie(movies);

// Anytime we  run this function the number of operation is one only 