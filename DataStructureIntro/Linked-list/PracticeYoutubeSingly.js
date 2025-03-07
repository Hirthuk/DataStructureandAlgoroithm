class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  addLast(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    let currentElement = this.head;
    while (currentElement.next) {
      currentElement = currentElement.next;
    }
    currentElement.next = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }
  printList() {
    let array = [];
    let currentElement = this.head;
    while (currentElement) {
      array.push(currentElement.data);
      currentElement = currentElement.next;
    }
    console.log(array);
    return array;
  }

  addAt(index, value) {
    if (index == 0) {
      this.addFirst(value);
      return;
    }
    if (index >= this.length) {
      this.addLast(value);
      return;
    }
    let newNode = new node(value);
    let currentElement = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentElement = currentElement.next;
    }
    // console.log(currentElement);
    newNode.next = currentElement.next;
    currentElement.next = newNode;
    this.length++;
  }

  removeLast() {
    let currentElement = this.head;
    while(currentElement.next.next){
      currentElement = currentElement.next;
    }
    currentElement.next = null;
    this.tail = currentElement;
    console.log(currentElement);
  }
}

const myLinkedList = new LinkedList();
myLinkedList.addFirst(5);
myLinkedList.addLast(7);
myLinkedList.addAt(1, 10);
myLinkedList.printList();
myLinkedList.removeLast();
console.log(myLinkedList);



// class node {
//   // {
//   //     data: data
//   //     next: null
//   // }
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     (this.head = null), (this.tail = null);
//   }
//   length = 0;
//   addFirst(data) {
//     const newNode = new node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   addLast(data) {
//     const newNode = new node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       this.length++;
//       return;
//     }
//     let currentElement = this.head;
//     while (currentElement.next) {
//       currentElement = currentElement.next;
//     }

//     currentElement.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }

//   NoOfNodes() {
//     console.log(this.length);
//     return this.length;
//   }
//   printList() {
//     let array = [];
//     let currentNode = this.head;

//     while (currentNode !== null) {
//       array.push(currentNode.data);
//       currentNode = currentNode.next;
//     }
//     console.log(array);
//     return array;
//   }

//   addAt(data, index) {
//     if (index >= this.length) {
//       this.addLast(data);
//       return;
//     }

//     if (index == 0) {
//       this.addFirst(data);
//       return;
//     }

//     const newNode = new node(data);
//     let currentNode = this.head;
//     let prev;
//     for (let i = 0; i < index - 1; i++) {
//       prev = currentNode;
//       currentNode = currentNode.next;
//     }
//     newNode.next = currentNode.next;
//     currentNode.next = newNode;
//     this.length++
//   }
// }

// const myLinkedList = new LinkedList();
// myLinkedList.addFirst(1);
// myLinkedList.addLast(2);
// myLinkedList.addAt(3,1);
// myLinkedList.NoOfNodes();
// myLinkedList.printList();
// console.log(myLinkedList);
