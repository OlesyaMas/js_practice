/*Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.*/

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(5, 6, 10, 123, 5, 0, 46);

console.log(x);