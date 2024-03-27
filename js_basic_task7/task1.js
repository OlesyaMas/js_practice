/*Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.
Приклади об'єктів: person, car, book, phone, city, building etc...*/

const dog = {
    breed: "Pug",
    dogName: "Oscar",
    age: 13,
    sex: "male",
    showDetails: function () {
        console.log(`My ${this.breed} name is ${this.dogName}, he is ${this.age} years old`);
    },
    actionDog: function (action) {
        console.log(`${this.dogName} ${action}`)
    }
}

const person = {
    firstName: "James",
    lastName: "Smith",
    age: 45,
    sex: "male",
    isSleeping: false,
    showDetails: function () {
        console.log(`Full Name is ${this.firstName} ${this.lastName}`);
    },
    sleepStatus: function () {
        return console.log(`${this.firstName} ${this.isSleeping ? "is sleeping" : "is not sleeping"}`);
    }
}

const bankAccount = {
    balance: 0,
    cardNumber: "4441 1253 3647 9383",
    cardOwner: "Oscar Pug",
    deposit: function(cashAmount) {
        this.balance += cashAmount;
        console.log(`Successfully deposited ${cashAmount}$`);
    },
    withdraw: function(cashAmount){
        this.balance -= cashAmount;
        console.log(`Successfully withdrawn ${cashAmount}$`);
    },
    checkBalance: function(){
        console.log(`Current balance is ${this.balance}$`);
    }
}

dog.showDetails();
dog.actionDog("bark");

person.showDetails();
person.sleepStatus();

bankAccount.checkBalance();
bankAccount.deposit(1000);
bankAccount.checkBalance();
bankAccount.withdraw(50);
bankAccount.checkBalance();