
import { Vehicle, Car, Bike } from './vehical.js';

const vehicle = new Vehicle('Generic Vehicle', 50);
vehicle.move(); 

const car = new Car('Toyota', 120, 4);
car.move();
console.log(`Car doors: ${car.doors}`); 

const bike = new Bike('Yamaha', 90, 'sports');
bike.move(); 
console.log(`Bike type: ${bike.type}`);
