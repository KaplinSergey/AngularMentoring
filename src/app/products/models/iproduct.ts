import { Category } from './category';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category?: Category;
  isAvailable?: boolean;
  suppliers?: string[];
  ratings?: number[];
  lastUpdate?: Date;
}
