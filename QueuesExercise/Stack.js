// Same principles as for Queues, but methods name change 

const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  // Chek if there is space
  hasRoom() {
    return this.size < this.maxSize;
  }
  
  isEmpty() {
    return this.size === 0;
  }

  //To add an element to the top
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  //To remove an element from the top
  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

}

module.exports = Stack;

/* Exercise that might help later: 
// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);
// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 1; i < 7; i++) {
  pizzaStack.push('Pizza #' + i);
}
// 3. Peek at the pizza on the top of stack and log its value
console.log(`The first pizza to deliver is ${pizzaStack.peek()}`);

// 5. Deliver all the pizzas from the top of the stack down
for (let i = 0; i < 6; i++) {
  pizzaStack.pop();
}
*/