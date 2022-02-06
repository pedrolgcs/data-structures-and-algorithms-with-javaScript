import { Queue } from '../data-structures/queue/queue.js';

function hotPotato(elementList = [], num = Math.floor(Math.random() * 10) + 1) {
  const queue = new Queue();
  const eliminatedList = [];

  elementList.forEach((element) => queue.enqueue(element));

  while (queue.size() > 1) {
    // pass the potato
    for (let index = 0; index < num; index++) {
      const element = queue.dequeue();
      queue.enqueue(element);
    }

    // remove player
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.peek(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

const result = hotPotato(names);

console.log(`The winner is: ${result.winner}`);
