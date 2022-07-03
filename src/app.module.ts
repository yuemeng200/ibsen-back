import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthersModule } from './authers/authers.module';
import { BooksModule } from './books/books.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [AuthersModule, BooksModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
