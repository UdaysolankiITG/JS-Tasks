import { Dog, Cat } from './animal.js';


function animalSound(animal) {
  console.log(animal.makeSound());
}


const dog = new Dog();
const cat = new Cat();

animalSound(dog); 
animalSound(cat); 
