import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "src/schemas/product.schema";

export class ProductsService {
    constructor(@InjectModel('Product') private readonly productSchema: Model<Product>){}

    async insertProduct(name: string, price: number, quantity: number, description: string) {
        const newProduct = new this.productSchema({
            name: name,
            price: price,
            quantity: quantity,
            description: description
        });
        const result = await newProduct.save();
        return result;
    }

    async findProducts() {
        return this.productSchema.find();
    }
}