
export const calculator = {
    operand1: 0,
    operand2: 0,
setValues(value1:number, value2:number) {
     this.operand1 = value1;
    this.operand2 = value2;
    },
    sum(){
        return this.operand1 + this.operand2;
    },

    mul(){
        return this.operand1 * this.operand2;
    }
};  

