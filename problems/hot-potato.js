import { Queue } from '../data-structures/queue/queue.js';

function hotPotato(elementList = [], num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let index = 0; index < elementList.length; index++) {
    queue.enqueue(elementList[index]);
  }

  while (queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      const element = queue.dequeue();
      queue.enqueue(element);
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

const result = hotPotato(names, 5);

console.log(`The winner is: ${result.winner}`);
