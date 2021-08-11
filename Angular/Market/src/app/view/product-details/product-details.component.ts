import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() productId:string = ''
  @Input() productName:string = ''
  @Input() productCategory:string = ''
  @Input() productPrice:string = ''
  @Input() productImg:string = ''

  Qty:number = 0
}
