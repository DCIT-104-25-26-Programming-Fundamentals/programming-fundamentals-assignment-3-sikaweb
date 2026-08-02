// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, cols, name) {
  const matrix = [];
  console.log(`Enter matrix ${name}:`);
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const row = line.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

// Function to display a matrix in a neat, aligned grid
function displayMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowStr = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowStr += String(matrix[i][j]).padStart(5);
    }
    console.log(rowStr);
  }
}

// Part A: Compute the transpose of a matrix
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  for (let j = 0; j < cols; j++) {
    result.push([]);
    for (let i = 0; i < rows; i++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
}

// Part B: Add two matrices of the same size
function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < cols; j++) {
      result[i].push(a[i][j] + b[i][j]);
    }
  }
  return result;
}

// Part C: Multiply matrix A (M x N) by matrix B (N x P)
function multiplyMatrices(a, b) {
  const m = a.length;
  const n = a[0].length;
  const p = b[0].length;
  const result = [];
  for (let i = 0; i < m; i++) {
    result.push([]);
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i].push(sum);
    }
  }
  return result;
}

// Main function: presents a menu and runs the chosen operation
function main() {
  console.log('Matrix Operations Menu');
  console.log('1. Transpose a Matrix');
  console.log('2. Add Two Matrices');
  console.log('3. Multiply Two Matrices');
  const choice = readlineSync.questionInt('Enter your choice: ');

  if (choice === 1) {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    const matrix = readMatrix(rows, cols, 'A');
    const result = transposeMatrix(matrix);

    console.log('\nOriginal Matrix:');
    displayMatrix(matrix);
    console.log('\nTransposed Matrix:');
    displayMatrix(result);

  } else if (choice === 2) {
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    const a = readMatrix(rows, cols, 'A');
    const b = readMatrix(rows, cols, 'B');
    const result = addMatrices(a, b);

    console.log('\nMatrix A:');
    displayMatrix(a);
    console.log('\nMatrix B:');
    displayMatrix(b);
    console.log('\nSum (A + B):');
    displayMatrix(result);

  } else if (choice === 3) {
    const m = readlineSync.questionInt('Enter rows of Matrix A (M): ');
    const n = readlineSync.questionInt('Enter columns of Matrix A (N): ');
    const a = readMatrix(m, n, 'A');

    const n2 = readlineSync.questionInt(`Enter rows of Matrix B (must equal N = ${n}): `);
    const p = readlineSync.questionInt('Enter columns of Matrix B (P): ');

    if (n2 !== n) {
      console.log('Error: Number of columns in A must equal number of rows in B.');
      return;
    }

    const b = readMatrix(n2, p, 'B');
    const result = multiplyMatrices(a, b);

    console.log('\nMatrix A:');
    displayMatrix(a);
    console.log('\nMatrix B:');
    displayMatrix(b);
    console.log('\nProduct (A x B):');
    displayMatrix(result);

  } else {
    console.log('Invalid choice.');
  }
}

main();
