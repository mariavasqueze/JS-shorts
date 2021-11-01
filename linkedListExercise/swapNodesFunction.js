const LinkedList = require('./LinkedList.js')

const testList = new LinkedList();  //iterating through list of 1 to 10 
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5); // swap numbers 2 and 5 
testList.printList();

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);
  
  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log('Elements are the same - no swap to be made');
    return;
  }
  
  while (node1 !== null) {
    if (node1.data === data1) { 
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
  
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  
  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list');
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) { 
    list.head = node1;
  } else {
node2Prev.setNextNode(node1);
  }
  
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp); 
}

/* steps being followed here: 
- Iterate through the list looking for the node that matches data1 to be swapped (node1), keeping track of the node’s previous node as you iterate (node1Prev)
- Repeat step 1 looking for the node that matches data2 (giving you node2 and node2Prev)
- If node1Prev is null, node1 was the head of the list, so set the list’s head to node2
- Otherwise, set node1Prev‘s next node to node2
- If node2Prev is null, set the list’s head to node1
- Otherwise, set node2Prev‘s next node to node1
- Set node1‘s next node to node2‘s next node
- Set node2‘s next node to node1‘s next node
*/