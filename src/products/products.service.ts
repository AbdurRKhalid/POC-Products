import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddProductDto } from "src/dto/add-product.dto";
import { Product, ProductDocument } from "src/schemas/product.schema";

@Injectable()

export class ProductsService {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument> 
    ){}

    async add(addProductDto: AddProductDto): Promise<ProductDocument> {
        const product = new this.productModel(addProductDto);
        return product.save();
    }

    async findAll(): Promise<ProductDocument[]> {
        return this.productModel.find();
    }
}