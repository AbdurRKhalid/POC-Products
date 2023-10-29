import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${config.database.DB_USERNAME}:${config.database.DB_PASSWORD}@cluster0.w4ykwfl.mongodb.net/?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
