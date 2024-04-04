
export function computeSalesCommission(salaried:boolean,sales:number):number{
    if(salaried===true){
        if(sales<300)
            return 0
        
        else if(sales<3500 && sales>=300) 
        return sales*0.01

        else
        return Math.floor(sales*0.018575)
    }
    else{
        if(sales<300)
        return 0

        else if (sales<3500 && sales>=300)
        return sales*0.02

        else
        return Math.floor(sales*0.0286)
    }

}

export function compoundInterest(Initialamount:number,mthlyinterest:number,year:number):number{
const MONTHS:number=12*year
let IncreasingInt:number=Initialamount;
let monthlyrate:number=(mthlyinterest/100)/12
for(let i=1;i<=MONTHS;i++){
   let interest:number=IncreasingInt*monthlyrate
   IncreasingInt=IncreasingInt+interest

}
return IncreasingInt
}