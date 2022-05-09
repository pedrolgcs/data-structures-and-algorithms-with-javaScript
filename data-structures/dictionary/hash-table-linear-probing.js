import { defaultToString } from '../../shared/util.js';
import { ValuePair } from '../../shared/models/value-pair.js';
import { HashTableSeparateChaining } from './hash-Table-separate-chaining.js';

class HashTableLinearProbing extends HashTableSeparateChaining {
  constructor() {
    super();
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }

      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        Reflect.deleteProperty(this.table, position);
        this.verifyRemoveSideEffect(position);
        return true;
      }

      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key === key) {
        Reflect.deleteProperty(this.table, index);
        this.verifyRemoveSideEffect(index);
        return true;
      }
    }
    return false;
  }

  verifyRemoveSideEffect(removedPositionHash) {
    let nextIndex = removedPositionHash + 1;

    while (this.table[nextIndex] != null) {
      const hash = this.hashCode(this.table[nextIndex].key);

      if (hash <= removedPositionHash) {
        this.table[removedPositionHash] = this.table[nextIndex];
        Reflect.deleteProperty(this.table, nextIndex);
        removedPositionHash = nextIndex;
      }
      nextIndex++;
    }
  }

  size() {
    return Object.keys(this.table).length;
  }
}

const hash = new HashTableLinearProbing();

hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Gandalf', 'white@email.com');
hash.put('Dragon', 'red@email.com');

console.log(hash.table);

hash.remove('Jamie');

console.log(hash.table);

export { HashTableLinearProbing };
