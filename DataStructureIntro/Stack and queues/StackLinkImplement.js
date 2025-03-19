class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.end = null;
    this.length = 0;
  }
  isEmpty() {
    if (this.top == null) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.top.value;
  }
  push(value) {
    let NewNode = new node(value);
    if (this.isEmpty()) {
        this.top = NewNode;
        this.end = NewNode;
        this.length++
        return;
    }
    NewNode.next = this.top;
    this.top = NewNode;
    this.length++
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let temp = this.top.next;
    this.top = temp;
    this.length--;
    return;
  }
}

const MyStack = new Stack();
MyStack.push(5);
MyStack.push(10);
MyStack.push(15);
MyStack.pop();
console.log(MyStack.peek())
console.log(MyStack);
console.log(MyStack.isEmpty());