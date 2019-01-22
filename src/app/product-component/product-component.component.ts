import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor() {}

  public name = 'Test';
  public description: string;
  public price: number;
  public category: Category;
  public isAvailable: boolean;
  public suppliers: string[];
  public ratings: number[];

  ngOnInit() {
  }

}
