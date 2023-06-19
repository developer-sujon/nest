import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './interface/book.dto';

@Controller('books')
export class BookController {
  public bookService: BookService = new BookService();

  @Post()
  addBook(@Body() book: Book): Book {
    console.log(book);

    return this.bookService.addBook(book);
  }

  @Get()
  findBooks(): Book[] {
    return this.bookService.findBooks();
  }

  @Patch('/:id')
  updateBook(@Param('id') id: string, @Body() book: Book): Book {
    return this.bookService.updateBook(id, book);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string): Book {
    return this.bookService.deleteBook(id);
  }
}
