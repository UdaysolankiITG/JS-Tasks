
import { Student } from './personstudent.js';

const student1 = new Student('Alice', 20, 'A');
const student2 = new Student('Bob', 22, 'B');
const student3 = new Student('Charlie', 19, 'A+');

student1.getDetails(); // Name: Alice, Age: 20, Grade: A
student2.getDetails(); // Name: Bob, Age: 22, Grade: B
student3.getDetails(); // Name: Charlie, Age: 19, Grade: A+
