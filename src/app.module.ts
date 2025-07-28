import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocktailsModule } from './cocktails/cocktails.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [CocktailsModule,
  
  ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.DATABASEURL??""),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
