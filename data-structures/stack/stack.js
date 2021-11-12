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
    // FIFO
    while (!this.isEmpty()) {
      this.pop();
    }

    // this.items = {};
    // this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const items = Object.values(this.#items).toString();

    return items;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.toString());
