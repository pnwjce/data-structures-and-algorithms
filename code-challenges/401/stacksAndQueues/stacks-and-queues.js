'use strict';

class Node {

    constructor (value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {

    constructor () {
        this.top = null;
    }

    push (value) {
        let newNext = this.top;
        let newTop = new Node(value);
        newNext = this.top;
        this.top.next = newNext;
    }

    pop () {
        let popMe = this.top.value;
        this.top = this.top.next;
        return popMe;
    }

    peek () {
        return this.top.value;
    }


};

class Queue {

    constructor () {
        this.front = null;
        this.rear = null;
    }

    enqueue (value) {
        let node = new Node(value);

        if (this.rear === null) {
            this.front = node;
            this.rear = node;
        }

        else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue () {
        let dequeued = this.front.value;
        this.front = this.front.next;
        return dequeued;
    }

    peek () {
        return this.front.value;
    }
}

modules.exports = { Stack, Queue };

