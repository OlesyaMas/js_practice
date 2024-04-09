/*Використовуючи fetch та async await зробіть 2 функції, які використовують сайт 
https://jsonplaceholder.typicode.com/.

Перша функція - приймає айді посту та виводить його body.

Друга функція - за вашим бажанням.*/

import fetch from "node-fetch";

async function getInfo (id){
    let link = `https://jsonplaceholder.typicode.com/posts/${id}`;
    let result = await fetch(link);
    let post = await result.json();
    console.log(post.body);
}

getInfo(1);

async function getAllTitles() {
    let link = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(link);
    let posts = await result.json();
    let titles = [];
    for(let post of posts){
        titles.push(post.title);
    }
    console.log(titles)
}

getAllTitles();