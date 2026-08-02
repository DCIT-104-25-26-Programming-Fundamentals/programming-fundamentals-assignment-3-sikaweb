// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require("readline-sync");

// Part A: Print the multiplication table for a single number (1 to 12)
function printTable(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num}  x  ${String(i).padEnd(2)} =  ${num * i}`);
  }
}

// Part B: Print multiplication tables for every number from 1 to n
function printTablesUpToN(n) {
  if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    return;
  }

  for (let num = 1; num <= n; num++) {
    printTable(num);
    if (num !== n) {
      console.log("---------------------------");
    }
  }
}

// Main function: presents a menu and runs the chosen part
function main() {
  console.log("1. Single Table");
  console.log("2. Tables from 1 to N");
  const choice = readlineSync.questionInt("Enter your choice: ");

  if (choice === 1) {
    const num = readlineSync.questionInt("Enter a number: ");
    printTable(num);

  } else if (choice === 2) {
    const n = readlineSync.questionInt("Enter N: ");
    printTablesUpToN(n);

  } else {
    console.log("Invalid choice.");
  }
}

main();
