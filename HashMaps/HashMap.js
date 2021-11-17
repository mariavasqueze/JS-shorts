// Build your own implementation of a HashMap class (more instructions on daa structures doc.)
const LinkedList = require('./LinkedList');
const Node = require('./Node');
// Create an array filled with null whenever you're creating a HashMap instance
class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
    // Hashing function (takes key as input, returns index within the array)
    hash(key){
        let hashCode = 0;
        for (let i = 0; i < key.length; i++){
        hashCode += hashCode + key.charCodeAt(i); //add += to avoid generating duplicate hashCodes if keys have the same values
        }
        // return compressed hashcode (so it's in the bounds of the hash map's array), 
        return hashCode % this.hashmap.length;
      }
    
    //Assign the value of the index we generated
    assign(key, value) {
        const arrayIndex = this.hash(key);
        //Implement collision strategy
        const linkedList = this.hashmap[arrayIndex];
        if (linkedList.head === null) {
          linkedList.addToHead({ key, value });
          return;
        } 
        let current = linkedList.head;
        while (current) { //iterate over linkedlist to find tail while current is NOT null
          if (current.data.key === key) {
            current.data = {key, value}; //if key is equal, overwrite with key and value we want to store. 
          }
          if (!current.getNextNode()) { //if current node is the tail node, if it is, set node after current to new node
            const newNode = new Node({key, value});
            current.setNextNode(newNode);
            break;
          }
          current = current.next; //if not the end, keep looping
        }
      }
    // Retrieve value we are storing 
    retrieve(key){
        const arrayIndex = this.hash(key); //calculate index
        let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      current = current.next;
    }
    return null;
    }
  }

  module.exports = HashMap;