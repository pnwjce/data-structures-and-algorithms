'use strict';

class Node {

    constructor (value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

    constructor () {

        this.head = null;
    }

    append (value) {

        const newVal = new Node(value);

        while (current.next) {
            current = current.next;
            current.next = newVal;
        }
    }

    insertBefore (value, newVal) {

        const newNode = new Node(newVal);

        let current = this.head;

        if (current.value === value) {
            newNode.next = current;
            this.head = newNode;
        }

        else {
            current = current.next;
        }

    }

    insertAfter (value, newVal) {

        const newNode = new Node(value);

        let current = this.head;

        if (current.value === value) {
            let newNext = current.next;
            current.next = newNode;
            current.next.next = newNext;
        }

        else {
            current = current.next;
        }

    }
}