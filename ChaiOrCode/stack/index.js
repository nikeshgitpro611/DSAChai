//Stack
class stack {
    //The constructor method is a special method that is called when a new instance of the class is created.

    constructor() {
        //this.stack = []; initializes an empty array named stack as a property of the class instance. This array will hold the elements of the stack.
        this.stack = []
    }

    push(data) {
        this.stack.push(data)
    }
    pop(data) {
        this.stack.pop(data)
    }
    //Task Design peak vale in stack(total value)
    peek() {
        return this.stack[this.stack.length - 1]
    }

    //Task Return stack is empty or not
    isEmpty() {
        return this.stack.length === 0
    }

    //find Stack size
    size() {
        return this.stack.length
    }
    //Destroy all value from stack
    clear() {
        return this.stack = []
    }
    //Task Creat Cotain method and check element exist in stack or not 
    contain(element) {
        return this.stack.includes(element)
    }

    //Reverst all stack method
    revers(element) {
        return this.stack.reverse(element)
    }
    printStack() {
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            const element = this.stack[i];
            str += element + "\n"
            return str;
        }
    }
}

//For print all

const myStack = new stack();

myStack.push(20)
myStack.push(22)
myStack.push(204)
console.log('MyStack : ', myStack);
console.log('AllPrint : ', myStack.printStack());
