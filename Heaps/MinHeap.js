// Creting a min-heap as exercise
class MinHeap {
    constructor() {
      this.heap = [ null ];
      this.size = 0;
    }

//Remove the min number, must move to end first
  popMin() {
    if (this.size === 0) {
      return null;
    }
    
    console.log(`\n.. Swap ${this.heap[1]} with last element ${this.heap[this.size]}`);
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    console.log(`.. Removed ${min} from heap`);
    console.log('..',this.heap);
    this.heapify();
    return min;
    
  }

  //Add elements into the heap array
    add(value) {
      this.heap.push(value);
      cthis.size++;
      this.bubbleUp(); //call method bubbleUp everytime you add
      console.log(`added ${value} to heap`, this.heap);
    }
  
  // Move smaller number up (for maintaining the heap conditions as we add additional elements)
  bubbleUp() {
    let current = this.size;
    while (current > 1 && this.heap[current] < this.heap[getParent(current)]) {
      console.log('parent and child elements will be swaped', this.heap);
      console.log(`Swap index ${current} with ${getParent(current)}`);
      this.swap(current, getParent(current));
      current = getParent(current);
    }
  }
  //Move smaller number up
  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);

    while (this.canSwap(current, leftChild, rightChild)) {
      while (this.canSwap(current, leftChild, rightChild)) {
      if (this.exists(leftChild) && this.exists(rightChild)) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(current, leftChild);
          current = leftChild;
        } else {
          this.swap(current, rightChild);
          current = rightChild;
        }        
      } else {
        this.swap(current, leftChild);
        current = leftChild;
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  //To check if child exixts for swap
  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;
