class MySet {
  items;

  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    const elementExists = this.has(element);
    if (elementExists) {
      return false;
    }
    this.items[element] = element;
    return true;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }
}

export { MySet };
