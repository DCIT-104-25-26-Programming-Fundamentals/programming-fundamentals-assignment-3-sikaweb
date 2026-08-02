// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require("readline-sync");

// Function to calculate the sum of elements in the array
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to calculate the average of elements in the array
function calculateAverage(arr) {
  return calculateSum(arr) / arr.length;
}

// Function to find the maximum value in the array
function findMax(arr) {
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// Function to find the minimum value in the array
function findMin(arr) {
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return minVal;
}

// Main function: reads numbers, calls each stat function, and prints results
function main() {
  const n = readlineSync.questionInt("How many numbers? ");

  if (n <= 0) {
    console.log("Error: The count of numbers must be a positive integer.");
    return;
  }

  const arr = [];
  for (let i = 0; i < n; i++) {
    const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
    arr.push(num);
  }

  const sum = calculateSum(arr);
  const average = calculateAverage(arr);
  const maxVal = findMax(arr);
  const minVal = findMin(arr);

  console.log();
  console.log("Results:");
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${maxVal}`);
  console.log(`Minimum: ${minVal}`);
}

main();
