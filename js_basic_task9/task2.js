/*Створіть функцію, яка приймає рядок тексту та кількість секунд, 
а також колбек-функцію(яку ми створили у файлі task1.js - тобто імпортуємо її).

Ця функція повинна викликати колбек через передану кількість секунд 
і передати в нього переданий текст як аргумент. */

import { printTextWithDelay } from "./task1.js";

function showText(row, seconds, callback){
    setTimeout(function() {callback(row, seconds)}, seconds * 1000);
}

showText("New Text", 3, printTextWithDelay);


