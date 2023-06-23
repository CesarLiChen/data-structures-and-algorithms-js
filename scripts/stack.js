class Stack {
    constructor() {
        this.ll = new LinkedList();
    }    

    push(value) {
        this.ll.prepend(value);
    }

    pop() {
        return this.ll.removeFirst();
    }

    peek() {
        return this.ll.first;
    }

    toString() {
        return this.ll;
    }
}

const myStack = new Stack();
myStack.push(3);
myStack.push(10);
myStack.push(24);
console.log(myStack.pop());
console.log(myStack.peek());

console.log(myStack.toString());
