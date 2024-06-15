//Closer 
const outerFn =(x) => {
    return inners = (y)=>{
        console.log(x + y);
        return x + y;
    }
};
const results = outerFn(6);
results(7)
//Closer 2
const getVal = (x) => {
    let score =  x;
    return () => ++score
};

const getRes = getVal(12)// getRes Storing Reff value  of return function
console.log('GetVal : ', getRes());//13
console.log('GetVal : ', getRes());//14
console.log('GetVal : ', getRes());//15