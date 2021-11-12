import { Stack } from '../data-structures/stack/stack.js';

const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function baseConvert(convert, base = 2) {
  let number = convert;
  let rest;
  let parsedNumber = '';

  const stack = new Stack();

  if (base < 2 || base > 36) {
    return '';
  }

  while (number > 0) {
    rest = Math.floor(number % base);
    number = Math.floor(number / base);
    stack.push(rest);
  }

  while (!stack.isEmpty()) {
    parsedNumber += DIGITS[stack.pop()];
  }

  return parsedNumber;
}

const convertNumber = baseConvert(233);

console.log(convertNumber);
