interface Transaction {
    id: number;
    type: 'credit' | 'debit';
    amount: number;

}

// Store all transactions in an array of objects
const transactions: Transaction[] = [
    { id: 1, type: 'credit', amount: 5000 },
    { id: 2, type: 'debit', amount: 1200},
    { id: 3, type: 'credit', amount: 15000},
    { id: 4, type: 'debit', amount: 500},
    { id: 5, type: 'debit', amount: 11000},
    { id: 6, type: 'credit', amount: 200},
];

// Initialize variables to store counts, total amounts, and balance
let creditCount: number = 0;
let debitCount: number = 0;
let totalCreditAmount: number = 0;
let totalDebitAmount: number = 0;
let balance: number = 0;
let suspiciousTransactionCount: number = 0;
const SUSPICIOUS_LIMIT: number = 10000;

// Process transactions using a for...of loop and conditional statements
for (const transaction of transactions) {
    if (transaction.type === 'credit') {
        creditCount++;
        totalCreditAmount += transaction.amount;
        balance += transaction.amount;
        
    } else if (transaction.type === 'debit') {
        debitCount++;
        totalDebitAmount += transaction.amount;
        balance -= transaction.amount;
        
    }
    // Check for suspicious transactions
    if (transaction.amount > SUSPICIOUS_LIMIT) {
        console.log(`Suspicious ${transaction.type} Transaction with Amount: ${transaction.amount}`);
        suspiciousTransactionCount++
}
}

// Print the results
console.log("\n--- Transaction Summary ---");

// 1. Print total number of credit and debit transactions completed
console.log(`Total number of credit transactions: ${creditCount}`);
console.log(`Total number of debit transactions: ${debitCount}`);

// 2. Print the total amount credited and debited in account
console.log(`Total amount credited: ${totalCreditAmount}`);
console.log(`Total amount debited: ${totalDebitAmount}`);

// 3. Print total amount remaining at the end in Bank Account
console.log(`Total amount remaining in account: ${balance}`);

// 4. If any transaction limit exceeds +/- 10000 then print the message and count
console.log(`Total number of suspicious transactions: ${suspiciousTransactionCount}`);