import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { PRODUCTS } from '../../model/mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  @Input() products?: Product[]

  // products = PRODUCTS;
  // selectedProduct?: Product;
  // selectedCategory?: string;

  // onSelect(product: Product): void {
  //   this.selectedProduct = product;
  //   this.selectedCategory = product.category;
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/