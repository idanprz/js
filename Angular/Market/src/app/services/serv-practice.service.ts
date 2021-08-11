import { Injectable } from '@angular/core';
import { PRODUCTS } from '../model/mock-products';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ServPracticeService {

  constructor() { }

  GetRandNum(max: number = 10): number {
    return Math.random() * max
  }

  GetProducts(): Product[] {
    return PRODUCTS
  }

  GetProductsByCategory(category:string): Product[] {
    return PRODUCTS.filter(product => product.category == category)
  }
}
