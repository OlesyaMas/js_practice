import Animal from "./Animal.js";

export default class Cat extends Animal{
    constructor(color, name, type, age, weight, owner ){
        super(color, name, type);
        this.age = age;
        this.weight = weight;
        this.owner = owner;
    }
    actionCat(action){
        console.log(`${this.name} is ${action}`);
    }
    showDetails(){
        console.log(`${this.name} has next parameters:\n age: ${this.age},\n weight: ${this.weight} kg, \n owner of cat is ${this.owner}`);
    }
}

export {Cat};