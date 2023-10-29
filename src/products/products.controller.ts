import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "src/schemas/product.schema";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductService){}

    @Post('/add')
    async add(@Body() createProductDtop: CreateProductDto){
        await this.productsService.create(createProductDtop);
    }

    @Get('/all')
    async getAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}