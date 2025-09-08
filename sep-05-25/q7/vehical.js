

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    console.log(`${this.brand} is moving at ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, doors) {
    super(brand, speed);
    this.doors = doors;
  }
}

class Bike extends Vehicle {
  constructor(brand, speed, type) {
    super(brand, speed);
    this.type = type; // 
  }
}

export { Vehicle, Car, Bike };
