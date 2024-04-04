
import promptsync from "prompt-sync"
const prompt = promptsync()

let commission = prompt("Enter salary? ");
let comm = prompt("what is your status?")
let result = 0;
    if (comm === "Sal") {
        if (commission < 300) {
            console.log("No Commission")
        }
        if (commission < 500 && commission >= 300) {
            result = 0.01 * commission
            console.log("your commission as a salaried individual is: " + result)
        }
        else if(commission>=500) {
            result = 0.02 * commission
            console.log("your commission as a salaried individual is:" + result)
        }
    }

    else if (comm === "NotSal") {
        if (commission < 300) {
            console.log("No Commission")}
        else if (commission >= 300 && commission < 500) {
            result = 0.02 * commission
            console.log("your commission as a non salaried person is: " + result)
        }
        else if(commission>=500) {
            result = 0.03 * commission
            console.log("your commission as a non salaried person is: " + result)
        }
    }
    else
    console.log("Nothing to show!")

