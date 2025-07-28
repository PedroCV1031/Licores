import { Injectable } from '@nestjs/common';
import { CreateCocktailDto } from './dto/create-cocktail.dto';
import { UpdateCocktailDto } from './dto/update-cocktail.dto';
import { Cocktail } from './entities/cocktail.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CocktailsService {
  constructor(
    @InjectModel(Cocktail.name)
    private readonly cocktailModel: Model<Cocktail>,
  ) {}

  async create(createCocktailDto: CreateCocktailDto) {
    const cocktail = await this.cocktailModel.create(createCocktailDto);
    return cocktail;
  }

  findAll() {
    return this.cocktailModel.find({});
  }

  findOne(id: string) {
    return this.cocktailModel.findOne({_id:id});
  }

  update(id: string, UpdateCocktailDto: UpdateCocktailDto) {
    const cocktail = this.findOne(id);
    this.cocktailModel.updateOne({_id:id},UpdateCocktailDto)
  }

  remove(id: string) {
    return this.cocktailModel.deleteOne({_id:id});
  }
}

