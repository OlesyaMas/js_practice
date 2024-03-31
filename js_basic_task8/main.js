import Cat from './Cat.js';
import Dog from './Dog.js';

const myDog1 = new Dog("black", "Oscar", "pug", 10, 25, 40);
myDog1.sayHello();
myDog1.run();
myDog1.actionDog("barking");
myDog1.showParameters();

console.log("___________________________");

const myCat1 = new Cat("white", "Pushishka", "British", 3, 7, "Olesya Maslyuk");
myCat1.sayHello();
myCat1.actionCat("Meow-Meow");
myCat1.showDetails();
myCat1.run();