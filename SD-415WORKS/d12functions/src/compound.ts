
let commission = Number(prompt("Enter salary? "));
let salaried: boolean = true
let result: number = 0;

export function computerSalesCommission(commission: number) {
    if (true) {
        if   (commission < 300) {
            return "no commission"
        }
        else if (commission < 500 && commission >= 300) {
            result = 0.01 * commission
            return "your commission as a salaried individual is: " + result
        }
        else {
            result = 0.02 * commission
            return "your commission as a salaried individual is:" + result
        }
    }

    else {
        if (commission < 300) {
            return "No Commission"
        }
        else if (commission >= 300 && commission < 500) {
            result = 0.02 * commission
            return "your commission as a non salaried person is: " + result
        }
        else {
            result = 0.03 * commission
            return "your commission as a non salaried person is: " + result
        }
    }
}
console.log(computerSalesCommission(commission))