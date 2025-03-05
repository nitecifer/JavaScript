// Higher order arrays

const numbers = [1, 2, 3, 4, 5, 6, 7];
  

// function double(n) {
//     return n * 2;

// }
// let newArr = numbers.map(double);


// console.log(newArr);

// let ans = numbers.findIndex((num) => num === 4)

// console.log(numbers[ans])

// const newArr = numbers.filter((num) => num % 2 == 0)


// console.log(newArr)

let newArr = numbers.slice(1, 3)
let newarr = numbers.splice(1, 5)

console.log(newarr)
console.log(newArr)
console.log(numbers)