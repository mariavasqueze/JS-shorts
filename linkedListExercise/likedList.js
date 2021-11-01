const Node = require('./Node'); //for the set and get next node methods

class LinkedList {
  
  constructor() {
    this.head = null;
  }
//add node to head
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
// add node to tail
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data); //if no tail adds to head
    } else {
      while (tail.getNextNode() !== null) { //otherwise it iterates through the array and find the end
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
//remove node from head 
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data; //return removeHead's data
  }

// print data while maintining order of list
//string that contains the data of every node in the list
  printList(){
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode){
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output = output + '<tail>';
    console.log(output);
  }
}
// remove node from tail  


// Always keep this 
module.exports = LinkedList;