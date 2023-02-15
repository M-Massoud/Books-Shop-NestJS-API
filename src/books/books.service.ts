import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './books.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Books') private booksModel: Model<Book>) {}

  async getAllBooks() {
    const allBooks = await this.booksModel.find().exec();
    return allBooks;
  }

  async getSpecificBook(id) {
    let book;
    try {
      book = await this.booksModel.findById(id);
    } catch {
      throw new NotFoundException('no book founded!!');
    }

    return book;
  }

  async addNewBook(title: string, description: string, price: number) {
    const newBook = new this.booksModel({
      title,
      description,
      price,
    });
    return newBook.save();
  }

  async updateBook(id: string, title, description, price) {
    const book = await this.booksModel
      .findByIdAndUpdate(id, { title, description, price })
      .setOptions({ new: true });

    return book;
  }

  async deleteBook(id: string) {
    const book = await this.booksModel.findByIdAndDelete(id);
    if (!book) {
      throw new NotFoundException('no book founded to be deleted!');
    }
    return { msg: 'deleted successfully', book };
  }
}
