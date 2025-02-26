// Class for a simple Singly Linked List
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
    if(index > this.length){
        return "No index found"
    }
    if(index === this.length){
        this.tail.next = null
    }
    let currentNode = this.head
    for(let i=0; i < index -1; i++){
        currentNode = currentNode.next
    }
    currentNode.next = null;
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
myLinkedList.remove(5);
console.log(myLinkedList);
console.log(myLinkedList.length);
