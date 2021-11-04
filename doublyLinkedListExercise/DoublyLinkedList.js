const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Add to head - doubled linked 
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  
  // Add to tail - doubled linked 
  addToTail(data){
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail){
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head){
      this.head = newTail;
    }
  }

  // Remove head - doubled linked 
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head){
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }
  
  // Remove tail - doubled linked 
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  
  // Remove an element that's anywhere on the list
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
   if (nodeToRemove === this.head) {
     this.removeHead();
   }
   else if (nodeToRemove === this.tail) {
     this.removeTail();
   }
   // remove the pointers to and from nodeToRemove and have nextNode and previousNode point to each other. 
   else { 
     const nextNode = nodeToRemove.getNextNode();
     const previousNode = nodeToRemove.getPreviousNode();
     nextNode.setPreviousNode(previousNode);
     previousNode.setNextNode(nextNode);
   }
   return nodeToRemove;
  }

  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;