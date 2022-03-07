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

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      values.push(this.items[key]);
    }
    return values;
  }

  union(otherSet) {
    const unionSet = new MySet();
    let values = this.values();
    values.forEach((value) => unionSet.add(value));
    values = otherSet.values();
    values.forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new MySet();

    const values = this.values();
    const otherValues = otherSet.values();

    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherSet.size() > this.size()) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new MySet();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    return this.values().every((value) => otherSet.has(value));
  }
}

export { MySet };
