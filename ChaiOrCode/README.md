> # EVENT LOOP
- We know that JavaScript is a single-threaded language, but the UI does not get stuck because its behavior is asynchronous and non-blocking. The event loop monitors everything in the call stack and tasks. First, it checks the microtask queue and then the task queue. If anything is present, it will be executed in the call stack. This process is known as asynchronous behavior.
- Here we have container - 
01. call stack -  
02. web API/Browser API, 
03. macro Task Que/task Queue,
04. micro task  

> # Hoisting and Temporary Ded Zone
- We know that JavaScript prepares memory (this phase is called hoisting) first and then executes the code. During preparation, JavaScript will scan your code, and the references for your declarations (functions, let, const, and var) will be stored in memory.

Q// How to memory declration
Ans - 
01. function - A function only stores as a reference to its location in memory.
02. Let, const - Memory stores Uninitialized.
03. Var - undefined memory stores.
# Some cases of Declration
- case-1 : Access Function before decleration then no Issue
- case-2 : Access Var before decleration then undefine
- case-1 : Access Let/const before decleration then Error will be come Reffrance Error
# Temporary Ded Zone
- useing variable and function before actual decleration is called .

> # SCOPE AND SCOPE CHAIN
- It only defines the accessibility range, which may be at the function level, window level, or global level.
- Three type of Scope: 
01. Global Scope
02. Local Scope
03. 