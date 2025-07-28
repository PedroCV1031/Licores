import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cocktail extends Document{
    
    @Prop()
    nombre:string;
    
    @Prop()
    precio:number;

    @Prop()
    ingredientes:string[]
}
export const CocktailSchema=
SchemaFactory.createForClass(Cocktail);
