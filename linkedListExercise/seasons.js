// add and take items from the linkedlist

const LinkedList = require('./LinkedList');

const seasons = new LinkedList();

//add to head
seasons.addToHead('summer');
seasons.addToHead('spring');

//add to tail
seasons.addToTail('fall');
seasons.addToTail('winter');

//remove from head
seasons.removeHead();

//print list
seasons.printList();   // prints: <head> summer fall winter <tail>


