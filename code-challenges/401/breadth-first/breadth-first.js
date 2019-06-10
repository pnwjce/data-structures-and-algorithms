'use strict';

class Node {

    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

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


class BinaryTree {

    constructor () {
        this.root = null;
    }

    preOrder () {

        let nodes = [];

        function _walk (node) {

            nodes.push(node.value);

            _walk(this.root);

            if (node.left) {
                _walk(node.left);
            }

            if (node.right) {
                _walk(node.right);
            }

            return nodes;

        }

    }

    inOrder () {

        let nodes = [];

        function _walk (node) {

            nodes.push(node.value);


            if (node.left) {
                _walk(node.left);
            }

            _walk(this.root);

            if (node.right) {
                _walk(node.right);
            }

            return nodes;

        }

    }

    postOrder () {

        let nodes = [];

        function _walk (node) {

            nodes.push(node.value);


            if (node.left) {
                _walk(node.left);
            }


            if (node.right) {
                _walk(node.right);
            }

            _walk(this.root);

            return nodes;

        }

    }

}

let tree = new BinaryTree;

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

tree.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

function breadthFirst (tree) {
    let arrayBT = [];
    let q = new Queue;
    q.enqueue(this.root);
    while (q.peek()) {
        arrayBT.push(q.front.value);
        if (q.front.left) {
            q.enqueue(q.front.left);
        }
        if (q.front.right) {
            q.enqueue(q.front.right);
        }
        q.dequeue(q.front);
    }
    return arrayBT;

};