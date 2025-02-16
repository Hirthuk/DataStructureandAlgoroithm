// Check Class before coming here
// Mostly Everyting in Javascript like Datastructure or other underneath they are class
// Inside class we can define or create our own functionalities like datastrcutures
// We can create our own datastrcuture fresh or on top of some other 
// Lets try to create our own array datastrucute

// Array is nothing but an object containing elements where the key values of indexes
// [1,2,3] == what does that mean is {0:1,1:2,2:3}

class SharanArray {
    constructor() {
        this.length =0; //In javascript in the runtime length will be assigned don't need to delcare
        this.data = {} //intialized empty array lenght and empty object to store the data
    }
    getValue(index) {
        return this.data[index];
    }
    add(value){
        // Dynamic value assign use []
        this.data[this.length] = value;
        this.length++
        return this.length;
        
    }

}

const array = new SharanArray();
array.add("Sharan");

console.log(array.getValue("0"));
// Like this we can create our own methods just like array has like splice, shift like that
// All the just classes contains thier own methods. We can our own datastructure with our needed 
// Funcitonalities based on requirement