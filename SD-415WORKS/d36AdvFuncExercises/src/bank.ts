

/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.  
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object. 
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.  
*/

/**
 * @returns {bank} factory function that builds and returns bank object
 */

type CustomerRecord = {  //interface for the transaction object
    customerId: number;
    customerTransactions: number[];
}

type Bank = {    //interface for the bank object 
    transactionsDB: CustomerRecord[];
    getBalance: (customerId: number) => number;
    bankBalance: () => number;
}

export const bank = {} as Bank; 

export function makeBank():Bank{
 
const  transactionsDB =[
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }]
    const bank:any={
 getBalance : function (customerId:number):number {
    const customer= transactionsDB.find(customer => customer.customerId === customerId);
    let balance = 0;
    if(customer)
    for (const trans of customer.customerTransactions) { balance += trans; }
    return balance;
}, 

bankBalance : function () {
    let total = 0;
    for (const trans of transactionsDB) {
        total += this.getBalance(trans.customerId);
    };
    return total;
},

}
return bank;
}
// const bank = { transactionsDB: [], };
// bank.transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }];

// bank.getBalance = function (id) {
//     const customer = bank.transactionsDB.find(customer => customer.customerId === id);
//     let balance = 0;
//     for (const trans of customer.customerTransactions) { balance += trans; }
//     return balance;
// };

// bank.bankBalance = function () {
//     let total = 0;
//     for (const trans of this.transactionsDB) {
//         total += this.getBalance(trans.customerId);
//     }
//     return total;
// };