import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AddProductDto } from "src/dto/add-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    add(@Body() addProductDto: AddProductDto) {
        return this.productsService.add(addProductDto);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }
}