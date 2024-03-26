/*Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). 
Поверніть результат операції. За допомогою if-else зробіть перевірки на корректність передаваємих даних 
та викидайте помилку(throw new Error() ), якщо дані невірні:
Якщо операція ділення("/"), то другий параметр не може бути 0
Для всіх операцій перший та другий параметр повинні бути числами
Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
Кількість аргументів не повинна бути більше 3-х*/

function calcOperation(number1, number2, operator) {
    let result = 0;
    if (arguments.length > 3){
        throw new Error("Кількість аргументів не повинна бути більше 3-х")
    }
    if (typeof number1 != "number" || typeof number2 != "number") {
        throw new Error("Для всіх операцій перший та другий параметр повинні бути числами");
    }
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/":
            if (number2 == 0) throw new Error("Коли операція ділення, другий параметр повинен не дорівнювати 0");
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        default:
            throw new Error("Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*");
    }
    return`${number1} ${operator} ${number2} = ${result}`;
}

try {
    console.log(calcOperation(10, 0, "/"))
} catch (error) {
    console.log("Error occured: " + error.message)
}


