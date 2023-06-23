class Queue {
    constructor() {
        this.ll = new LinkedList();
    }

    enqueue(value) {
        this.ll.append(value);
    }

    dequeue() {
        return this.ll.removeFirst();
    }

    peek() {
        return this.ll.first;
    }

    toString() {
        return this.ll;
    }
}

const q = new Queue();
q.enqueue(43);
q.enqueue(100);
q.enqueue(4);

console.log(q.dequeue());

console.log(q.toString());
