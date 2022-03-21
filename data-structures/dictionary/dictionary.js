import { defaultToString } from '../../shared/util.js';
import { ValuePair } from '../../shared/models/value-pair.js';

class Dictionary {
  toStrFn;
  table;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    if (valuePair != null) {
      return valuePair.value;
    }
    return undefined;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    const keys = Object.keys(this.table);
    return keys;
  }

  values() {
    const values = this.keyValues().map((valuePair) => valuePair.value);
    return values;
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();

    valuePairs.forEach((item) => {
      const result = callbackFn(item.key, item.value);
      if (result === false) {
        return false;
      }
    });
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    const objString = valuePairs
      .map((valuePair) => valuePair.toString())
      .join(',');

    return objString;
  }
}

const dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

export { Dictionary };
