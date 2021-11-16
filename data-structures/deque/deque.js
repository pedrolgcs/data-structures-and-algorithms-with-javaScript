class Deque {
  #count;
  #lowestCount;
  #items;

  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  addBack(element) {
    this.#items[this.#count] = element;

    this.#count++;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.#count--;

    const result = this.#items[this.#count];

    delete this.#items[this.#count];

    return result;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.#lowestCount > 0) {
      this.#lowestCount--;

      this.#items[this.#lowestCount] = element;
    } else {
      for (let index = this.#count; index > 0; index--) {
        this.#items[index] = this.#items[index - 1];
      }

      this.#lowestCount = 0;

      this.#items[0] = element;

      this.#count++;
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.#items[this.#lowestCount];

    delete this.#items[this.#lowestCount];

    this.#lowestCount++;

    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastPosition = this.#count - 1;

    return this.#items[lastPosition];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const result = {
      items: Object.values(this.#items).toString(),
      count: this.#count,
      lowestCount: this.#lowestCount,
    };

    return result;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowestCount = 0;
  }
}

export { Deque };
