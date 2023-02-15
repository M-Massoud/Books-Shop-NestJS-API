import * as mongoose from 'mongoose';

export const BooksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
});

export interface Book extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}
