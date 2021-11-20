import { defaultEquals } from '../../shared/util.js';
import { Node } from '../../shared/models/linked-list-models.js';

class LinkedList {
  count;
  head;
  equalsFn;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      return current;
    }

    return undefined;
  }

  push(element) {
    let current;

    const node = new Node(element);

    if (this.head == undefined) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index = 0) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);

        current = previous.next;

        previous.next = current.next;
      }

      this.count--;

      return current.element;
    }

    return undefined;
  }
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list.count)

list.removeAt();

console.log(JSON.stringify(list.head));
