// //////
// interface Student{
//   studentId:number;
//   quizAnswers:number[];
// }
export const bank = {}; //define bank object as type Bank
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }
];
/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        console.log(customer);
        customer.customerTransactions.push(amount);
    }
};
bank.bankBalance = function () {
    let sumtotal = 0;
    for (let i = 0; i < bank.transactionsDB.length; i++) {
        let numbercoll = bank.transactionsDB[i].customerTransactions;
        for (let j = 0; j < numbercoll.length; j++) {
            sumtotal += numbercoll[j];
        }
    }
    return sumtotal;
};
console.log(bank.bankBalance());
bank.getBalance = function (customerId) {
    let total = 0;
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        let arr1 = bank.transactionsDB[0].customerTransactions;
        for (let j = 0; j < arr1.length; j++) {
            total += arr1[j];
        }
    }
    return total;
};
console.log(bank.getBalance(1));
