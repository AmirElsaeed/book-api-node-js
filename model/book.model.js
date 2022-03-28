exports.Book = class Book {

    constructor(bookId, title, storeCode, describtion, author, publisher, ISBN) {
        this.bookId = bookId;
        this.title = title;
        this.storeCode = storeCode;
        this.describtion = describtion;
        this.author = author;
        this.publisher = publisher;
        this.ISBN = ISBN;
    }
}