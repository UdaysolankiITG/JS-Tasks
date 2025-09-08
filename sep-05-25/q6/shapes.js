
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(); 
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

export { Shape, Rectangle, Circle };
