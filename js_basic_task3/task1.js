/*Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. 
Виведіть отриманий рядок(із змінами) у консоль.*/

let sentence = "ThIs is a row with different letters.";
let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let result = "";

for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i].toLowerCase())) {
        result += "*";
    } else {
        result += sentence[i];
    }
}

console.log(result);
