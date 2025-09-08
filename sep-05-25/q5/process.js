
import { students } from './data.js';

export function calculateAverageMarks() {
  if (students.length === 0) return 0;

  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  return totalMarks / students.length;
}
