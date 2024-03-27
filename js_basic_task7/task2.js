/*Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.*/

const book = new Object();

book.name = "Duna";
book.year = 1980;
book.author = "Zendaya";

book.getInfo = function(){
    console.log(`${this.name} was written in ${this.year} by ${this.author}`)
}

book.getInfo();

const movie = new Object();

movie.name = "Stranger Things";
movie.genre = "fantasy";
movie.imdbRank = 7.0;

movie.getInfo = function(){
    console.log(`"${this.name}" is ${this.genre} film with ${this.imdbRank} IMDb score.`)
}

movie.getInfo();