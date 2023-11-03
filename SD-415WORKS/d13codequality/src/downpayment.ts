export function DownPayment(CostofHouse:number,DPayment:number,interest1:number,interest2:number):number{

// let interest1:number=0.1;
// let interest2:number=0.15;

if(CostofHouse>=200000){
//multiply the difference of the amount more than 200000 by the designated interest then add 5000
    DPayment=5000 + interest1*(CostofHouse-200000)
    return DPayment}
else if(CostofHouse>100000 && CostofHouse<200000){
    DPayment=2000+interest2*(CostofHouse-100000)
    return DPayment
}
else if(CostofHouse>50000 && CostofHouse<10000){
    DPayment=1000+interest1*(CostofHouse-50000)
    return DPayment}

else{
    DPayment=0.05*CostofHouse
    return DPayment
}

}
