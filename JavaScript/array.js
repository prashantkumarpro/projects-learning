// JavaScript array 
const fruits = ["Apple", "Banana", "Grapes", "Papaya", "Pomegranate", "Guava", "Peach", "Cherry", "Lichi", "Mango"];
console.log(fruits);

// Changing an Array element
fruits[0] = "Coconut"
console.log(fruits)// returns "Coconut"

// Access  the element of an array
let x = fruits[1];
console.log(x)// "Banana"

// The length properties and Methods
console.log(fruits.length)// 10

// Accessing the first fruits element 
console.log(fruits[0])// Coconut

// Accessing the last fruits element
console.log(fruits[fruits.length - 1])// Mango


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits)
}

// Array are Objects 
const person = { firstName: "Prashant", lastName: "Kumar", age: "23" };
console.log(person.age)// 23
console.log(person.firstName)// Prashtn
console.log(person.lastName)// Kumar
console.log(person.firstName.length)// 8

//  Converting Arrays to Strings
let aniMals = ["Tiger", "Lion", "Jackel", "Hyena"];
console.log(aniMals.toString())// Tiger,Lion,Jackel,Hyena

// The join () methods
let emaIl = ["prashantsako", "gmail.com"]
console.log(emaIl.join("@"))// prashantsako@gmail.com

// Popping and Pushing pop() method removes the last element form an array:

// The push() method adds one or more elements to the end of array
let petAnimal = ["Monkey", "Dog", "Buffalo", "Cow"];
petAnimal.push("Donkey", "Camel", "Mule", "Bull");
console.log(petAnimal)//['Monkey', 'Dog', 'Buffalo', 'Cow', 'Donkey', 'Camel', 'Mule', 'Bull']

// pop() method remove the last element from an array and returns that element

petAnimal.pop()
console.log(petAnimal)// ['Monkey', 'Dog', 'Buffalo', 'Cow', 'Donkey', 'Camel', 'Mule']


// shift() the method removes the first element from an array and returns that element
let arr = [1, 2, 3, 4, 5]
let firstElm = arr.shift()
console.log(firstElm)//1
console.log(arr)//  [2, 3, 4, 5]

// unshift () the method adds one or more elements to the beggining of an array and returns the new length of the array.
petAnimal.unshift("Cat", "Squairrel")
console.log(petAnimal)//['Cat', 'Squairrel', 'Monkey', 'Dog', 'Buffalo', 'Cow', 'Donkey', 'Camel', 'Mule']

// Splice() : This method adds or removes elements from an array. It takes three parameters: the starting index, the number of elements to remove(if any), and the elements to add (if any)

petAnimal.splice(1, 7, "Bull") // remove elm position 1 se 7 element
console.log(petAnimal)// ['Cat', 'Bull', 'Mule']


// slice()

console.log(emaIl.pop())// gmail.com
// The push() method adds a new element to an array (at the end):
console.log(fruits.push("Kiwi"));

// JavaScript Sorting Arrays
// The sort() sorts an array alphabetically

const fruit = ["Banana", "Pineapple", "Grape", "Apple", "Lychee"];
fruits.sort();
console.log(fruits);//['Apple', 'Banana', 'Grape', 'Lychee', 'Pineapple']

// the reverse() method reverses the elements in an array
fruits.reverse();
console.log(fruits);//['Pineapple', 'Lychee', 'Grape', 'Banana', 'Apple']

// Numeric sort
let num = [1, 4, 5, 9, 10, 12];
console.log(num)//[1, 4, 5, 9, 10, 12]
num.sort();
console.log(num)//[1, 10, 12, 4, 5, 9]

num.sort((a, b) => {
    return a - b;
})
console.log(num)// [1, 4, 5, 9, 10, 12]

// num in descending order
num.reverse()
console.log(num);// [12, 10, 9, 5, 4, 1]


// Value in descending order


// Get the user's input and split it into an array of numbers


// btn.addEventListener('click', () => {
//     let input = document.getElementById('input-box').value;
//     let numbers = input.split(",").map(Number);
//     console.log(numbers);
//     // sort array in a descending order
//     numbers.sort((a, b) => {
//         return b - a;
//     })
//     console.log(numbers)
// })

//The Compare Function

let nums = [33, 11, 22, 44, 432]
nums.sort((a, b) => b - a);
console.log(nums)//[432, 44, 33, 22, 11]

let Nnum = [200, 100, 44, 346];
Nnum.sort((a, b) => a - b);//
console.log(Nnum)//[44, 100, 200, 346]

// Find the highest array value
console.log(Nnum[0])// 44

// Find the lowest array value
console.log(Nnum[Nnum.length - 1])//346

//You can use Math.max.apply to find the highest number in an array:

//Sorting Object Arrays
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];
cars.sort((a, b) => a.year - b.year);
console.log(cars)

// JavaScript Array Iteration
// Array.forEach()

let arrays = ["Jan", "Feb", "March", "April"];
let text = '';
arrays.forEach((value) => {
    console.log(value)
});
// Jan
//  Feb
//  March
//  April


// map() method
let myNum = [1, 3, 4, 5, 9, 33];
let doubledArray = myNum.map((element) => element * 2);
console.log(doubledArray)//[2, 6, 8, 10, 18, 66]

let myNum2 = [1, 3, 4, 5, 9, 33];
let squreArray = myNum.map((element) => element ** 2);
console.log(squreArray)

// the filter() method
let filteredArray = doubledArray.filter((element) => element > 8);
console.log(filteredArray)//[10, 18, 66]

let filteredarray = doubledArray.filter((element) => element < 8);
console.log(filteredarray)//[2, 6]













































































// let counter = 0;
// // get input element
// let input = document.querySelector("#inc");
// // get btn element
// let btn = document.querySelector("#btn");
// // listen the counter
// btn.addEventListener('click', () => {
//     // increment the counter
//     counter = counter + 1;
//     console.log(counter)
//     input.innerHTML = counter;
// })
// let input2 = document.querySelector("#inc2");
// let btn2 = document.querySelector("#btn2");
// // listen the counter
// btn2.addEventListener('click', () => {
//     // increment the counter
//     counter = counter - 1;
//     console.log(counter)
//     input2.innerHTML = counter;
// })
