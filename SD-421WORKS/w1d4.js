// let n = 10

// function SemIsAGenius(n) {
//     if (n <= 1)
//         return false

//     else if (n % 2 === 0) {
//         console.log(`${n} is an even number`)
//         SemIsAGenius(n - 2)
//     }
// }
// console.log(SemIsAGenius(n))


// function SemIsAPowerful(2x, 3k) {
//     if (2x === 0)
//         return 1

//     else if (3k === 1)
//         return 2

//     else
//         return 2 * 2 * 2
// }
// function SemIsAPowerful(2x, 2k) {
//     if (2x === 0)
//         return 1

//     else if (2k === 1)
//         return 2

//     else
//         return 2 * 2
// }

// function SemIsAPowerful(2x, 1k) {
//     if (2x === 0)
//         return 1

//     else if (1k === 1)
//         return 2x

//     else
//         return 2x * SemIsAPowerful(2x, 1k - 1)
// }
// console.log(SemIsAPowerful(2, 3))


// let sem = [1, 7, 2, 3, 4, 5]
// function findMax(arr) {

//     if(arr.length === 1){
//         let n = 0
//        let max = findMax(arr[n+1])
//     }
//     let max = findMax(arr)
//     let n = 
//     else if(arr.length === 0)
//         return false
//     elseif(arr.length > n + 1)

// }
// console.log(findMax(sem, 0, sem.length-1))

// class Queue {
//     constructor() {
//         this.stack1 = []; // Enqueue
//         this.stack2 = []; // Dequeue
//     }

//     enqueue(number) {
//         this.stack1.push(number);
//     }

//     dequeue() {
//         // If stack2 is empty, transfer elements from stack1
//         if (this.stack2.length === 0) {
//             // Transfer all elements from stack1 to stack2
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         // If stack2 is still empty, the queue is empty
//         if (this.stack2.length === 0) {
//             return false; // or return null, throw an exception, etc.
//         }

//         // Pop the front element from stack2 (simulating dequeue)
//         return this.stack2.pop();
//     }
// }

// // Example usage:
// const myQueue = new Queue();
// myQueue.enqueue(42);
// myQueue.enqueue(7);
// console.log(myQueue.dequeue()); // Output: 42
// console.log(myQueue.dequeue()); // Output: 7
// console.log(myQueue.dequeue()); // Output: false (or null, depending on your choice for an empty queue)

let arr = '[ a + b * ( c / ( d – e ) )] + {d / e }'
let newStack = []
function isBalanced(arr) {
    let openBracket = ['(', '{', '[']
    let closeBrackets = [')', '}', ']']

    for (elements of arr) {
        if (openBracket.includes(elements)) {
            newStack.push(elements)
        }
        else if (closeBrackets.includes(elements)) {
            let newelement = newStack.pop()
            if (openBracket.indexOf(newelement) !== closeBrackets.indexOf(elements))
                return false

            return 'is balanced'
        }
    }
}

console.log(isBalanced(arr))
