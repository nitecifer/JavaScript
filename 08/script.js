// // arrow function

// // 1. Syntax
// const sayHello = () => {
//     console.log("Heyy");
// };


// const add = (a , b) => {
//     return a + b;
// };

// const addV2 = (a, b) => a + b ;
// console.log(addV2(2 ,3));


// // 2. Arguments Keyword

// const addNumbers = (...nums) =>  {
//     console.log(nums);
// };

// addNumbers(10 , 29, 367 ,54 )


// // 3. Hoisting 

// const sayHey = () => {
//     console.log("hey there ");
// };

// sayHey();


// 4. This Keyword

const obj = {
    value: 39,
    myFunction : function () {
        console.log(this);
    },

};

obj.myFunction();