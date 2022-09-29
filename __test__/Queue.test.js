'use strict';

const Queue = require('../Queue.js');

describe('Queue', () => {

    it(' create a new queue', () => {
        const queue = new Queue();
        expect(queue).toBeDefined();
    });

    it(' enqueue a new node at the end of the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2)
        expect(queue.peek().value).toBe(1);
    });

    it(' dequeue the first node in the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
    });

    it(' peek the first node in the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek().value).toBe(1);
    });

    it(' check if the queue is empty or not', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.isEmpty()).toBe(false);
    });
} );
