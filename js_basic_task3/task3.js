/* Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, 
які знаходяться між ними.*/

let number1 = 6;
let number2 = 12;

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(number1, number2);

for (let i = minNumber + 1; i < maxNumber; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
