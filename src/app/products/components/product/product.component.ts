import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  suppliers: string[];
  ratings: number[];

  constructor() { }

  ngOnInit() {
    this.name = 'Angular for dummies';
    this.description = 'Angular Tutorial: Learn Angular from scratch step by step';
    this.price = 100;
    this.category = Category.Books;
    this.isAvailable = true;
    this.suppliers = ['Amazon', 'Ebay'];
    this.ratings = [10, 9, 8];
  }

  onBuy() {
    console.log(`You have bought this ${this.name}`);
  }
}
