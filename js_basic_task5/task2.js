/*Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, 
в якому кожен елемент буде піднесений до квадрата.*/

function calcNum(args) {
    let result = [];
    for (let arg of args) {
        result.push(Math.pow(arg, 2));
    }
    return result;
}

console.log(calcNum([3, 5, 8, 7]));
