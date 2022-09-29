'use strict';

const Node = require('../Node');

describe('Node class', () => {
    it('should create a new node', () => {
        let node = new Node(5);
        expect(node.value).toEqual(5);
        expect(node.next).toEqual(null);
    });
} );

