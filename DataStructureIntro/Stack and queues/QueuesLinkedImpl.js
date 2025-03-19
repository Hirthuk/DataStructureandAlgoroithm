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
    if(!this.top){
        this.top = newNode;
        this.end = newNode;
    }
    // Yet to complete enqueue
  }
  dequeue(){
    if(!this.top){
        return null;
    }
    let temp = this.top.next;
    this.top = temp;
    this.length--
  }
}
