import { IProduct } from './iproduct';
import { Category } from './category';

export class ProductModel implements IProduct {

    constructor(
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean,
        public suppliers: string[],
        public ratings: number[]
    ) {
    }
}
