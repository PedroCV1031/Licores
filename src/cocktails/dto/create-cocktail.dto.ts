import { IsString, MinLength, IsNumber, IsArray, Min } from "class-validator";

export class CreateCocktailDto {
    @IsString()
    @MinLength(2)
    nombre:string;
    @IsNumber()
    @Min(3)
    precio:number;
    @IsArray()
    ingredientes:string[];
}
