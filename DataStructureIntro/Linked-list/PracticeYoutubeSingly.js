class node {
  // {
  //     data: data
  //     next: null
  // }
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  length = 0;
  addFirst(data) {
    const newNode = new node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addLast(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
    }
    let currentElement = this.head;
    while (currentElement.next) {
      currentElement = currentElement.next;
    }

    currentElement = newNode;
    this.tail = newNode;
    this.length++;
    if (this.length == 2) {
      this.head.next = this.tail;
    }
  }

  NoOfNodes() {
    console.log(this.length);
    return this.length;
  }
  printList() {
    let array = [];
    let currentNode = this.head;

    while (currentNode.next !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
      array.push(currentNode.data);
    }
    console.log(array);
    return array;
  }

  addAt(data, index) {
    if (index > this.length - 1 || index == this.length) {
      this.addLast(data);
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = this.tail;
    }

    const newNode = new node(data);
    let currentNode = this.head;
    let prev;
    for (let i = 0; i < index - 1; i++) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.addFirst(8);
myLinkedList.addLast(10);

myLinkedList.NoOfNodes();
myLinkedList.addAt(5, 2);
myLinkedList.printList();
console.log(myLinkedList);
