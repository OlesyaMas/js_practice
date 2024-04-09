/*Створити функцію, яка приймає два параметри - рядок, та кількість секунд.

В середині створеної функції, використовуючи SetTimeout(), зробіть так щоб переданий у функцію 
текст виводився через передану кількість секунд.*/

export function printTextWithDelay(text, time){
    setTimeout(function(){console.log(text)}, time*1000);
}

printTextWithDelay("My Text", 3);

