const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (set1, set2) => {
  const unionAb = new Set();
  set1.forEach((value) => unionAb.add(value));
  set2.forEach((value) => unionAb.add(value));
  return unionAb;
};

console.log('union', union(setA, setB));

const intersection = (set1, set2) => {
  const intersectionSet = new Set();
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};

console.log('intersection', intersection(setA, setB));

const difference = (set1, set2) => {
  const differenceSet = new Set();
  set1.forEach((value) => {
    if (!set2.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};

console.log('difference', difference(setA, setB));
