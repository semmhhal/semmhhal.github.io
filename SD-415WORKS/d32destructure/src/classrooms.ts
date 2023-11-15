

  export type Classroom = {
    roomNumber:number,
    capacity:number,
    students:Student[],
  }
  
  export type Student = {
      name:string,
      age:number,
  }   
  
export type classes={
    capacity:number,
    roomNumber:number,
}

export const classrooms = [
    {
      roomNumber: 101,
      capacity: 30,
      students: [
        { name: "Alice", age: 18 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 17 },
      ],
    },
    {
      roomNumber: 102,
      capacity: 25,
      students: [
        { name: "David", age: 20 },
        { name: "Eve", age: 18 },
      ],
    },
    {
      roomNumber: 103,
      capacity: 35,
      students: [
        { name: "Frank", age: 19 },
        { name: "Grace", age: 20 },
        { name: "Helen", age: 17 },
      ],
    },
  ];
/* 
1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns 
the average age of students across all classrooms.
 */



export function collectRoomNumbers():number[]{
  let newArr:number[]=[]

  for(let elements of classrooms){
      newArr.push(elements.roomNumber)
  }
  return newArr
}

export function collectRoomsAndCapacities():string[]{
  let newArr:string[]=[]
  for(let elements of classrooms){
    let json= JSON.stringify(elements.roomNumber)
    let json2=JSON.stringify(elements.capacity)
      newArr.push(json + "::" + json2)
  }
  return newArr
}


export function collectLabeledRoomCaps():classes[]{
  let Output:classes[]=classrooms.map((currentElement)=>({roomNumber:currentElement.roomNumber,capacity:currentElement.capacity}))
  return Output
}


export function countStudentsInClassroom(classrooms:Classroom[],num:number):number{
  let count=0
  for(let elements of classrooms){
      let StudentList=elements.students
   for(let students of StudentList){
      students;
      if(num===elements.roomNumber){
          count++
      }  
   }
  }
  return count
}


export function findClassroomsWithCapacity(classrooms:Classroom[],capacity:number):Classroom[]{
return classrooms.filter((classroom) => classroom.capacity >= capacity);
}


export function findStudentsOlderThan(classrooms:Classroom[],age:number):Student[]{
  let result: Student[] = [];
  classrooms.forEach((classroom) => {
    result = result.concat(classroom.students.filter((student) => student.age > age));
  });
  return result
}

export function averageStudentAge(classrooms:Classroom[]):number{
  const totalSum = classrooms.reduce((accumulator, currentValue) => {
      const eachStud = currentValue.students;
      const sumOfAges = eachStud.reduce((acc, curr) => acc + curr.age, 0);
      return accumulator + sumOfAges;
    }, 0);
    const count = classrooms.reduce((accumulator, currentValue) => {
      const eachStud = currentValue.students;
      return accumulator + eachStud.length;
    }, 0);
    const Avg = totalSum / count;
    return Avg;
  }


