// Task 1
class Book {
  title = "Sharan love story"; //These variable are called fields and not type is required(const, let)
  author = "Sharan";
  year = 2024;

  getSummary() {
    ////These function are called methods and not type is required(function key word)
    console.log(
      `${this.title} was written by ${this.author} in year ${this.year}`
    );
  }
}

const book = new Book();
// book.getSummary();

// Task 2
// Using constructor to get the details while instancing object
class Book2 {
  static firstEdition = 2019; // Making it static it becomes class property not instance property - for this.latestEdition this
  // refers to the object created(instance). now by making it static it belongs to class so this.firstediton belongs to the class itself
  latestEdition = 2024; //This is instance property - Means belongs to the instance(object) when created for the class

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  getAge() {
    const date = new Date();
    console.log(date.getFullYear() - this.year);
  }
  // Accesible only through classname.method not through objects
  static compareTwoBooks(year) {
    console.log(this.firstEdition);
    if (year < this.firstEdition) {
      console.log("Not using latest version");
    } else {
      console.log("Use the latest version");
    }
  }
}

const book2 = new Book2("Sharan", 2000);

console.log(Book2.compareTwoBooks(2025));
book2.getAge();

// Task 3
class Magazine extends Book {
  constructor(month) {
    super();
    this.month = month;
  }
  // Overrides the getsummary method
  // By extending we could able to overwrite the method and use thier's properties
  getSummary() {
    console.log(
      `${this.title} was written by ${this.author} in year ${this.year} in month ${this.month}`
    );
  }
}

const magazine = new Magazine("July");
magazine.getSummary();

// Task -4 Using private field and using getter and setter method to retrive

class Book3 {
  #price = 100;
  constructor() {}
  setPrice(price) {
    this.#price = price;
  }
  getPrice() {
    return this.#price;
  }
}

const book3 = new Book3();
book3.setPrice(1000);
console.log(book3.getPrice());

// Task 5
// Encapsulation - Encapsulates data and methods in a single entity (object).
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance = amount;
  }
  withdraw(amount) {
    if (this.#balance < amount) {
      console.log("Can't with draw");
      return this.#balance;
    } else {
      this.#balance = this.#balance - amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const bankaccount = new BankAccount();
bankaccount.deposit(150);
bankaccount.withdraw(100);
console.log(bankaccount.getBalance());

// Polymorphism - Overriding methods(saves memory)

class Shape {
  area() {
    return 0;
  }
}

class Cirlce extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return this.radius * this.radius;
  }
}

class Rectangel extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

const circle = new Cirlce(10);
console.log(circle.area());
const rectangle = new Rectangel(5, 10);
console.log(rectangle.area());

// Task 8 - Practice static methods
class Static {
  static add(a, b) {
    return a + b;
  }
}

console.log(Static.add(2, 3));
