class StackwithArray {
  constructor() {
    this.newArray = [];
  }
  peek() {
    if (this.newArray.length === 0) {
      return "Empty stack";
    }
    return this.newArray[0];
  }
  push(value) {
    this.newArray.unshift(value);
    return;
  }
  pop() {
    this.newArray.shift();
    return;
  }
}

const myStack = new StackwithArray();
myStack.push(5);
myStack.push(10);
myStack.pop();
console.log(myStack.peek());