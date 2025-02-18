// // function

// function sayHello() {
//     console.log('Hey Nitish')
// }


// sayHello()


//              //argument   
// function add(a, b) {
//     console.log(a + b)
// }

// add(5,6) //parameter
// add(4, 8)


// function multiply(num1 , num2){
//     // console.log(num1 * num2)
//     ans = a*b
//     return ans ;
// }

// let a = multiply(3 , 7)
// console.log("That hey user result is", a)


// Unlimited Arguments 
        function addNumbers() {
            let ans = 0
            for(let i = 0; i< arguments.length ; i =  i + 1){
                ans = ans + arguments[i]
            }
            return ans ;

        }

        function addNumbersV2(...Nitish){
            let ans = 0
            for(let i = 0 ; i< Nitish.length ; i++){
                ans = ans + Nitish[i];
            }
            return ans ;
        }

        let result = addNumbers(10 , 20 ,304 ,48 ,547)
        console.log(result)
      
 