> # Reverse Integer
>
> **Q//** Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

```
// 'hello' -> 'olleh'
let text = 'hello'

const reverseString = (str) => {
    let x = 0;
    let l = str.length - 1;
    let arr = str.split("")
    console.log('l l: ', arr)
    while (x < 2) {
        [arr[x], arr[l]] = [arr[l], arr[x]]
        x++
        l--
    }

    return arr.join('')
 };

let k = reverseString(text);
console.log('KK : ', k)
```

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

- Q ) how we will swap number
a= 10; b=20
output a= 20 b = 10

destructured method
[a,b] = [b,a]

``` 

> # Duplicate Array

> **Q//** Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums..

```
const duplicatRemoved = (arr) => {
  if (arr.length === 0) return 0;
  let num = 0;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[num]) {
      num++;
      arr[num] = arr[i];
    }
  }
  return num + 1;
};

let num = [-1, -2, 0, 9, 9, 2, 3, 4, 5, 5, 6, 6, 7, 7];
console.log(duplicatRemoved(num));
console.log(num.slice(0, num.length));
```

> # Remove Element
>
> Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

```
let nums =  [0,1,2,2,3,0,4,2]
let val = 2
output = [0,1,3,0,4]
```

> # move element

- Example: [0,1,0,3,12] → [1,3,12,0,0]

```
const shiftValue = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[x]) {
            [arr[x],arr[i]] =[ arr[i], arr[x]]
            x++;
        }
    }
    return x
}
let k = shiftValue(nums)
console.log(nums.slice(0,k))
console.log(nums)
```

> # Remove Duplicates from Sorted Array (if duplicate more then 2 then re-moved)

- Example: [1,1,1,2,2,3] → [1,1,2,2,3]

```
const removeMoreThenTwo = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if (x < 1 || arr[i] !== arr[x - 2]) {
            console.log('j', x)
            arr[x] = arr[i]
            x++
        }
    }
    return x
 };
const k = removeMoreThenTwo(arr);
console.log('k : ', k)
console.log('result : ', arr.slice(0, k))
```
> # Best Time to Buy and Sell Stock

ou are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
```
// const prices = [7, 1, 5, 3, 6, 4]
const prices = [7, 6, 4, 3, 1]

const findMixProfit = (arr) => {
    let minprice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < arr.length; i++){
        minprice = Math.min(minprice, arr[i])
        maxProfit = Math.max(maxProfit, arr[i] -  minprice )
    }
    return maxProfit;
}

console.log('Data : ',  findMixProfit(prices))

or

const findMixProfit = (arr) => {
    let minprice = prices[0]; //7
    let maxProfit = 0;//4
    for (let i = 1; i < arr.length; i++){
        if (arr[i] - minprice > maxProfit) {
            maxProfit = arr[i] - minprice
            
        }
       
        if (arr[i] < minprice) {
            minprice = arr[i] 
            console.log('MaxProfit : ', maxProfit)
        }
    }
    return maxProfit;
}

```