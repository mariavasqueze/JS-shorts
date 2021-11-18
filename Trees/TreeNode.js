// Build a tree with add, remove, print ... methods

class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
    //add child (accepts data in several forms)
    addChild(child) {
        if (child instanceof TreeNode) {
        this.children.push(child);
        } else {
        this.children.push(new TreeNode(child)); //if not instaceof TreeNode create a new one before adding it to the children array
        }
    }
    removeChild(childToRemove) {
        const length = this.children.length;
        this.children = this.children.filter(child => {
          if (childToRemove instanceof TreeNode) {
            return childToRemove !== child;
          } else {
            return child.data !== childToRemove;
          }
        });
        //check if length it's still the same, if same call remove child for each of the children array
        if (length === this.children.length) {
          this.children.forEach(child => child.removeChild(childToRemove));
        }
      }
      //pretty print
      print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
          result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
      }

      //Depth-first tree traveral, to print by depth. see doc.
      depthFirstTraversal() {
        console.log(this.data); //display data of current node
        //call depthtraversal recursively for each child in the children array
        this.children.forEach(child => child.depthFirstTraversal());
      }

      //Breadth-first Tree Traversal, prints al elements of one level, then goes to next
      breadthFirstTraversal() {
        let queue = [ this ];
        while (queue.length > 0) { 
          const current = queue.shift(); // Get first element, so we can display data afterwards. 
          console.log(current.data);
          queue = queue.concat(current.children); //use concat to merge two arrays
        }
      }
  };
  
  module.exports = TreeNode;