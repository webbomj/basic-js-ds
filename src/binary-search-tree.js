const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  arr = [];

  root() {
    if (this.arr[0] === undefined) {
      return null;
    } else {
      return { data: this.arr[0] };
    }
  }

  add(data) {
    if (data !== undefined) {
      this.arr.push(data);
    }
  }

  has(data) {
    return this.arr.includes(data);
  }

  find(data) {
    if (this.has(data)) {
      return {
        data: data,
      };
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.has(data)) {
      this.arr = this.arr.filter((el) => el !== data);
    }
  }

  min() {
    return Math.min(...this.arr);
  }

  max() {
    return Math.max(...this.arr);
  }
}

module.exports = {
  BinarySearchTree,
};
