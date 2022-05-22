import { Compare, defaultCompare } from '../../shared/util.js';
import { Node } from '../../shared/models/node';

class BinarySearchTree {
  root;
  compareFn;

  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
}

export { BinarySearchTree };
