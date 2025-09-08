
import { Shape, Rectangle, Circle } from './shapes.js';

const shape = new Shape();
console.log('Shape area:', shape.area()); // 0

const rectangle = new Rectangle(5, 10);
console.log('Rectangle area:', rectangle.area()); // 50

const circle = new Circle(7);
console.log('Circle area:', circle.area().toFixed(2)); // approx 153.94
