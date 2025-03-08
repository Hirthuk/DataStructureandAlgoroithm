// Write a diagram to visualize it

class node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  length = 0;
  addFirst(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    else{
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
        return;
    }
  }
  addLast(data) {
    if (!this.head) {
      this.addFirst(data);
      return;
    }
    let newNode = new node(data);
    // let currentNode = this.head;
    // let prevElement;
    // while (currentNode.next) {
    //   prevElement = currentNode.prev;
    //   currentNode = currentNode.next;
    // }
    // console.log("this current node", currentNode, "Prev", prevElement);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }
//    printList() {
//     let array = [];
//     let currentNode = this.head;
//     while (currentNode.next !== null) {
//       array.push(currentNode.data);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
  addAt(index,value){
    let newNode = new node(value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++
        return;
    }
    if(index > this.length){
        this.addLast(value);
        return;
    }
    if(index < 0){
        this.addFirst(value);
        return;
    }
    let currentElement = this.head;
    for (let i = 0; i < index; i++) {
        currentElement = currentElement.next;
    }
    newNode.prev = currentElement.prev;
    newNode.next = currentElement;
    currentElement.prev.next = newNode;
    currentElement.next = newNode;
    this.length++;
    console.log("AddAt",currentElement);
    return;

    
  }
  remove(index){
    let currentElement = this.head;
    for(let i=0; i < index; i++){
        currentElement = currentElement.next;
    }
    currentElement.prev.next = currentElement.next;
    currentElement.next = currentElement.prev;
    this.length--;
    return;
  }
}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.addFirst(7);
myDoublyLinkedList.addFirst(8);
myDoublyLinkedList.addLast(10);
myDoublyLinkedList.addLast(11);
myDoublyLinkedList.addAt(2,19);
myDoublyLinkedList.remove(2);
// myDoublyLinkedList.printList();
console.log(myDoublyLinkedList);
