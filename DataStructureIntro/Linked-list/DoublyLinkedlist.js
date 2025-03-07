class node {
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
        
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    length = 0;
    addFirst(data) {
       const newNode = new node(data);
       if(!this.head){
        this.head = newNode;
        newNode.prev = null;
        newNode.next = this.tail;
        this.length ++;
        return;
       }
    }
}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.addFirst(5);
console.log(myDoublyLinkedList);