import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  public bookService: BookService = new BookService();

  @Post()
  addBook(): string {
    return this.bookService.addBook();
  }

  @Get()
  findBooks(): string {
    return this.bookService.findBooks();
  }

  @Patch()
  updateBook(): string {
    return this.bookService.updateBook();
  }

  @Delete()
  deleteBook(): string {
    return this.bookService.deleteBook();
  }
}
