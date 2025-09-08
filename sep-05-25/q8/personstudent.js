// personStudent.js

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
   
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}


export { Person, Student };
