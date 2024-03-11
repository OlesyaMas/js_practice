/* Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. */

const numbers = [-10, -100, 100, 5, 0, 0, -4, 0, 6, 7, -1, 0, 0];
let countPositive = 0;
let countNegative = 0;
let countZeroes = 0;

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositive++;
    } else if (numbers[i] < 0) {
        countNegative++;
    }
    else if (numbers[i] == 0) {
        countZeroes++;
    }
}

console.log(`Positive numbers: ${countPositive}\nNegative numbers: ${countNegative}\nZeroes: ${countZeroes}`)