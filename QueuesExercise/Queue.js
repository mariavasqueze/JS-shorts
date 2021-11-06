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
    this.queue.addToTail(data);
    this.size++;
    console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
  }

  dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
    return data;
  }
}

module.exports = Queue;