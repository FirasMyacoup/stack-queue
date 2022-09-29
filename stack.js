'use strict';

const LinkedList = require('./LinkedList.js');

class Stack {
    constructor() {
        this.storage = new LinkedList();
        this.top = null;
    }

    push(value) {
        this.storage.insert(value);
        this.top = this.storage.head;
    }

    pop() {
            const popped = this.top.value;
            this.storage.deleteLastNode();
            this.top = this.storage.head;
            return popped;
    }

    peek() {
        return this.top;
    }

    isEmpty() {
        return this.storage.getSize() === 0;
    }
}

module.exports = Stack;