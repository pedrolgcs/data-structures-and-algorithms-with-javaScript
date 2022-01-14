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
    if (index >= 0 && index < this.count) {
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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);

      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;

    for (let index = 0; index < this.count; index++) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      current = current.next;
    }

    return -1;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;

    let current = this.head.next;

    for (let index = 1; index < this.size(); index++) {
      objString = `${objString}, ${current.element}`;

      current = current.next;
    }

    return objString;
  }
}

export { LinkedList };
