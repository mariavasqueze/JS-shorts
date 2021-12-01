// Recursive solution to a Linked List 

const Node = require('./Node');
const LinkedList = require('./LinkedList');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

//Find node
const myNodeRecursive = myList.findNodeIteratively('Node 2');
console.log(myNodeRecursive);