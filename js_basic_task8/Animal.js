export default class Animal{
    constructor(color, name, type){
        this.color = color,
        this.name = name,
        this.type = type
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name}.`)
    }
    run(){
        console.log(`${this.name} is running.`)
    }
}
