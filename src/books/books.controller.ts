import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('')
  async getAllBooks() {
    const allBooks = await this.booksService.getAllBooks();
    return allBooks;
  }

  @Get(':id')
  async getSpecificBook(@Param('id') bookId) {
    return this.booksService.getSpecificBook(bookId);
  }

  @Post('')
  async addNewBook(
    @Body('title') bookTitle: string,
    @Body('description') bookDescription: string,
    @Body('price') bookPrice: number
  ) {
    const generatedId = await this.booksService.addNewBook(
      bookTitle,
      bookDescription,
      bookPrice
    );
    return { id: generatedId };
  }

  @Patch(':id')
  async updateBook(
    @Param('id') bookId: string,
    @Body('title') bookTitle: string,
    @Body('description') bookDescription: string,
    @Body('price') bookPrice: number
  ) {
    const updatedBook = await this.booksService.updateBook(
      bookId,
      bookTitle,
      bookDescription,
      bookPrice
    );
    return updatedBook;
  }

  @Delete(':id')
  async deleteBook(@Param('id') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }
}
