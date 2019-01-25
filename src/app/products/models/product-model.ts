import { IProduct } from './iproduct';
import { Category } from './category';

export class ProductModel implements IProduct {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    suppliers: string[];
    ratings: number[];

    constructor(
        name: string,
        description: string,
        price: number,
        category: Category,
        isAvailable: boolean,
        suppliers: string[],
        ratings: number[]
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
        this.suppliers = suppliers;
        this.ratings = ratings;
    }
}
