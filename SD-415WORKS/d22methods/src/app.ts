type Person = {
    name: string;
    age: number;
    job: string;
    sayHi(this: Person): void;
    }
   const manager: Person = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
    };
    const intern: Person= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
    };
   
   function sayHowdy(this: Person) {
   console.log("Hello, my name is ", this.name, ". My age is ", this.age, ". My job is", this.job);
 }

    manager.sayHi(); // Hello, my name is John. I am 27. My job is Software Engineer.'
 intern.sayHi(); // Hello, my name is Ben. I am 21. My job is Software Engineer Intern.
