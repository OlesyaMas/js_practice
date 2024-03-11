/*За допомогою .split() розбийте email на дві частини по символу '@'. 
Запишіть вихідний масив у нову змінну. */

let email = "daniel.abrams@gmail.com";
let newArray = email.split("@");

console.log(newArray);

/*За допомогою .splice() треба замінити домен пошти(те що після @, 
тобто другий елемент масиву із індексом 1) на 'changed.com'.*/

newArray.splice(1,1, "changed.com");
console.log(newArray);

/*За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' 
між двома елементами масиву, виведіть цей рядок.*/

let finalEmail= newArray.join("@");
console.log(finalEmail);