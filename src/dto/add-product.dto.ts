import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class AddProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    descrition: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}