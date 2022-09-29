'use strict';

const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
        node.next = this.head;
        this.head = node;
        }
        this.size += 1;
    }

    append(value) {
        let node = new Node(value);
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;

        }
        this.size += 1;
    }

    deleteLastNode() {
        let current = this.head;
        let previous = null;
        while(current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size -= 1;
    }

    deleteFirstNode() {
        if(!this.head) {
            return null;
        } else {
            this.head = this.head.next;
            this.size -= 1;
        }
    }
    
}

module.exports = LinkedList;