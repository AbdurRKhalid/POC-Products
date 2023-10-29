import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = mongoose.HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    category: string;

    @Prop()
    quantity: number;

    @Prop()
    keywords: string;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);