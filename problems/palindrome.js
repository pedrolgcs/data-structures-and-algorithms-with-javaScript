import { Deque } from '../data-structures/deque/deque.js';
import { Stack } from '../data-structures/stack/stack.js';

function palindromeChecker(word = '') {
  let firstChar, lastChar;
  let isEqual = true;

  if (
    word === undefined ||
    word === null ||
    (word !== null && word.length === 0)
  ) {
    return false;
  }

  const deque = new Deque();

  const lowerString = word.toLocaleLowerCase().split(' ').join('');

  const lowerStringLength = lowerString.length;

  for (let i = 0; i < lowerStringLength; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

function palindromeCheckerWithStack(word = '') {
  let isEqual = true;
  let reverseWordStack = [];

  if (
    word === undefined ||
    word === null ||
    (word !== null && word.length === 0)
  ) {
    return false;
  }

  const stack = new Stack();

  const lowerString = word.toLocaleLowerCase().split(' ').join('');

  for (let i = 0; i < lowerString.length; i++) {
    stack.push(lowerString.charAt(i));
  }

  while (stack.size() > 0) {
    reverseWordStack.push(stack.pop());
  }

  const reverseWord = reverseWordStack.join('');

  if (word !== reverseWord) {
    return false;
  }

  return isEqual;
}

console.log('arara', palindromeChecker('arara'));
console.log('ovo', palindromeChecker('ovo'));
console.log('pedro', palindromeCheckerWithStack('pedro'));
