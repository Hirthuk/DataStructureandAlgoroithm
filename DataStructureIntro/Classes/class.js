// Reference types - Object, Array, Function
// Don't store the value directly in variable like primitive datatypes(string,boolean)
// Store the reference of the memory location. Mutable

let x = 0;
let y = x; //Y Gets copy of x now y = 10;
// console.log(y);
 y = 20; // ybecame 20 now that doesn't change the x value

 const object1 = {value: 10};
 const object2 = object1; //Memory location reference is now matched
//  console.log(object2); //Now value became {value: 10}
 object2.value = 15 //Changing Object2 value to 15
 console.log(object1.value); //Object 1 value became 15 bcz we have changed the object2 which holds the refernce
//  memory of object 1

