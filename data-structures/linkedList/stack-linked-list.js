import { DoublyLinkedList } from './doubly-linked-list.js';

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.insert(element, this.size());
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.getElementAt(this.size() - 1);
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  toString() {
    return this.items.toString();
  }
}

export { StackLinkedList };
