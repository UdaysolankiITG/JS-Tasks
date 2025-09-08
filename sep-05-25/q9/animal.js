export class Animal {
  makeSound() {
    return "Some generic sound";
  }
}

export class Dog extends Animal {
  makeSound() {
    return "Woof";
  }
}

export class Cat extends Animal {
  makeSound() {
    return "Meow";
  }
}

