'use strict';

// requiring the linked list class
const LinkedList = require('../LinkedList.js');

// testing all the methods of the linked list class with jest
describe('LinkedList', () => {

    it(' create a new linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeDefined();
    });

    it('insert a new node at the head', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        expect(linkedList.head.value).toBe(2);
    });

    it(' append a new node at the end', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.head.next.next.value).toBe(2);
    });
  
    it('delete the first node', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.deleteFirstNode();
        expect(linkedList.head.value).toBe(1);
    });

    it(' delete the last node', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.deleteLastNode();
        expect(linkedList.head.next.value).toBe(1);
    });

    it(' get the size of the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        expect(linkedList.getSize()).toBe(2);
    });
    
});