/*За допомогою .every() перевірити, чи всі елементи масиву менше 50*/

const numbers = [0, 23, 1, -53, 49]

let checkNumber = numbers.every(x => x < 50);

if (checkNumber == false){
    console.log("Not all elements in array are less than 50.");
} else {
    console.log("All elements in array are less than 50.");
}

