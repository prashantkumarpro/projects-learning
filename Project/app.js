//  // get display Element
//  let display = document.getElementById('display');

//  // Appand a value to the current display value
//  function displayVal(value) {
//    display.value += value;
//  }
// // delete value one by one 
//  function deletebtn() {
//    display.value = display.value.slice(0, -1)
//  }
//  // Clear the display
//  function ClearScreen() {
//    display.value = "";
//  }
//  // Calculate the values
//  function Calculate() {
//    let calcValue = display.value;
//    try {
//      display.value = eval(calcValue);
//    } catch (error) {
//      // If there's an error, it will show the message to the user
//      display.value = 'Sorry, Dost (Error)'
//    }
//  }


// // JavaScript slice method 

// // let input = prompt("Enter an expression ( e.g, 2+3):");
// // let operatorIndex = input.search(/[\+\-\*\/]/);
// // let num1 = Number(input.slice(0, operatorIndex));// Extract the first number
// // let num2 = Number(input.slice(operatorIndex + 1));// Extract the second number
// // let operator = input.slice(operatorIndex, operatorIndex + 1); // Extract the operator

// // let result;
// // switch (operator) {
// //   case "+":
// //     result = num1 + num2;

// //     break;

// //   case "-":
// //     result = num1 - num2;

// //   case "*":
// //     result = num1 * num2;

// //   case "/":
// //     result = num1 / num2;

// //   default:
// //     result = "Invalid operator"
// // }
// // console.log(`${num1} ${operator} ${num2} = ${result}`)



// // // Extracting string parts 

// // // The slice method

// // let str = "Apple, Aeroplane, Ant, Axe";

// // console.log(str.length)
// // console.log(str.slice(7,16))// result will be Aeroplane (Remamber: JavaScript count positions from zero. First position is 0.) 
// // console.log(str.slice(0,-1))
// // console.log(str.substring(0, 5));


// function updateRecords(records, id, prop, value) {
//   if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else {
//     records[prop]["track"] = records[prop][value]
//   }

//   return records;
// }
// updateRecords()
// console.log(updateRecords(obj, 5439, "tracks", "Take a Chance on Me"));







// the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
// Setup
// const myArray = [];
// let i = 0;
// while (i <= 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ]


// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
// Setup
// const myArray = [];
// let i = 0;
// while (i <= 5) {
//   myArray.push(i);
//   myArray.sort((a, b) => b - a);
//   i++;
// }
// console.log(myArray);// [ 5, 4, 3, 2, 1, 0 ]
// Only change code below this line


//Use a for loop to push the values 1 through 5 onto myArray.
// Setup
// const myArray = [];
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }
// console.log(myArray);//[ 1, 2, 3, 4, 5 ]


// Push the odd numbers from 1 through 9 to myArray using a for loop.
// Setup
// const myArray = [];
// for (i = 1; i <= 9; i += 2) {
//   myArray.push(i);
// }
// // Only change code below this line
// console.log(myArray);






// Declare and initialize a variable total to 0. 
// Use a for loop to add the value of 
// each element of the myArr array to total.

// Setup
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]
// }
// // Only change code below this line
// console.log(total)


// This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .
// length of arr[i], since arr[i] is itself an array.


// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(i)
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       product *= arr[i][j]
//     }

//   }
//   // Only change code above this line
//   return product;
// }

//  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));//5040


// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray)