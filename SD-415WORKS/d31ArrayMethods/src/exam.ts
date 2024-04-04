
export type output= {
    firstName:string,
    lastName:string,
}

export function firstLast(names:string[]): output[]{

let newArr:string[][]=[]
for(let elements of names){
newArr.push(elements.split(" "))
}
let result:output[]= newArr.map(([fname,lname])=>({firstName:fname,lastName:lname}))
 
return result
 
 
}

export function replaceEnds(arr:number[],num1:number,num2:number,num3:number,num4:number):number[]{
    let newArr:number[]=arr.slice()
    newArr.splice(0,2,num1,num2)
    newArr.splice(4,5,num3,num4)
    return newArr
}

export function square(arr:number[]):number[]{
    let newArr:number[]=[]
 for(let nums of arr){
     nums=nums*nums
     newArr.push(nums)
 }
 return newArr
 }
 
 
 export function higho(func: (num: number[]) => number[], arr: number[]): number[]{
 let result=func(arr)
 return result
 }


 export function absVal(arr:number[]):number[]{
    let newArr:number[]=[]
 for(let nums of arr){
     if(nums<0){
         nums=nums*-1
         newArr.push(nums)
     }
     else
     newArr.push(nums)
     
 }
 return newArr
 }
export type sessions={
    userId:number,
    duration:number,
}
export type days={
    Session:sessions[]
    date:string,
}

export function calculateDailyTotalDuration(arr:sessions[]):number{
let total:number=0

for(let session of arr){
    let durations=session.duration
    total+=durations
}
return total

}

export function calculateTotalDuration(arr:days[]):number{
let Overalltotal:number=0;

for(let days of arr){
    let sessionTotals=days.Session
    for(let durations of sessionTotals){
        let eachDuration=durations.duration
        Overalltotal+=eachDuration
    }
}
return Overalltotal
}

export function getAllSessions(arr:days[]):sessions[]{
    let allsessions:sessions[]=[];
    for(let day of arr){
        allsessions=allsessions.concat(day.Session)
    
}
return allsessions
}

export function getAllSessionsForUser(dailyRecord:days[],num:number):sessions[]{
    let lnewresult = getAllSessions(dailyRecord).filter(item=>item.userId===num)
   
   return lnewresult
}

export function getAllDurations(dailyRecord:days[]):number[]{
    let newresult = getAllSessions(dailyRecord).map(item=>item.duration)
    return newresult
}




