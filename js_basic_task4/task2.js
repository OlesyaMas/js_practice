/*За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами.*/

const strings = ["String one", "String two", "string three"]
let textRow = "";

for (let i of strings){
    textRow = strings.toString().toUpperCase();
}

console.log(textRow);