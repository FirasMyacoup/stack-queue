'use strict';

const LinkedList = require('./LinkedList.js');

class Queue {
    constructor() {
        this.storage = new LinkedList();
        this.front = null;
    }

    enqueue(value) {
        this.storage.append(value);
        if(!this.front) {
            this.front = this.storage.head;
        }
    }

    dequeue() {
        if(!this.front) {
            return null;
        } else {
            const dequeued = this.front.value;
            this.storage.deleteFirstNode();
            this.front = this.storage.head;
            return dequeued;
        }
    }

    peek() {
        return this.front;
    }

    isEmpty() {
        return this.storage.getSize() === 0;
    }
}

module.exports = Queue;