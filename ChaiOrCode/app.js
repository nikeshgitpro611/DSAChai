const { Stack, stack, selfStack } = require("./stack/index");

//Initialse stack
const myStack = new Stack();
const myStack_1 = new stack();
const myStack_emp = new stack();
const myStack_2 = new selfStack();


const start = () => {
  myStack.push(34);
  myStack_1.push(44);
  myStack_1.push(47);
  myStack_1.peek();
  myStack_emp.isEmpty(47);
  myStack_2.push(48);

  console.log("myStack_emp : ",   myStack_1.printStack());
};
start();
