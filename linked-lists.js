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

    removeFirst() {
        const nodeToRemove = this.head;
        if(this.tail === this.head) this.tail = null;
        if(this.head) {
            this.head = nodeToRemove.next;
            nodeToRemove.next = null;           
        }
        return nodeToRemove ? nodeToRemove.value : null;
    }

    remove(value) {
        if(this.head) {
            if(this.head.value === value) {
                this.removeFirst();
            } else {

                let previousNode = this.head;
                let currentNode = previousNode.next;
                while(currentNode && currentNode.value !== value) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;                    
                }
                if(currentNode) {
                    previousNode.next = currentNode.next;
                    currentNode.next = null;
                    if(currentNode === this.tail) this.tail = previousNode;
                }
            }
        }
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
ll.append(5);
ll.append(201);
ll.append(42);

ll.remove(5);

console.log(ll);
console.log(ll.first, ll.last);