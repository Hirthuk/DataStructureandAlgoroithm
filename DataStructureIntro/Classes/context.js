console.log(this); // Window (in browsers) or Global or {} (in Node.js)

// Object context - when a method is called on an object. this refers to object
const object = {
    name: "Sharan",
    showName: function() {
        console.log(this); //Whole Object
        console.log(this.name);
    }

}

// Standalone function -- for this global context only bcz it's in outside globally not inside any block or
// object of code i think
function callName() {
    console.log(this);
}

//Explicit context - call, apply , bind - It is used to pass the context(this) value

function greet() {
    console.log(this.name);
}

const object2 = {name: "Thippu"};
greet();

greet.call(object2); //Thippu would come this object context replaced with provided one

//Other types check in notes
// callName();
// object.showName();

