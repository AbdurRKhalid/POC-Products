import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    quantity: {type: Number, require: true},
    description: {type: String, require: true}
});

export interface Product extends Document {
    id: string;
    name: string;
    price: number;
    description: string;
}