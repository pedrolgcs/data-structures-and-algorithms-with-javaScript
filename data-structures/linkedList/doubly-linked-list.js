import { DoublyNode } from '../../shared/models/linked-list-models.js';
import { defaultEquals } from '../../shared/util.js';
import { LinkedList } from './linked-list.js';

class DoublyLinkedList extends LinkedList {
  tail;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);
    let current = this.head;

    if (this.head == undefined) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      current.prev = node;
      this.head = node;
    }

    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.count--;
      return current.element;
    }
  }
}

const list = new DoublyLinkedList();

list.insert(1, 0);
list.insert(2, 1);
list.insert(3, 2);

console.dir(list.head, { depth: null });
