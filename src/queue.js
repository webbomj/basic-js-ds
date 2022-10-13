const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  queue = [];

  getUnderlyingList() {
    let list = this.queue;

    console.log(list);
    return list;
  }

  enqueue(el) {
    this.queue.push(el);
    return this;
  }

  dequeue() {
    return this.queue.shift();
  }
}

console.log(new Queue().enqueue(1).enqueue(3).getUnderlyingList());

module.exports = {
  Queue,
};
