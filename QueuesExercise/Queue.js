const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0; //return true if it's empty, false if it's 1 or +
  }

  hasRoom() {
    return this.size < this.maxSize; //return true if the size is less than the maximum, false if not.
  }

  enqueue(data) {
    if (this.hasRoom()) { // use .hasRoom to check if there's space in the queue, if there is add to tail.
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    }
    else {
      throw new Error('Queue is full!');
    }
  }

  dequeue() {
    if (!this.isEmpty()) { //add is empty condition to follow the method just if it's not empty
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;