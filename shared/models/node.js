class Node {
  key;
  left;
  right;

  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.key}`;
  }
}

export { Node };
