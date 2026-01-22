function printPyramid(rows:number):void
{
for (let i = 1; i <= rows; i++) {
        let row = "";
        // Add leading spaces
        for (let j = 0; j < rows - i; j++) {
            row += " ";
        }
        // Add stars and inner spaces
        for (let k = 0; k < 2 * i - 1; k++) {
            // Add a space between stars except for the first star of the row
            row += (k % 2 === 0) ? "*" : " ";
        }
        console.log(row);
    }
  // Lower half of the diamond (excluding the middle row)
    for (let i = rows - 1; i >= 1; i--) {
        let row = "";
        // Add leading spaces
        for (let j = 0; j < rows - i; j++) {
            row += " ";
        }
        // Add stars and inner spaces
        for (let k = 0; k < 2 * i - 1; k++) {
             // Add a space between stars except for the first star of the row
            row += (k % 2 === 0) ? "*" : " ";
        }
        console.log(row);
    }
}

const numrows=5
printPyramid(numrows);