'use strict';

class Node {

    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
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

function fizzBuzzTree (BinaryTree) {

    let nodes = [];

    let node = BinaryTree.root;

    if (node === null) {
        return null;
    }



    if (node.left !=null) {
        _walk(node.left);
    }

    if (node.value % 3 === 0) {
        node.value = 'fizz';
    }

    if (node.value % 5 === 0) {
        node.value = 'buzz';
    }

    if (node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'fizzbuzz';
    }

    if (node.right !=null) {
        _walk(node.right);
    }

    _walk(node);

    return nodes;
}