/*Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.
В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу
1-49 - Low performance
50-69 - Medium performance
70-89 - Good performance
90-100 - Very good perfomance*/

function evaluate(mathScore, litScore, physicScore) {
    let result = "";
    let calculate = (mathScore + litScore + physicScore) / 3;
    if (calculate <= 0 || calculate > 100) {
        console.error("Not correct score");
    } else if (calculate > 0 && calculate < 50) {
        result = "Low performance";
    } else if (calculate < 70) {
        result = "Medium performance";
    } else if (calculate < 90) {
        result = "Good performance";
    } else if (calculate <= 100) {
        result = "Very good performance";
    }
    return result;
}

console.log(evaluate(50, 50, 50));