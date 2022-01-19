import { LinkedList } from './linked-list.js';
import { Node } from '../../shared/models/linked-list-models.js';
import { defaultEquals } from '../../shared/util.js';

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = current;
          const lastItem = this.getElementAt(this.size() - 1);
          this.head = node;
          lastItem.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
}

const list = new CircularLinkedList();

list.insert(1, 0);
list.insert(2, 1);

console.log(list.toString());

export { CircularLinkedList };
