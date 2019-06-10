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

let forTestingLL = new LinkedList();

forTestingLL.append(1);
forTestingLL.append(2);
forTestingLL.append(3);
forTestingLL.append(4);
forTestingLL.append(5);





function kthFromTheEnd (k) {

    let kArray = [];

    let current = this.head;

    while (current) {
        kArray.push(current.value);
        current = current.next;
    }

    return kArray[kArray.length - k];
}
