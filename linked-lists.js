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

    append(value) {
        const newNode = new LinkedListNode(value);
        if(this.tail) this.tail.next = newNode;
        if(!this.head) this.head = newNode;
        this.tail = newNode;
    }

    get first() {
        return this.head.value;
    }

    get last() {
        return this.tail.value;
    }
}

const ll = new LinkedList();
ll.prepend(7);
ll.append(20);
ll.prepend(1);

console.log(ll);
console.log(ll.first, ll.last);