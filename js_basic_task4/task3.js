/*Використовуючи .filter(), запишіть у новий масив тільки ємейли, які містять 'gmail.com'. 
Виведіть новий відфільтрований масив.*/

const emails = ["newwmail@gmail.com", "example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"];
const result = emails.filter(x => x.includes("gmail.com"));

console.log(result);

