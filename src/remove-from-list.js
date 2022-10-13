const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(l, k) {
  console.log("s1 ", l, k);
  let temp = l;
  let head = l;
  let prev = null;

  // while (temp) {
  //   const value = temp.value;
  //   if (value === k && head === l) {
  //     l = temp.next;
  //     temp = l;
  //     console.log("value === k && head === l", l, temp, head, prev);
  //   } else if (value === k && temp.next === null && prev) {
  //     prev.next = null;
  //     temp = null;

  //     console.log(
  //       "value === k && temp.next === null && prev",
  //       l,
  //       temp,
  //       head,
  //       prev
  //     );
  //   } else if (value === k && head !== l && temp.next !== null && prev) {
  //     prev.next = temp.next;
  //     console.log(
  //       "value === k && head !== l && temp.next !== null && prev",
  //       l,
  //       temp,
  //       head,
  //       prev
  //   } else {
  //     prev = temp;
  //     temp = temp.next;
  //     console.log("elses", l, temp, head, prev);
  //   }
  // }
  console.log("s", l);
  return l;
}

console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3));

module.exports = {
  removeKFromList,
};
