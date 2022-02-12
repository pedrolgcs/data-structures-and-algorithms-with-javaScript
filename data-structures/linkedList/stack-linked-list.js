import { DoublyLinkedList } from './doubly-linked-list.js';

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.isEmpty()) {
      return undefined;
    }

    return this.items.removeAt(this.items.size() - 1);
  }

  peek() {
    if (this.items.isEmpty()) {
      return undefined;
    }

    return this.items.getElementAt(this.items.size() - 1);
  }
}

export { StackLinkedList };
