import { IProduct } from './iproduct';
import { Category } from './category';

export class ProductModel implements IProduct {

    constructor(
        public id: number = null,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public category?: Category,
        public isAvailable?: boolean,
        public suppliers?: string[],
        public ratings?: number[],
        public lastUpdate?: Date) {
    }
}
