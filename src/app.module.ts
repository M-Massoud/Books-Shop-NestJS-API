import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_ADMIN}:${process.env.DATABASE_PASSWORD}@cluster0.gzdimji.mongodb.net/?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
