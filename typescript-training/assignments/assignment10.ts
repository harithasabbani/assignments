function printRightAlignedRightTriangle(n: number): void {
  for (let i = 1; i <= n; i++) {
    let rowPattern = '';
    // Inner loop to print leading spaces
    for (let j = 1; j <= n - i; j++) {
      rowPattern += ' ';
    }
    // Inner loop to print stars
    for (let k = 1; k <= i; k++) {
      rowPattern += '*';
    }
    console.log(rowPattern);
  }
}

// Example: Print a right-aligned right triangle with 5 rows
printRightAlignedRightTriangle(5);
