// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Problem 1
// write a function to return the symetric diff of two arrays 
// ex: sym ([1,2,3], [2,3,4,5]);
// should return [1,4,5]; i.e the result should be only in either of two arrays but not in both

function sym() {
  // your code here  
 
}

// test here
var x1 = sym([1, 2, 3], [5, 2, 1, 4]);
var y1 = sym([1, 2, 3], [2,3,4,5]);
// console.log(x1);
//should return [3,5,4]
// console.log(y1);
// should return [1,4,5];

// Problem 2
// write a function to bubble sort the given array 
// ex: [3,2,1,5,6,4] should return o/p of [1,2,3,4,5,6];


function bubbleSort(array) {
  // your code here
  
}

var x2 = bubbleSort([2,1,3,11,10,9]);
var y2 = bubbleSort([100,90,80])

// console.log(x2);
// should return [1,2,3,9,10,11]
// console.log(y2)
// should return [80,90,100]

// Problem 3 
// write a function to sum the squares of an array 
// ex: [1,2,3] should retun 14
//ex: [1,2,3,4,5] should return 55

function sumsq(array) {
  // your code below
  
}

var x3 = sumsq([1,2,3]);
var y3 = sumsq([1,2,3,4,5]);

// console.log(x3);
// should return 14
// console.log(y3);
// should return 55

//problem 4
// using recursion create a range of numbers returned in an array 
// the array of numbers should start with startNum and end with endNum where startNum < endNum
// Ex: rangeOfNumbers(1,5) should return [1,2,3,4,5]

function rangeOfNumbers(startNum, endNum) {
  // your code below
  
}

var x4 = rangeOfNumbers(1,5);
var y4 = rangeOfNumbers(6,9);
// console.log(x4);
// console.log(y4);

// Problem 5 
// Merge all overlapping intervals.
// Ex: [[1,3],[2,6]]
// should return [1,6]
// Ex: [[1,5], [3,7], [8,9]]
// should return [[1,7], [8,9]];

var merge = function(intervals) {
  
  // your code here
    
};

// Problem 6
// create an input field with submit button that accepts numbers and throws field level error when entered text. 


// Problem 7
// Integrate google API and console the results for the given search box when clicked on search button.

// Problem 8
// Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print the message “Done”
// your code below


// Problem 9 
// Create a JS countdown timer with a 10 sec countdown that has start, stop and clear buttons.
// your code below.

//Problem 10
// create a modal dialog that opens and closes on click of button "modal"
// inside the modal dialog display upvote and downvote 




