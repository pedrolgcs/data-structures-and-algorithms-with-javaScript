class Stack {
  #items;
  #count;

  constructor() {
    this.#count = 0;
    this.#items = {};
  }

  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.#count--;

    const result = this.#items[this.#count];

    delete this.#items[this.#count];

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastPosition = this.#count - 1;

    return this.#items[lastPosition];
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const items = Object.values(this.#items).toString();

    return items;
  }
}

export { Stack };
