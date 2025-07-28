import { Module } from '@nestjs/common';
import { CocktailsService } from './cocktails.service';
import { CocktailsController } from './cocktails.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cocktail, CocktailSchema } from './entities/cocktail.entity';
@Module({
  controllers: [CocktailsController],
  providers: [CocktailsService],
  imports:[
    MongooseModule.forFeature([{
      name:Cocktail.name,
      schema:CocktailSchema
    }])
  ]
})
export class CocktailsModule {}