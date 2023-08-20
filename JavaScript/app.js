let display = document.getElementById('word-count');
// let str = prompt("Enter a text or a paragraph");
// let trimed = str.trim();// remove space from starting and ending;
// let wordArray = str.split("");// convert string into array
// let wordCount = wordArray.length; // get the length of words

// display.innerHTML = "The number of letters are  " + wordCount + ".  " ;
// console.log(wordArray);

// const str  = "Hello. I am a string. You can separate me.";
// const splitStr = str.split(".");
// console.log(splitStr);

// Common Uses of split


// When we invoke the split() method on a string without a splitter/divider, it returns an arry containing the entire string
// const str = "Hello, I am Prashant and I am a front end engineer";
// const arrayOfWords = str.split();
// const wordCount = arrayOfWords.length;
// display.innerHTML = arrayOfWords;

// // Split using a space character

// const emtySpiliter = document.getElementById("emptyString");
// const string = "Yes, You Can Do It";
// const spaceChar = string.split(' ')
// emtySpiliter.innerHTML = spaceChar + "<br>"+ "" + string[0];


// // please note that splitting an empty string('') using an empty string as the splitter (dividers) returns an empty array but calling the split method on an empty string('') without a splitter will return an array with an empty string. It doesn't retrun an empty array. You may get this as a question in your upcoming job interviews!


// let emStr = '';

// // Returns an empty array
// let splitStr = emStr.split('');
// console.log(splitStr)// returns []

// // Returns an array with an empty string
// let noSplitStr = emStr.split();
// console.log(noSplitStr)// returns ['']


//QN 1 How to make word counter using html and JavaScript string methods



// Create an array of words from a sentence:

// How to Split a String into one Array - We can invoke(call) the split() method on string without a splitter/divider. This just means the split() method doesn't have any arguments passed to it.
// When we invoke the split() method on a string without a splitter, it returns an array containing the entire string.
let str = " What is the purpose of life and birth?"
let strArray = str.split();// without splitter, entire string will convert into array
console.log(strArray)// Output will return: [' What is the purpose of life and birth?']


// Split a non-matching character
let message = 'I am a happy Go lucky Guy';
console.log(message.split(''))// ['I am a happy Go lucky Guy']

// Split with a Limit
console.log(message.split(' ',4))// ['I', 'am', 'a', 'happy']

// Split Using Regex - We can also pass a regular expression (regex) as the splitter/divider to the split() methods. Let's consider this string to split:

let mes = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';
// Let's split this string at the period (.), exclamation point(!), and the question mark(?)

let sentence = mes.split(/[.,!,?]/);
console.log(sentence)
let totalSen = sentence.length;
console.log(totalSen);


// Replace Characters in a String Using Split () Method
let name1 = "Prashant Kumar";
let subs = name1.split(' ');
console.log(subs); // ['Prashant', 'Kumar']


let joined = subs.join('-');
console.log(joined);// Prashant-Kumar

// Split with Array Destructuring 
let person = "Prashant Kumar";
let [fName, lName] = person.split(' ');
console.log(fName, lName);

// Use the split method to reverse a string

let gratitude = "Thankyou for being in my life";
let rev = gratitude.split('').reverse('').join('');
console.log(rev); // Output will be efil ym ni gnieb rof uoyknahT


