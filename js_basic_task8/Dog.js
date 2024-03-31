import Animal from "./Animal.js";

export default class Dog extends Animal{
    constructor(color, name, type, age, weight, height ){
        super(color,name, type);
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    actionDog(action){
        console.log(`${this.name} is ${action}`);
    }
    showParameters(){
        console.log(`${this.name} has next parameters:\n age: ${this.age},\n weight: ${this.weight} kg, \n height: ${this.height} cm`);
    }
}
