class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.end = null;
    this.length = 0;
  }
  peek() {
    if (!this.top) {
      return "No preson there";
    }
    return this.top;
  }
  enqueue(value) {
    let newNode = new node(value);
    if (!this.top) {
      this.top = newNode;
      this.end = newNode;
      this.length++
      return;
    }
    let temp = this.end.next;
    this.end.next = newNode;
    this.end = temp;
    this.length++;
    return ;
  }
  dequeue() {
    if (!this.top) {
      return null;
    }
    let temp = this.top.next;
    this.top = temp;
    this.length--;
    return;
  }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.dequeue();
console.log(myQueue);