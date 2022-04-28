import { LinkedList } from '../linkedList/linked-list.js';
import { defaultToString } from '../../shared/util.js';
import { ValuePair } from '../../shared/models/value-pair.js';

class HashTableSeparateChaining {
  toStrFn;
  table;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  #loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  #hashCode(key) {
    return this.#loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.#hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.#hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      do {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      } while (current != null);
    }
    return undefined;
  }

  remove(key) {
    const position = this.#hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      do {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            Reflect.deleteProperty(this.table, position);
          }
          return true;
        }
        current = current.next;
      } while (current !== null);
    }
    return false;
  }

  toString() {
    if (this.table.length === 0) {
      return '';
    }

    const keys = Object.keys(this.table);

    return keys.map((key) => {
      return `${key} => ${this.table[key]}`;
    }).join(', \n');
  }
}

const hash = new HashTableSeparateChaining();

hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Gandalf', 'white@email.com');
hash.put('Dragon', 'red@email.com');
hash.remove('Jamie');

console.log(hash.toString());

export { HashTableSeparateChaining };
