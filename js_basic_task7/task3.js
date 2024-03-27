/*Створити об'єкт Library, який має:

Масив books [] - масив, де містяться об'єкти.
Метод addBook - метод, який приймає параметри bookName, bookAuthor, bookYear та bookId та додає новий об'єкт із цими параметрами до масиву books
Метод printBookInfo - метод, який приймає параметр bookId та виводить всю інформацію(ім'я, автор, рік) книжки з таким айді
Метод printAllBooks - метод, який виводить інформацію про всі книжки в наявності(їх ім'я, авторів, роки та айді)
Потренуватись додавати нові книжки та викликати інші методи об'єкта Library*/

const library = {
    books: [],
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookYear: bookYear,
            bookId: bookId 
        })
    },
    printBookInfo: function(bookId){
        let bookInstance = this.books.find(x => x.bookId == bookId);
        console.log(`Book "${bookInstance.bookName}" was written by ${bookInstance.bookAuthor} in ${bookInstance.bookYear}.`)
    },
    printAllBooks: function() {
        for(let books of this.books){
            console.log(`Book "${books.bookName}" was written by ${books.bookAuthor} in ${books.bookYear} and has ID: ${books.bookId}`)
        }
    }
}

library.addBook("Duna", "Frank Herbert", 1965, 0);
library.addBook("Harry Potter and Philosopher's Stone", "J. K. Rowling", 1997, 1);
library.addBook("Titanic", "Filson Young", 1912, 2);


console.log(library.books);

library.printBookInfo(1);

library.printAllBooks();