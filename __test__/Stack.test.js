'use strict';

const Stack = require('../Stack.js');

describe('Stack', () => {

    it(' create a new stack', () => {
        const stack = new Stack();
        expect(stack).toBeDefined();
    });

    it(' push a new node at the head', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.peek().value).toBe(3);
    });

    it(' pop a node from the head', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(3);
    });

    it(' peek the head node', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.peek().value).toBe(3);
    });

    it(' check if the stack is empty or not', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.isEmpty()).toBe(false);
    });

});