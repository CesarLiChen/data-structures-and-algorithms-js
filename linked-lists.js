class LinkedListNode {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if(!this.tail) this.tail = newNode;
    }
}

const ll = new LinkedList();
ll.prepend(7);
ll.prepend(1);

console.log(ll);