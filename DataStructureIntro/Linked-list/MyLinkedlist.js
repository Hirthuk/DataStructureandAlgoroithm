// Class for a simple Singly Linked List
// Removing means just removing the pointer for the before elements
// This will remove the pointer so it will be removed by javascrpt garbage collector
// This is and all object so it's all pointer knowing about pointer is very important
// Think linkedlist as chain so if you want to add anything loop through and findout the
// before connected and after connected chain. just add element to before and after chain
// Wants to remove means same.. but just replace first chain and connect with third chain
// So second chain in btw we wanna remove will be alone without conecton will be removed by javascript 
// Garbage collector
class LinkedList {
  constructor(value) {
    // Creating the first node (head)
    this.head = {
      value: value, // First node's value
      next: null, // Initially, there is no next node
    };

    this.tail = this.head; // Since there is only one node, head and tail are the same
    this.length = 0; // Keeping track of the number of nodes
  }

  // Append a new value at the end of the list
  append(value) {
    let node = {
      value: value,
      next: null,
    };

    // Linking the current tail's `next` to the new node
    this.tail.next = node;

    // Updating the tail to be the new node
    this.tail = node;

    // Increasing the length of the linked list
    this.length++;
  }
  length() {
    return this.length;
  }
  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // Prepend (add a node at the beginning of the list)
  prepend(value) {
    let node = {
      value: value,
      next: null,
    };

    // Pointing the new node's `next` to the current head
    node.next = this.head;

    // Updating the head to be the new node
    this.head = node;

    // Increasing the length of the linked list
    this.length++;

    return this; // Returning `this` allows method chaining if needed
  }
  insert(index, value) {
    // Handle edge cases (if index is out of bounds)
    if (index < 0 || index > this.length) {
        console.log("Invalid index");
        return;
    }

    // Create a new node
    let newNode = {
        value: value,
        next: null
    };

    // If inserting at the head
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
    }
    let currentNode = this.head
    // 10 -> (99) 5 -> 16
    for(let i=0; i < index -1; i++){
        currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++
}
remove(index){
    if(index >= this.length || index < 0){
        return "No index found"
    }
    if(index === this.length -1){
        this.tail.next = null
    }
    if(index === 0){
      this.head = this.head.next;
      this.length --
      return;
    }
    let currentNode = this.head
    let previousNode = null;
    for(let i=0; i < index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next
    }
    previousNode.next = currentNode.next;
    this.length--
}

}

// Creating a new linked list with initial value 10
let myLinkedList = new LinkedList(10);

// Appending a value at the end
myLinkedList.append(5); // Linked list becomes: 10 -> 5

// Prepending values at the beginning
myLinkedList.prepend(16); // Linked list becomes: 16 -> 10 -> 5
myLinkedList.prepend(15); // Linked list becomes: 15 -> 16 -> 10 -> 5

// Displaying the linked list structure
// console.log(myLinkedList);
myLinkedList.insert(1, 1);
myLinkedList.insert(4,11);
myLinkedList.remove(3);
myLinkedList.remove(0);
// console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.length);
