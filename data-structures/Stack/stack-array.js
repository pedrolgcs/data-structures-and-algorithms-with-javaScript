class Stack {
  items;

  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const lastPosition = this.items.length - 1;
    return this.items[lastPosition];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// ----------------- x -----------------

const stack = new Stack();

console.log('empty:', stack.isEmpty());

stack.push(1);
stack.push(2);

console.log('last element:', stack.peek());

stack.push(3);

console.log('size:', stack.size());
console.log('empty:', stack.isEmpty());

stack.push(4);

stack.pop();
stack.pop();

console.log('size:', stack.size());
