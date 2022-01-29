import { LinkedList } from './linked-list.js';
import { defaultEquals } from '../../shared/util.js';

const COMPARE = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === COMPARE.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }

  insert(element) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const position = this.getIndexNextSortedElement(element);
    return super.insert(element, position);
  }
}

export { SortedLinkedList };