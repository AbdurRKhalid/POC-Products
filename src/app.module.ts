import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/config';
import { ProductsModule } from './products/products.module';
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${config.database.DB_USERNAME}:${config.database.DB_PASSWORD}@cluster0.w4ykwfl.mongodb.net/?retryWrites=true&w=majority`), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
