class Stack {
  #items;

  constructor() {
    this.#items = [];
  }

  push(element) {
    return this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    const lastPosition = this.#items.length - 1;
    return this.#items[lastPosition];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }
}

// ----------------- x -----------------

export { Stack };
