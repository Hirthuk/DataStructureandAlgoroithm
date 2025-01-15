// Task 1
class Book {
    title = 'Sharan love story'; //These variable are called fields and not type is required(const, let)
    author = 'Sharan';
    year = 2024;

    getSummary() {  ////These function are called methods and not type is required(function key word)
        console.log(`${this.title} was written by ${this.author} in year ${this.year}`)
    }
}

const book = new Book();
// book.getSummary();

// Task 2
// Using constructor to get the details while instancing object
class Book2{
    static firstEdition = 2019; // Making it static it becomes class property not instance property - for this.latestEdition this 
    // refers to the object created(instance). now by making it static it belongs to class so this.firstediton belongs to the class itself
    latestEdition = 2024; //This is instance property - Means belongs to the instance(object) when created for the class

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    
    getAge(){
        
        const date = new Date();
        console.log(date.getFullYear() - this.year);
    }
    // Accesible only through classname.method not through objects
    static compareTwoBooks(year) {
        console.log(this.firstEdition)
        if(year < this.firstEdition){
            
            console.log("Not using latest version")
        }
        else{
            console.log("Use the latest version");
        }
    }

}

const book2 = new Book2("Sharan",2000);

console.log(Book2.compareTwoBooks(2025));
book2.getAge();

// Task 3
