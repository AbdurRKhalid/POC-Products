export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly category: string;
    readonly quantity: string;
    readonly keywords: string[];
}