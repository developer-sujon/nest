import { v4 as uuidv4 } from 'uuid';
import { Book } from './interface/book.dto';

export class BookService {
  public books: Book[] = [];

  addBook(book: Book): Book {
    book.id = uuidv4();
    this.books.push(book);
    return book;
  }

  findBooks(): Book[] {
    return this.books;
  }

  updateBook(id: string, book: Book): Book {
    const findIndex = this.books.findIndex(
      (currentBook) => currentBook.id === id,
    );

    book.id = id;
    this.books[findIndex] = book;
    return (this.books[findIndex] = book);
  }

  deleteBook(id: string): Book {
    const findBook = this.books.find((currentBook) => currentBook.id === id);
    this.books = this.books.filter((currentBook) => currentBook.id !== id);
    return findBook;
  }
}
