//Closer

// const outerFn =(x) => {
//     return inners = (y)=>{
//         console.log(x + y);
//         return x + y;
//     }
// };
// const results = outerFn(6);
// results(7)

//Closer 2

// const getVal = (x) => {
//     let score =  x;
//     return () => ++score
// };

// const getRes = getVal(12)// getRes Storing Reff value  of return function
// console.log('GetVal : ', getRes());//13
// console.log('GetVal : ', getRes());//14
// console.log('GetVal : ', getRes());//15

//Closer-3

// const loadBalencer = () => {
//     let balVal = 100;
//     const funBalncer = () => {
//         const valIn = ++balVal
//         return valIn
//     }

//     return { funBalncer }
// };

// const balRef = loadBalencer();
// console.log(balRef.funBalncer());//101
// console.log(balRef.funBalncer());//102 Increase Bcz reff val has been stored in variable
// console.log(loadBalencer().funBalncer());//101 Bcz start from initial postion

// -----This---
// function thisFun() {
//     console.log(this);
// }

// const obj = {
//     thisFun,
// }
// thisFun();
// obj.thisFun()

// const thisArrr = () => {
// console.log('this', this);
// }

// let obj2 = {
//     thisArrr,
// }
// thisArrr()
// obj2.thisArrr()

// ----------Call-------

// const person = {
//     name: 'Nikson',
//     age: 23
// }

// function contextFn(hobby1, hobby2) {
//     console.log("Test : ", this.name);
//     const ValPass = `hey i am ${this.name} and age ${this.age} i like to play ${hobby1} and ${hobby2}`
//     console.log('VallPass : ', ValPass);
// };

// contextFn.call(person, 'Cricket', 'chess') //person is context 
// contextFn.apply(person, ['footbal', 'less']) //person is context 
// const Assign = contextFn.bind(person, 'test') 
//  Assign('jolly');