/* Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), 
а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль. */

let sentence = "This is a row with different letters.";
let changeSymbol = "t";
let result = "";

for (let i = 0; i < sentence.length; i++) {
    result += changeSymbol.includes(sentence[i].toLowerCase())? "*" : sentence[i];
}

console.log(result);
