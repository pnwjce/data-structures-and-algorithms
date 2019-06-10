'use strict';

class Node {

    constructor (value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

    constructor() {

        this.head = null;
    }

    append (value) {

        const newVal = new Node(value);

        while (current.next) {
            current = current.next;
            current.next = newVal;
        }
    }

}

let LL1 = new LinkedList();

LL1.append(1);
LL1.append(3);
LL1.append(5);
LL1.append(7);
LL1.append(9);

let LL2 = new LinkedList();

LL2.append(2);
LL2.append(4);
LL2.append(6);
LL2.append(8);
LL2.append(10);


function mergeLists (LL1, LL2) {
    let current1 = LL1.head;
    let current2 = LL2.head;

    while (current1.next) {
        let temp1 = current1.next;
        let temp2 = current2.next;

        current1.next = current2;
        current1.next.next = temp1;

        current1 = current1.next.next;
        current2 = temp2;
    }

    return LL1;
}
