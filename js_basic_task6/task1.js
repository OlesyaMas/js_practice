/*Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. 
За допомогою рекурсії, виведіть всі числа від start до finish.*/

function showNumbers (start, finish){
    if (start == finish){
        console.log(finish);
    } else {
        console.log(start);
        showNumbers(++start, finish);
    }
}

showNumbers(10, 15);