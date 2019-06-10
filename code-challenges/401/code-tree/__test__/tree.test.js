'use strict';

const tree = require ('../tree');

describe ('tree methods test', () => {

    it ('prints tree nodes as expected', () => {

        let tree = new Tree;

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

        expect(tree.preOrder()).toEqual(['a','b','c','d','e','f']);
        expect(tree.inOrder()).toEqual(['d','b','e','a','f','c']);
        expect(tree.postOrder()).toEqual(['d','e','b','f','c','a']);

    });

});
